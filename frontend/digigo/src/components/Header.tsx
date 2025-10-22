import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { 
      name: "Home", 
      href: "/",
      title: "Digital Marketing Agency | SEO & PPC Services",
      description: "Home - LumivexGrowth Digital Marketing"
    },
    { 
      name: "Services", 
      href: "/services",
      title: "Digital Marketing Services | SEO, PPC, Social Media",
      description: "Our Services - Comprehensive Digital Marketing Solutions"
    },
    { 
      name: "Portfolio", 
      href: "/portfolio",
      title: "Our Work | Digital Marketing Case Studies & Results",
      description: "Portfolio - See Our Successful Campaigns"
    },
    { 
      name: "About", 
      href: "/about",
      title: "About Us | Digital Marketing Experts & Agency",
      description: "About LumivexGrowth - Our Story & Expertise"
    },
    { 
      name: "Blog", 
      href: "/blog",
      title: "Digital Marketing Blog | SEO Tips & Strategies",
      description: "Blog - Latest Marketing Insights & Tips"
    },
    { 
      name: "Testimonials", 
      href: "/testimonials",
      title: "Client Testimonials | Success Stories & Reviews",
      description: "Testimonials - See What Our Clients Say"
    },
    { 
      name: "Contact", 
      href: "/contact",
      title: "Contact Us | Free Marketing Audit & Consultation",
      description: "Contact - Get Free Digital Marketing Audit"
    },
  ];

  const serviceDropdown = [
    { name: "Web Development", href: "web-development", description: "Responsive & Fast Websites" },
    { name: "SEO Services", href: "/seo", description: "Search Engine Optimization" },
    { name: "Ecommerce website creation", href: "/ecommerce-marketing", description: "ecommerce , marketing , website" },
    { name: "PPC Management", href: "/ppc", description: "Google Ads & Paid Search" },
    { name: "Social Media Marketing", href: "/social-media", description: "Facebook, Instagram, LinkedIn" },
    { name: "Content Marketing", href: "/content-marketing", description: "Strategy & Creation" },
    { name: "Email Marketing", href: "email-marketing", description: "Automation & Campaigns" },
  ];

  return (
    <>
      {/* Header Schema Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "LumivexGrowth Digital Marketing",
            "url": "https://lumivexgrowth.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://lumivexgrowth.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        
        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LumivexGrowth Digital Marketing Agency",
            "url": "https://lumivexgrowth.in",
            "logo": "https://lumivexgrowth.in/logo.png",
            "description": "Expert digital marketing services including SEO, PPC, social media marketing, and web development.",
            "sameAs": [
              "https://facebook.com/lumivexgrowth",
              "https://twitter.com/lumivexgrowth",
              "https://linkedin.com/company/lumivexgrowth",
              "https://instagram.com/lumivexgrowth"
            ]
          })}
        </script>
      </Helmet>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
            : "bg-white shadow-sm border-b border-gray-200"
        }`}
        role="banner"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with Schema */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 z-50 group"
              title="LumivexGrowth Digital Marketing Agency - Home"
              aria-label="LumivexGrowth Digital Marketing Agency - Home"
              itemProp="url"
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900 block" itemProp="name">
                  LumivexGrowth
                </span>
                <span className="text-xs text-gray-500 -mt-1 block hidden sm:block">
                  Digital Marketing Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with Enhanced SEO */}
            <nav 
              className="hidden lg:flex items-center space-x-1"
              role="navigation" 
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      location.pathname === item.href
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    title={item.title}
                    aria-label={item.description}
                  >
                    {item.name}
                    {item.name === "Services" && (
                      <span className="ml-1 text-xs text-blue-500">▼</span>
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {item.name === "Services" && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0"
                            title={`${service.name} - ${service.description}`}
                          >
                            <div className="font-medium">{service.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons with Enhanced Accessibility */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Phone CTA */}
              <Button 
                variant="ghost"
                size="sm"
                className="font-medium text-gray-700 hover:text-blue-600 flex items-center space-x-2"
                onClick={() => window.open('tel:+919702845312')}
                aria-label="Call us at +91 9702845312"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </Button>

              {/* Free Audit */}
              <Button 
                onClick={() => navigate("/contact")}
                variant="outline"
                size="sm"
                className="font-medium text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600"
                title="Get Free SEO Audit - LumivexGrowth"
                aria-label="Get Free Digital Marketing Audit"
              >
                Free Audit
              </Button>

              {/* Primary CTA */}
              <Button 
                onClick={() => navigate("/contact")}
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium shadow-lg shadow-blue-600/25"
                title="Start Your Digital Marketing Project"
                aria-label="Get Started with Digital Marketing Services"
              >
                <Calendar size={16} className="mr-2" />
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg z-50 text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            id="mobile-menu"
            className={`lg:hidden absolute top-16 left-0 right-0 bg-white border-t border-gray-200 z-40 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col py-4 px-6 max-h-[80vh] overflow-y-auto">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1" role="list">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        location.pathname === item.href
                          ? "text-blue-600 bg-blue-50 font-semibold"
                          : "text-gray-800 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                      title={item.title}
                      aria-label={item.description}
                    >
                      {item.name}
                    </Link>
                    
                    {/* Mobile Services Submenu */}
                    {item.name === "Services" && (
                      <div className="ml-4 mt-2 space-y-1 border-l border-gray-200 pl-4">
                        {serviceDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                            title={`${service.name} - ${service.description}`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-6 mt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full font-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/contact");
                    }}
                    aria-label="Get Free Digital Marketing Audit"
                  >
                    Free Audit
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium"
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate("/contact");
                    }}
                    aria-label="Start Your Project"
                  >
                    Get Started
                  </Button>
                </div>
                
                {/* Mobile Contact Info */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-blue-600 font-medium"
                    onClick={() => window.open('tel:+919702845312')}
                    aria-label="Call us at +91 9702845312"
                  >
                    <Phone size={16} className="mr-2" />
                    Call: +91 9702845312
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Add space for fixed header */}
      <div className="h-16 lg:h-20" aria-hidden="true"></div>
    </>
  );
};

export default Header;