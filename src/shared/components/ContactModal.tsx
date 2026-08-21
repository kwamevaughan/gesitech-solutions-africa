"use client";

import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import ContactForm from "./ContactForm";
import SimpleModal from "./SimpleModal";
import * as gtag from "@/shared/lib/gtag";
import { emptyContactFormData } from "@/shared/types/contact";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState(emptyContactFormData);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCustomBudget, setIsCustomBudget] = useState(false);

  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
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

    const toastId = toast.loading("Sending your request...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", { id: toastId });

        // Track successful form submission
        gtag.trackContactFormSubmit();

        // Reset form
        setFormData(emptyContactFormData);

        setRecaptchaToken(null);
        setIsCustomBudget(false);

        // Delay a bit before closing the modal
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        toast.error(result.error || "Something went wrong", { id: toastId });
        setError(result.error || "Something went wrong");
      }
    } catch {
      toast.error("Failed to send message", { id: toastId });
      setError("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <SimpleModal
      isOpen={isOpen}
      onClose={onClose}
      title="Request LPG Solutions Quote"
      width="max-w-4xl"
    >
      <ContactForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        error={error}
        loading={loading}
        isCustomBudget={isCustomBudget}
        setIsCustomBudget={setIsCustomBudget}
        handleRecaptcha={handleRecaptcha}
      />
    </SimpleModal>
  );
}
