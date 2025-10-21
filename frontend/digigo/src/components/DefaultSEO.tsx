import { Helmet } from "react-helmet-async";

const DefaultSEO = () => (
  <Helmet>
    {/* Basic Meta Tags */}
    <title>LumivexGrowth - Digital Marketing Agency | SEO & PPC Experts</title>
    <meta 
      name="description" 
      content="Expert digital marketing agency offering SEO, PPC, social media marketing services. 500% average ROI, 200+ successful campaigns. Get free audit." 
    />
    <meta 
      name="keywords" 
      content="digital marketing agency, SEO services, PPC management, social media marketing, web development, email marketing, content marketing, local SEO, ecommerce marketing" 
    />
    
    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="LumivexGrowth - Digital Marketing Agency | SEO & PPC Experts" />
    <meta property="og:description" content="Expert digital marketing agency offering SEO, PPC, social media marketing services. 500% average ROI, 200+ successful campaigns." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://lumivexgrowth.com" />
    <meta property="og:image" content="https://lumivexgrowth.com/og-image.jpg" />
    <meta property="og:site_name" content="LumivexGrowth" />
    
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="LumivexGrowth - Digital Marketing Agency" />
    <meta name="twitter:description" content="Expert digital marketing services with 500% average ROI. Get free audit and consultation." />
    <meta name="twitter:image" content="https://lumivexgrowth.com/twitter-image.jpg" />
    
    {/* Additional Important Meta Tags */}
    <meta name="robots" content="index, follow" />
    <meta name="author" content="LumivexGrowth" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://lumivexgrowth.com" />
    
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
        "url": "https://lumivexgrowth.com",
        "logo": "https://lumivexgrowth.com/logo.png",
        "description": "Expert digital marketing services including SEO, PPC, social media marketing, and web development.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Global",
          "addressRegion": "Worldwide",
          "postalCode": "00000",
          "addressCountry": "Global"
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
  </Helmet>
);

export default DefaultSEO;