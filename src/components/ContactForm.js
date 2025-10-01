"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
import Select from "react-select";

// Dynamically import ReCAPTCHA with SSR disabled
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false, // This ensures the component only loads on the client
});

export default function ContactForm({
  formData,
  setFormData,
  handleSubmit,
  error,
  loading,
  isCustomBudget,
  setIsCustomBudget,
  handleRecaptcha,
}) {
  // Options for React Select dropdowns
  const industryOptions = [
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Hospitality & Restaurants", label: "Hospitality & Restaurants" },
    { value: "Industrial Processing", label: "Industrial Processing" },
    { value: "Residential Complexes", label: "Residential Complexes" },
    { value: "Commercial Buildings", label: "Commercial Buildings" },
    { value: "Healthcare Facilities", label: "Healthcare Facilities" },
    { value: "Educational Institutions", label: "Educational Institutions" },
    { value: "Other", label: "Other" },
  ];

  const projectScaleOptions = [
    { value: "Small Scale", label: "Small Scale (1-5 cylinders)" },
    { value: "Medium Scale", label: "Medium Scale (6-20 cylinders)" },
    { value: "Large Scale", label: "Large Scale (21-100 cylinders)" },
    { value: "Industrial Scale", label: "Industrial Scale (100+ cylinders)" },
    { value: "Plant Installation", label: "Complete Plant Installation" },
  ];

  const timelineOptions = [
    { value: "Immediate", label: "Immediate (Within 1 month)" },
    { value: "1-3 Months", label: "1-3 Months" },
    { value: "3-6 Months", label: "3-6 Months" },
    { value: "6+ Months", label: "6+ Months" },
  ];

  const budgetOptions = [
    { value: "Under $5,000", label: "Under $5,000" },
    { value: "$5,000 - $20,000", label: "$5,000 - $20,000" },
    { value: "$20,000 - $50,000", label: "$20,000 - $50,000" },
    { value: "$50,000 - $100,000", label: "$50,000 - $100,000" },
    { value: "Over $100,000", label: "Over $100,000" },
    { value: "Custom", label: "Custom Amount" },
  ];

  // Custom styles for React Select
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      padding: "8px 12px",
      borderRadius: "12px",
      border: state.isFocused ? "2px solid #3b82f6" : "2px solid #e5e7eb",
      backgroundColor: "rgba(249, 250, 251, 0.5)",
      boxShadow: "none",
      "&:hover": {
        border: "2px solid #d1d5db",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#374151",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
        ? "#eff6ff"
        : "white",
      color: state.isSelected ? "white" : "#374151",
      "&:hover": {
        backgroundColor: state.isSelected ? "#3b82f6" : "#eff6ff",
      },
    }),
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta;
    const value = selectedOption ? selectedOption.value : "";

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Handle custom budget toggle
    if (name === "budget") {
      setIsCustomBudget(value === "Custom");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          Personal Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
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

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Business Email *
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
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700"
            >
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
              placeholder="Your Company Name"
            />
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          Business Information
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="industry"
              className="block text-sm font-semibold text-gray-700"
            >
              Industry *
            </label>
            <Select
              name="industry"
              options={industryOptions}
              value={industryOptions.find(
                (option) => option.value === formData.industry
              )}
              onChange={handleSelectChange}
              placeholder="Select your industry"
              isSearchable
              styles={selectStyles}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="teamSize"
              className="block text-sm font-semibold text-gray-700"
            >
              Project Scale *
            </label>
            <Select
              name="teamSize"
              options={projectScaleOptions}
              value={projectScaleOptions.find(
                (option) => option.value === formData.teamSize
              )}
              onChange={handleSelectChange}
              placeholder="Select project scale"
              isSearchable
              styles={selectStyles}
              required
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          Services of Interest *
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "LPG Accessories Supply", icon: "lucide:package" },
            { name: "Plant Installation", icon: "lucide:building" },
            { name: "Maintenance Services", icon: "lucide:wrench" },
            { name: "Safety Inspections", icon: "lucide:shield-check" },
            { name: "Compliance Audits", icon: "lucide:clipboard-check" },
            { name: "Staff Training", icon: "lucide:graduation-cap" },
          ].map((service) => (
            <label
              key={service.name}
              className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                formData.services.includes(service.name)
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
              }`}
            >
              <input
                type="checkbox"
                name="services"
                value={service.name}
                checked={formData.services.includes(service.name)}
                onChange={handleChange}
                className="sr-only"
              />
              <div className="flex items-center">
                <Icon
                  icon={service.icon}
                  className="text-2xl mr-3"
                  style={{ color: "#0088d2" }}
                />
                <span className="font-medium text-gray-800">
                  {service.name}
                </span>
              </div>
              {formData.services.includes(service.name) && (
                <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon icon="lucide:check" className="w-3 h-3 text-white" />
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Project Details Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          Project Details
        </h3>

        <div className="space-y-2">
          <label
            htmlFor="currentChallenges"
            className="block text-sm font-semibold text-gray-700"
          >
            Current Challenges *
          </label>
          <textarea
            id="currentChallenges"
            name="currentChallenges"
            value={formData.currentChallenges}
            onChange={handleChange}
            required
            rows={4}
            placeholder="Tell us about your LPG needs - new installation, maintenance issues, safety concerns, compliance requirements, etc."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50 resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="timeline"
              className="block text-sm font-semibold text-gray-700"
            >
              Project Timeline *
            </label>
            <Select
              name="timeline"
              options={timelineOptions}
              value={timelineOptions.find(
                (option) => option.value === formData.timeline
              )}
              onChange={handleSelectChange}
              placeholder="Select timeline"
              isSearchable
              styles={selectStyles}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-gray-700"
            >
              Budget Range *
            </label>
            <Select
              name="budget"
              options={budgetOptions}
              value={budgetOptions.find(
                (option) => option.value === formData.budget
              )}
              onChange={handleSelectChange}
              placeholder="Select budget range"
              isSearchable
              styles={selectStyles}
              required
            />
          </div>
        </div>

        {isCustomBudget && (
          <div className="space-y-2 animate-fadeIn">
            <label
              htmlFor="customBudget"
              className="block text-sm font-semibold text-gray-700"
            >
              Custom Budget Amount
            </label>
            <input
              type="text"
              id="customBudget"
              name="customBudget"
              value={formData.customBudget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50"
              placeholder="Please specify your budget"
            />
          </div>
        )}

        <div className="space-y-2">
          <label
            htmlFor="additionalInfo"
            className="block text-sm font-semibold text-gray-700"
          >
            Additional Information
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={3}
            placeholder="Any additional details about your LPG requirements..."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors duration-200 bg-gray-50/50 resize-none"
          />
        </div>
      </div>

      {/* reCAPTCHA and Submit */}
      <div className="space-y-6 pt-6 border-t border-gray-200">
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={handleRecaptcha}
            theme="light"
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-center">
            {error}
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="group relative px-8 py-4 bg-gradient-to-r from-gesitech-blue to-gesitech-green text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="relative z-10 flex items-center">
              {loading ? (
                <>
                  <Icon
                    icon="lucide:loader-2"
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  />
                  Sending your request...
                </>
              ) : (
                <>
                  Submit Proposal Request
                  <Icon
                    icon="lucide:arrow-right"
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[#4db7f0] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </button>
        </div>
      </div>
    </form>
  );
}
