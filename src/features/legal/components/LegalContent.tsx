"use client";

import Link from "next/link";

export default function LegalContent() {
  return (
    <section className="bg-gesitech-blue/10 pt-32 pb-16">
      <div className="container-fluid px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gesitech-blue mb-4">
            Terms & Privacy
          </h1>
          <p className="text-gray-600 text-lg">Last updated: 1 October 2025</p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-10">
          <Link
            href="#terms"
            className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 border border-gesitech-blue text-gesitech-blue px-6 py-2.5 rounded-xl font-semibold"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#privacy"
            className="bg-white hover:bg-gesitech-blue hover:text-white transition-all duration-300 border border-gesitech-blue text-gesitech-blue px-6 py-2.5 rounded-xl font-semibold"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 scroll-mt-32" id="terms">
          <h2 className="text-3xl font-bold text-gesitech-blue">
            Terms & Conditions
          </h2>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              1. Introduction
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Gesitech Solutions Africa. These Terms and
              Conditions (&quot;Terms&quot;) govern your use of our website
              and services. By accessing or using our services, you agree to
              be bound by these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              2. About Gesitech Solutions Africa
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gesitech Solutions Africa is a leading provider of LPG
              (Liquefied Petroleum Gas) solutions, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Supply of LPG accessories and equipment</li>
              <li>Installation of LPG plants and systems</li>
              <li>Maintenance and safety services</li>
              <li>Compliance audits and staff training</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              3. Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are provided subject to the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>
                All services are provided in accordance with industry
                standards and regulations
              </li>
              <li>
                Installation and maintenance services require proper site
                access and safety conditions
              </li>
              <li>
                Equipment supply is subject to availability and manufacturer
                specifications
              </li>
              <li>All work is performed by certified and trained professionals</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              4. Safety and Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Safety is our top priority. All our services comply with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>EPRA (Energy and Petroleum Regulatory Authority) regulations</li>
              <li>ISO 9001, 14001, and 45001 standards</li>
              <li>NFPA 58 LPG Code requirements</li>
              <li>Local and international safety standards</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              5. Liability and Warranties
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide warranties on our services and equipment as
              follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Equipment warranties as per manufacturer specifications</li>
              <li>Installation work warranty for 12 months from completion</li>
              <li>Maintenance services include performance guarantees</li>
              <li>Liability is limited to the value of services provided</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              6. Payment Terms
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms are as agreed in individual service contracts:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Quotes are valid for 30 days unless otherwise specified</li>
              <li>Payment schedules are defined in service agreements</li>
              <li>Late payment may incur additional charges</li>
              <li>All prices are exclusive of applicable taxes</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              7. Intellectual Property
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including designs, documentation,
              and proprietary methods, are the intellectual property of
              Gesitech Solutions Africa and are protected by applicable
              laws.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              8. Changes to Terms
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time.
              Changes will be posted on this page with an updated revision
              date. Continued use of our services after changes constitutes
              acceptance of the new Terms.
            </p>
          </section>
        </div>

        <div
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8 scroll-mt-32 mt-10"
          id="privacy"
        >
          <h2 className="text-3xl font-bold text-gesitech-blue">
            Privacy Policy
          </h2>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              1. Introduction
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Gesitech Solutions Africa, we are committed to protecting
              your privacy and personal information. This Privacy Policy
              explains how we collect, use, and safeguard your information
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              2. Information We Collect
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>

            <h4 className="text-xl font-semibold text-gesitech-green mb-3">
              Personal Information
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
            </ul>

            <h4 className="text-xl font-semibold text-gesitech-green mb-3">
              Technical Information
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar technologies</li>
              <li>Device and operating system information</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              3. How We Use Your Information
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing LPG solutions and services</li>
              <li>Responding to inquiries and quote requests</li>
              <li>Improving our website and services</li>
              <li>Sending relevant updates and information</li>
              <li>Complying with legal and regulatory requirements</li>
              <li>Ensuring safety and security of our services</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              4. Information Sharing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We
              may share information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>With trusted partners who assist in providing our services</li>
              <li>When required by law or regulatory authorities</li>
              <li>To protect our rights, property, or safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              5. Data Security
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate security measures to protect your
              information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Secure hosting and backup systems</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              6. Cookies and Tracking
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies to enhance your experience:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Preference cookies to remember your settings</li>
              <li>You can control cookie settings in your browser</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              7. Your Rights
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal
              information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              8. Data Retention
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only as long as necessary
              for the purposes outlined in this policy, or as required by
              law. Project-related information may be retained for
              compliance and warranty purposes.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              9. Third-Party Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms</li>
              <li>Email service providers</li>
              <li>These services have their own privacy policies</li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gesitech-blue mb-4">
              10. Changes to This Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>
        </div>

        <div className="bg-gesitech-blue/10 p-6 rounded-lg mt-10">
          <p className="text-gray-700 leading-relaxed mb-4">
            Questions about these Terms or our Privacy Policy? Contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> info@gesitech.africa
            </p>
            <p>
              <strong>Office:</strong> 7th floor, Mitsumi Business Park,
              Muthithi Road, Westlands, Nairobi
            </p>
            <p>
              <strong>Address:</strong> P.O. Box 856-00100, Kenya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
