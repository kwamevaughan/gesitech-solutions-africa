// components/SEO.js
import Head from "next/head";
import { useRouter } from "next/router"; 

const SEO = ({
  title = "Gesitech Solutions Africa | Safe, Reliable LPG Solutions Across Africa",
  description = "Trusted LPG solutions provider in Africa since 2017. We deliver world-class LPG accessories, plant installations, and maintenance services that drive growth, protect communities, and support a cleaner energy future.",
  keywords = "LPG solutions Africa, LPG accessories Kenya, LPG plant installation, LPG maintenance services, EPRA licensed LPG, ISO certified LPG services, Nairobi LPG solutions, sustainable energy Africa, LPG safety services, industrial LPG systems",
  image = "https://gesitech.africa/assets/images/opengraph.png",
  noindex = false,
  imageWidth = 1200, // Default image width
  imageHeight = 630, // Default image height
  type = "website",
  publishedTime,
  modifiedTime,
}) => {
  const router = useRouter();
  // Construct the full URL for the current page
  const canonicalUrl = `https://gesitech.africa${router.asPath === "/" ? "" : router.asPath.split("?")[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gesitech Solutions Africa" />
      <meta name="robots" content={noindex ? "noindex" : "index, follow"} />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={imageWidth.toString()} />
      <meta property="og:image:height" content={imageHeight.toString()} />
      <meta property="og:image:alt" content="Gesitech Solutions Africa - LPG Solutions & Services" />
      <meta property="og:site_name" content="Gesitech Solutions Africa" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Gesitech Solutions Africa - LPG Solutions & Services" />
      <meta name="twitter:site" content="@GesitechAfrica" />
      <meta name="twitter:creator" content="@GesitechAfrica" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />
      <meta name="application-name" content="Gesitech Solutions Africa" />
      
      {/* PWA Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Gesitech" />
      
      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi, Kenya" />
      <meta name="geo.position" content="-1.286389;36.817223" />
      <meta name="ICBM" content="-1.286389, 36.817223" />
      
      {/* Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gesitech Solutions Africa",
            "url": "https://gesitech.africa",
            "logo": "https://gesitech.africa/assets/images/logo.png",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7th floor, Mitsumi Business Park, Muthithi Road",
              "addressLocality": "Westlands",
              "addressRegion": "Nairobi",
              "postalCode": "00100",
              "addressCountry": "KE"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254-700-000-000",
              "contactType": "customer service",
              "email": "info@gesitech.africa"
            },
            "sameAs": [
              "https://www.linkedin.com/company/gesitech-solutions-africa/",
              "https://www.facebook.com/gesitechsolutions",
              "https://www.instagram.com/gesitech_solutions/"
            ],
            "foundingDate": "2017",
            "industry": "Energy Services",
            "serviceArea": {
              "@type": "Place",
              "name": "Africa"
            }
          })
        }}
      />
    </Head>
  );
};

export default SEO;