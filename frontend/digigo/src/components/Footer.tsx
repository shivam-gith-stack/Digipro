import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Shield
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "SEO Optimization", href: "/seo" },
    { name: "Google Ads Management", href: "/ppc" },
    { name: "Social Media Marketing", href: "/social-media" },
    { name: "Content Marketing", href: "/content-marketing" },
    { name: "Email Marketing", href: "/email-marketing" },
    { name: "Website Development", href: "/web-development" },
    { name: "Local SEO Services", href: "/local-seo" },
    { name: "E-commerce Marketing", href: "/ecommerce-marketing" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Free SEO Audit", href: "/free-audit" },
    { name: "Testimonials", href: "/testimonials" }
  ];

  const locations = [
    "India - Digital Marketing Services",
    "United States - SEO Company",
    "Canada - PPC Management",
    "United Kingdom - Social Media Marketing",
    "Australia - Content Marketing",
    "Global - Remote Digital Marketing"
  ];

  return (
    <>
      {/* Footer Schema Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LumivexGrowth Digital Marketing",
            "url": "https://lumivexgrowth.com",
            "logo": "https://lumivexgrowth.com/logo.png",
            "description": "Results-driven digital marketing agency helping businesses achieve 500% ROI increases through strategic SEO, PPC, and social media marketing campaigns.",
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
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "LumivexGrowth Digital Marketing Agency",
            "description": "Expert digital marketing services including SEO, PPC, social media marketing, and web development.",
            "serviceType": "Digital Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "LumivexGrowth"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "20.5937",
                "longitude": "78.9629"
              },
              "geoRadius": "10000000"
            }
          })}
        </script>
      </Helmet>

      <footer className="bg-blue-700 text-white" role="contentinfo">
        {/* Trust Badges Section */}
        <div className="bg-blue-800 border-b border-blue-600">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">500% Average ROI</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Google Certified Partner</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl">L</span>
                </div>
                <span className="text-xl font-bold">
                  LumivexGrowth Marketing
                </span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                <strong>Results-driven digital marketing agency</strong> helping businesses across 12+ industries achieve 
                <strong> 500% ROI increases</strong> through strategic <strong>SEO optimization, PPC management, and social media marketing</strong> campaigns. 
                Certified Google & Facebook Partner serving clients worldwide since 2020.
              </p>
              
              {/* Location Keywords */}
              <div className="pt-4">
                <h4 className="text-white font-semibold mb-3 text-sm">Serving Locations:</h4>
                <div className="flex flex-wrap gap-2">
                  {locations.map((location, index) => (
                    <span 
                      key={index}
                      className="bg-white/10 px-2 py-1 rounded text-xs text-white/80"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com/lumivexgrowth" 
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com/lumivexgrowth" 
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/lumivexgrowth" 
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://instagram.com/lumivexgrowth" 
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Services with Internal Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Digital Marketing Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.href}
                      className="text-white/80 hover:text-white transition-colors text-sm block py-1"
                      title={`${service.name} - LumivexGrowth Marketing`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links with Semantic Structure */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Navigation</h3>
              <ul className="space-y-3" role="navigation" aria-label="Quick links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm block py-1"
                      title={link.name}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Contact with Enhanced SEO */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Get Marketing Insights</h3>
              <p className="text-white/80 text-sm">
                Subscribe to our newsletter for <strong>expert digital marketing tips</strong>, 
                <strong> SEO strategies</strong>, and industry insights delivered weekly.
              </p>
              <div className="space-y-3">
                <form className="flex space-x-2" role="form" aria-label="Newsletter subscription">
                  <Input 
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    type="email"
                    aria-label="Email address for newsletter"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="secondary" 
                    size="sm" 
                    className="bg-white/80 text-blue-700 hover:bg-white/90 shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight size={16} />
                  </Button>
                </form>
                <p className="text-white/60 text-xs">
                  No spam. Unsubscribe anytime. GDPR compliant.
                </p>
              </div>
              
              {/* Enhanced Contact Info with Schema */}
              <div className="space-y-3 pt-4 border-t border-white/20" itemScope itemType="https://schema.org/Organization">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-white" />
                  <span className="text-white/80 text-sm" itemProp="email">
                    shivam.gupta14083110@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-white" />
                  <span className="text-white/80 text-sm" itemProp="telephone">
                    +91 9702845312
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-white" />
                  <span className="text-white/80 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="addressLocality">Global</span> - 
                    <span itemProp="addressRegion"> Serving Clients Worldwide</span>
                  </span>
                </div>
                <div className="pt-2">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm font-medium"
                    title="Contact LumivexGrowth Marketing"
                  >
                    <ArrowRight size={14} className="mr-1" />
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Enhanced Links */}
        <div className="border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm text-center md:text-left">
                © {currentYear} <strong>LumivexGrowth Digital Marketing Agency</strong>. All rights reserved. | 
                <span className="ml-2">Expert SEO, PPC & Social Media Marketing Services</span>
              </div>
              <div className="flex space-x-6 text-sm">
                <Link 
                  to="/privacy-policy" 
                  className="text-white/60 hover:text-white transition-colors"
                  title="Privacy Policy - LumivexGrowth Marketing"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="text-white/60 hover:text-white transition-colors"
                  title="Terms of Service - LumivexGrowth Marketing"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/sitemap" 
                  className="text-white/60 hover:text-white transition-colors"
                  title="Sitemap - LumivexGrowth Marketing"
                >
                  Sitemap
                </Link>
                <Link 
                  to="/cookie-policy" 
                  className="text-white/60 hover:text-white transition-colors"
                  title="Cookie Policy - LumivexGrowth Marketing"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;