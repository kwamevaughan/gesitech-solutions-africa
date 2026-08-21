"use client";

import { useEffect, useState, type FormEvent } from "react";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import SimpleModal from "./SimpleModal";
import { emptyProductEnquiryFormData } from "@/shared/types/productEnquiry";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function ProductEnquiryModal({
  isOpen,
  onClose,
  productName,
}: ProductEnquiryModalProps) {
  const [formData, setFormData] = useState(emptyProductEnquiryFormData);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setFormData({
      ...emptyProductEnquiryFormData,
      product: productName || "",
      message: productName
        ? `I'm interested in the ${productName}. Please send me more details.`
        : "",
    });
    setError("");
  }, [isOpen, productName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA");
      setLoading(false);
      return;
    }

    const toastId = toast.loading("Sending your enquiry...");

    try {
      const response = await fetch("/api/product-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Enquiry sent successfully!", { id: toastId });
        setFormData(emptyProductEnquiryFormData);
        setRecaptchaToken(null);
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(result.error || "Something went wrong", { id: toastId });
        setError(result.error || "Something went wrong");
      }
    } catch {
      toast.error("Failed to send enquiry", { id: toastId });
      setError("Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title={productName ? `Enquire About ${productName}` : "Enquire About Our Products"}
      width="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
            placeholder="Enter your full name"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
              placeholder="your.email@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
              placeholder="+254 700 000000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
            placeholder="Your company name (optional)"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50 resize-none"
            placeholder="Tell us what you need..."
          />
        </div>

        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={setRecaptchaToken}
            theme="light"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={loading}
            className="group relative px-8 py-3 bg-gradient-to-r from-gesitech-blue to-gesitech-green text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
          >
            <span className="relative z-10 flex items-center">
              {loading ? (
                <>
                  <Icon
                    icon="lucide:loader-2"
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Enquiry
                  <Icon
                    icon="lucide:arrow-right"
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </SimpleModal>
  );
}
