"use client";

import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "@/shared/layouts/Navbar";
import Footer from "@/shared/layouts/Footer";
import ScrollToTop from "@/shared/components/ScrollToTop";
import AnalyticsPageview from "@/shared/components/AnalyticsPageview";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsPageview />
      </Suspense>

      <div className="min-h-screen relative overflow-hidden mx-auto">
        <Navbar />

        <ScrollToTop />

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </div>

      <Toaster
        position="top-center"
        containerStyle={{
          zIndex: 99999,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#374151",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            fontSize: "14px",
            fontWeight: "500",
          },
          success: {
            style: {
              background: "#f0fdf4",
              color: "#166534",
              border: "1px solid #bbf7d0",
            },
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            style: {
              background: "#fef2f2",
              color: "#dc2626",
              border: "1px solid #fecaca",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
          loading: {
            style: {
              background: "#eff6ff",
              color: "#1d4ed8",
              border: "1px solid #dbeafe",
            },
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#fff",
            },
          },
        }}
      />
    </>
  );
}
