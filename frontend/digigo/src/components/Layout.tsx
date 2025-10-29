import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Default SEO Meta Tags for all pages */}
      <Helmet>
        {/* Basic Meta Tags */}
        <title>LumivexGrowth - Digital Marketing Agency | SEO & PPC Experts</title>
        <meta 
          name="description" 
          content="Expert digital marketing agency offering SEO, PPC, social media marketing services. 500% average ROI, 200+ successful campaigns. Get free audit." 
        />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, PPC management, social media marketing, web development, email marketing, content marketing, local SEO, ecommerce marketing, website development in Mumbai, SEO agency India, web development company in Mumbai" 
        />
        
        {/* Essential Meta Tags */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://lumivexgrowth.in" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="LumivexGrowth - Digital Marketing Agency | SEO & PPC Experts" />
        <meta property="og:description" content="Expert digital marketing agency offering SEO, PPC, social media marketing services. 500% average ROI, 200+ successful campaigns." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lumivexgrowth.in" />
        <meta property="og:site_name" content="LumivexGrowth" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LumivexGrowth - Digital Marketing Agency" />
        <meta name="twitter:description" content="Expert digital marketing services with 500% average ROI. Get free audit and consultation." />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="LumivexGrowth" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LumivexGrowth Digital Marketing Agency",
            "url": "https://lumivexgrowth.in",
            "description": "Expert digital marketing services including SEO, PPC, social media marketing, and web development.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9702845312",
              "contactType": "customer service",
              "email": "shivam.gupta14083110@gmail.com",
              "areaServed": ["IN", "US", "CA", "GB", "AU"],
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://facebook.com/lumivexgrowth",
              "https://twitter.com/lumivexgrowth",
              "https://linkedin.com/company/lumivexgrowth",
              "https://instagram.com/lumivexgrowth"
            ]
          })}
        </script>

        {/* Additional Schema for Chatbot */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "LumivexGrowth AI Chatbot",
            "url": "https://lumivexgrowth.in",
            "description": "AI-powered chatbot for digital marketing assistance, website development queries, and SEO services information.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "permissions": "microphone",
            "offers": {
              "@type": "Offer",
              "description": "Free digital marketing consultation"
            }
          })}
        </script>
      </Helmet>

      {/* Your existing layout structure */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Chatbot - Appears on all pages at bottom-right */}
       
      </div>
    </>
  );
};

export default Layout;