import { useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

export default function Privacy() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SEO 
        title="Privacy Policy - Gesitech Solutions Africa"
        description="Privacy policy for Gesitech Solutions Africa. Learn how we collect, use, and protect your personal information and data when using our LPG services."
        keywords="Gesitech privacy policy, data protection Kenya, LPG services privacy, personal information security, GDPR compliance Africa"
        noindex={false}
      />
      
      <div className="min-h-screen relative overflow-hidden mx-auto">
        {/* Header */}
        <Header />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <section className="bg-gesitech-blue/10 pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-7xl lg:text-5xl font-bold text-gesitech-blue mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 text-lg">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Gesitech Solutions Africa, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following types of information:
                </p>
                
                <h3 className="text-xl font-semibold text-gesitech-green mb-3">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and business details</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gesitech-green mb-3">Technical Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar technologies</li>
                  <li>Device and operating system information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">3. How We Use Your Information</h2>
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">4. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may share information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>With trusted partners who assist in providing our services</li>
                  <li>When required by law or regulatory authorities</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">5. Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your information:
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">6. Cookies and Tracking</h2>
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">7. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">8. Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information only as long as necessary for the purposes outlined in this policy, or as required by law. Project-related information may be retained for compliance and warranty purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">9. Third-Party Services</h2>
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">10. Contact Us</h2>
                <div className="bg-gesitech-blue/10 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@gesitech.africa</p>
                    <p><strong>Office:</strong> 7th floor, Mitsumi Business Park, Muthithi Road, Westlands, Nairobi</p>
                    <p><strong>Address:</strong> P.O. Box 856-00100, Kenya</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">11. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
      </div>
    </>
  );
}