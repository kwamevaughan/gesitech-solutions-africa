import { useState, useEffect } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

export default function Terms() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SEO 
        title="Terms & Conditions - Gesitech Solutions Africa"
        description="Terms and conditions for Gesitech Solutions Africa LPG services, including warranties, liability, and service agreements for safe and reliable LPG solutions."
        keywords="LPG terms conditions, Gesitech warranty, LPG service agreement, EPRA compliance terms, LPG safety regulations Kenya"
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
                Terms & Conditions
              </h1>
              <p className="text-gray-600 text-lg">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Gesitech Solutions Africa. These Terms and Conditions (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">2. About Gesitech Solutions Africa</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Gesitech Solutions Africa is a leading provider of LPG (Liquefied Petroleum Gas) solutions, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Supply of LPG accessories and equipment</li>
                  <li>Installation of LPG plants and systems</li>
                  <li>Maintenance and safety services</li>
                  <li>Compliance audits and staff training</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">3. Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided subject to the following terms:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All services are provided in accordance with industry standards and regulations</li>
                  <li>Installation and maintenance services require proper site access and safety conditions</li>
                  <li>Equipment supply is subject to availability and manufacturer specifications</li>
                  <li>All work is performed by certified and trained professionals</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">4. Safety and Compliance</h2>
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">5. Liability and Warranties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide warranties on our services and equipment as follows:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Equipment warranties as per manufacturer specifications</li>
                  <li>Installation work warranty for 12 months from completion</li>
                  <li>Maintenance services include performance guarantees</li>
                  <li>Liability is limited to the value of services provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">6. Payment Terms</h2>
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
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including designs, documentation, and proprietary methods, are the intellectual property of Gesitech Solutions Africa and are protected by applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">8. Contact Information</h2>
                <div className="bg-gesitech-blue/10 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> info@gesitech.africa</p>
                    <p><strong>Office:</strong> 7th floor, Mitsumi Business Park, Muthithi Road, Westlands, Nairobi</p>
                    <p><strong>Address:</strong> P.O. Box 856-00100, Kenya</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gesitech-blue mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the new Terms.
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