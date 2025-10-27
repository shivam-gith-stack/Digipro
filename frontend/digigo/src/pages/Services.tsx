import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import { 
  Search, 
  Target, 
  Share2, 
  PenTool, 
  Mail, 
  Code, 
  TrendingUp, 
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap,
  Globe,
  Award,
  Clock,
  DollarSign,
  LineChart,
  ShoppingCart,
  Smartphone,
  Video,
  Heart,
  ChevronDown,
  ChevronUp,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Main Page SEO Meta Data - Optimized with Target Keywords
  const pageMeta = {
    title: "Website Development in Mumbai | SEO Agency India | Web Development Company Mumbai",
    description: "Leading website designers in Mumbai & SEO agency India. Top web development company in Mumbai offering comprehensive SEO services in India. 500% ROI guaranteed. Free audit.",
    keywords: "website development in Mumbai, website designers in Mumbai, web development company in Mumbai, SEO agency India, SEO services in India, SEO agency Mumbai, India SEO company, digital marketing Mumbai, e-commerce development, local SEO Mumbai",
    canonical: "https://lumivexgrowth.in/services"
  };

  const services = [
    {
      icon: Code,
      title: "Website Development in Mumbai",
      subtitle: "Professional Website Designers Mumbai",
      description: "Leading website designers in Mumbai creating stunning, responsive websites that drive conversions and business growth. Custom web development solutions for Mumbai businesses.",
      features: [
        "Custom website development Mumbai",
        "Mobile-responsive design optimization",
        "Speed & performance optimization",
        "Conversion rate optimization (CRO)",
        "E-commerce functionality development",
        "SEO-friendly website structure",
        "Website maintenance & support"
      ],
      results: "150% conversion rate improvement",
      pricing: "Starting from ₹25,000 (one-time)",
      duration: "2-4 weeks completion",
      color: "from-indigo-500 to-purple-500",
      meta: {
        title: "Website Development in Mumbai | Professional Website Designers | 2025",
        description: "Professional website development in Mumbai by expert website designers. Custom web design, mobile optimization, and conversion-focused development services.",
        keywords: "website development in Mumbai, website designers in Mumbai, web development company Mumbai, custom website development, responsive web design"
      }
    },
    {
      icon: Search,
      title: "SEO Agency India & Mumbai",
      subtitle: "Comprehensive SEO Services India",
      description: "Leading SEO agency India providing complete SEO services across India. Dominate Google rankings with our proven SEO strategies for Mumbai and national markets.",
      features: [
        "Comprehensive SEO services India",
        "Local SEO optimization Mumbai",
        "Technical SEO audits & fixes",
        "Quality link building campaigns",
        "Google My Business optimization",
        "National & international SEO",
        "Monthly performance reporting"
      ],
      results: "300% increase in organic traffic",
      pricing: "Starting from ₹15,000/month",
      duration: "2-3 months for significant results",
      color: "from-blue-500 to-cyan-500",
      meta: {
        title: "SEO Agency India | SEO Services in India | Mumbai SEO Agency 2025",
        description: "Top SEO agency India offering comprehensive SEO services in India. Local SEO Mumbai, technical SEO, and national ranking strategies for business growth.",
        keywords: "SEO agency India, SEO services in India, SEO agency Mumbai, India SEO company, local SEO Mumbai, search engine optimization"
      }
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development Mumbai",
      subtitle: "Online Store Development",
      description: "Complete e-commerce solutions for Mumbai businesses. Create high-converting online stores with seamless shopping experiences and integrated payment systems.",
      features: [
        "E-commerce website development",
        "Shopping cart optimization",
        "Payment gateway integration",
        "Inventory management systems",
        "Mobile shopping optimization",
        "SEO for e-commerce",
        "Sales analytics dashboard"
      ],
      results: "Average 150% increase in online sales",
      pricing: "Starting from ₹35,000",
      duration: "3-5 weeks development",
      color: "from-orange-500 to-red-500",
      meta: {
        title: "E-commerce Development Mumbai | Online Store Development | 2025",
        description: "Professional e-commerce development in Mumbai. Create high-converting online stores with integrated payment systems and mobile optimization.",
        keywords: "e-commerce development Mumbai, online store development, e-commerce website, shopping cart development, payment integration"
      }
    },
    {
      icon: Target,
      title: "Google Ads Management Mumbai",
      subtitle: "PPC Agency India",
      description: "Expert Google Ads management for Mumbai businesses and PPC services across India. Maximize ROI with targeted advertising campaigns.",
      features: [
        "Google Ads campaign setup",
        "Advanced PPC strategies India",
        "Ad copy & creative development",
        "Landing page optimization",
        "Conversion tracking setup",
        "ROI optimization",
        "Weekly performance reports"
      ],
      results: "500% return on ad spend",
      pricing: "Starting from ₹8,000/month + ad spend",
      duration: "Results within 30 days",
      color: "from-green-500 to-emerald-500",
      meta: {
        title: "Google Ads Management Mumbai | PPC Agency India | ROI Optimization",
        description: "Expert Google Ads management in Mumbai and PPC services across India. Maximize advertising ROI with targeted campaigns and conversion optimization.",
        keywords: "Google Ads Mumbai, PPC agency India, pay per click management, Google Ads management, advertising ROI"
      }
    },
    {
      icon: Share2,
      title: "Social Media Marketing Mumbai",
      subtitle: "India Social Media Agency",
      description: "Comprehensive social media marketing services for Mumbai businesses and social media management across India. Build brand community and engagement.",
      features: [
        "Social media strategy development",
        "Content creation & curation",
        "Community management Mumbai",
        "Paid social advertising",
        "Influencer marketing India",
        "Social media analytics",
        "Brand reputation monitoring"
      ],
      results: "250% increase in engagement",
      pricing: "Starting from ₹12,000/month",
      duration: "Immediate engagement growth",
      color: "from-pink-500 to-rose-500",
      meta: {
        title: "Social Media Marketing Mumbai | India Social Media Agency | 2025",
        description: "Professional social media marketing in Mumbai and social media management across India. Increase engagement and build brand community.",
        keywords: "social media marketing Mumbai, social media agency India, social media management, community management, social media advertising"
      }
    },
    {
      icon: PenTool,
      title: "Content Marketing Services India",
      subtitle: "Professional Copywriting Mumbai",
      description: "Content marketing services across India and professional copywriting in Mumbai. Create compelling content that converts and builds authority.",
      features: [
        "Content strategy development",
        "Professional copywriting Mumbai",
        "Blog writing & optimization",
        "Email marketing campaigns",
        "Video content production",
        "Content performance analytics",
        "SEO content optimization"
      ],
      results: "200% increase in qualified leads",
      pricing: "Starting from ₹10,000/month",
      duration: "2-3 months for momentum",
      color: "from-purple-500 to-indigo-500",
      meta: {
        title: "Content Marketing Services India | Professional Copywriting Mumbai",
        description: "Comprehensive content marketing services across India and professional copywriting in Mumbai. Drive leads and build brand authority.",
        keywords: "content marketing India, copywriting Mumbai, content strategy, blog writing, email marketing"
      }
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      subtitle: "Lead Nurturing Solutions",
      description: "Advanced email marketing automation for Mumbai businesses and lead nurturing solutions across India. Maximize customer lifetime value.",
      features: [
        "Email marketing strategy",
        "Automated sequence creation",
        "List segmentation Mumbai",
        "Email template design",
        "A/B testing optimization",
        "Deliverability optimization",
        "Comprehensive analytics"
      ],
      results: "400% increase in email ROI",
      pricing: "Starting from ₹8,000/month",
      duration: "15-30 days setup",
      color: "from-teal-500 to-cyan-500",
      meta: {
        title: "Email Marketing Automation | Lead Nurturing Solutions | 2025",
        description: "Advanced email marketing automation and lead nurturing solutions for businesses in Mumbai and across India. Maximize customer engagement.",
        keywords: "email marketing automation, lead nurturing, email campaigns, marketing automation, email segmentation"
      }
    },
    {
      icon: MapPin,
      title: "Local SEO Services Mumbai",
      subtitle: "Google Business Profile Optimization",
      description: "Specialized local SEO services for Mumbai businesses. Dominate local search results and Google Maps rankings with our proven strategies.",
      features: [
        "Google Business Profile optimization",
        "Local citation building Mumbai",
        "Local keyword optimization",
        "Review management & generation",
        "Local link building",
        "Map pack optimization",
        "Local SEO analytics"
      ],
      results: "Top 3 Google Maps rankings",
      pricing: "Starting from ₹10,000/month",
      duration: "1-2 months for local dominance",
      color: "from-red-500 to-orange-500",
      meta: {
        title: "Local SEO Services Mumbai | Google Business Profile Optimization | 2025",
        description: "Specialized local SEO services for Mumbai businesses. Optimize Google Business Profile and dominate local search results.",
        keywords: "local SEO Mumbai, Google Business Profile optimization, local search optimization, Google Maps ranking, local citations"
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Mumbai Market Analysis",
      description: "Comprehensive analysis of your business and Mumbai market landscape with competitor research.",
      icon: Search,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "India & Local Strategy Development", 
      description: "Custom strategy creation for India market penetration and Mumbai local dominance.",
      icon: Target,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Website Development & SEO Implementation",
      description: "Expert execution of website development in Mumbai and SEO services across India.",
      icon: Code,
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Performance Optimization & Reporting",
      description: "Continuous optimization for maximum ROI with detailed India & Mumbai performance reports.",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  const guarantees = [
    {
      icon: Award,
      title: "Google Certified Partner India",
      description: "Certified Google Partner providing expert SEO and advertising services across India.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Mumbai Based Web Development Company",
      description: "Local website designers in Mumbai with understanding of local market dynamics.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Globe,
      title: "India SEO Company Expertise",
      description: "Comprehensive SEO services covering all major cities and regions across India.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: TrendingUp,
      title: "500% ROI Performance Guarantee",
      description: "If we don't improve your metrics within 90 days, we'll work for free until we do.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: Clock,
      title: "24/7 Mumbai Support Team",
      description: "Round-the-clock monitoring and support from our Mumbai-based team.",
      color: "text-cyan-600 bg-cyan-100"
    },
    {
      icon: BarChart3,
      title: "Transparent India & Mumbai Reporting",
      description: "Monthly detailed reports showing performance across India and Mumbai markets.",
      color: "text-pink-600 bg-pink-100"
    }
  ];

  const faqs = [
    {
      question: "Why choose your website development company in Mumbai over others?",
      answer: "As leading website designers in Mumbai, we offer custom web development solutions specifically tailored for Mumbai businesses. Our local expertise combined with national SEO agency India capabilities ensures your website performs exceptionally both locally and across India. We understand Mumbai market dynamics and integrate local SEO strategies from day one.",
      meta: {
        title: "Website Development Company Mumbai | Website Designers Mumbai | Local Expertise",
        description: "Choose our website development company in Mumbai for local expertise and India-wide SEO capabilities. Professional website designers in Mumbai with custom solutions.",
        keywords: "website development company Mumbai, website designers Mumbai, web development Mumbai, local web designers, Mumbai website development"
      }
    },
    {
      question: "What makes your SEO agency India different from other SEO companies?",
      answer: "Our SEO agency India stands out through comprehensive SEO services covering both national India markets and local Mumbai optimization. We combine technical expertise with local market knowledge, providing complete SEO services in India while maintaining strong Mumbai local SEO presence. As an India SEO company with Mumbai roots, we offer the best of both worlds.",
      meta: {
        title: "SEO Agency India | SEO Services in India | India SEO Company Differences",
        description: "Our SEO agency India offers comprehensive services covering national and local markets. Complete SEO services in India with Mumbai local expertise.",
        keywords: "SEO agency India, SEO services in India, India SEO company, SEO company India, national SEO services"
      }
    },
    {
      question: "Do you offer both website development in Mumbai and SEO services across India?",
      answer: "Yes, we provide complete website development in Mumbai through our expert website designers, while also offering comprehensive SEO services across India. This integrated approach allows Mumbai businesses to have locally-developed websites optimized for national Indian markets. Our web development company in Mumbai serves as the foundation for our India-wide SEO agency services.",
      meta: {
        title: "Website Development Mumbai & SEO Services India | Integrated Digital Marketing",
        description: "Complete website development in Mumbai and SEO services across India. Integrated approach for Mumbai businesses targeting national markets.",
        keywords: "website development Mumbai, SEO services India, web development and SEO, integrated digital marketing, Mumbai web development India SEO"
      }
    },
    {
      question: "How quickly can I see results from your SEO services in India?",
      answer: "Results from our SEO services in India typically show within 2-3 months, with significant growth achieved within 6 months. For local SEO in Mumbai, results can be seen even faster, often within 4-6 weeks. As a professional SEO agency India, we focus on sustainable growth through white-hat techniques that deliver lasting results for businesses across India.",
      meta: {
        title: "SEO Services India Results Timeline | SEO Agency India Performance | 2025",
        description: "SEO services in India show results in 2-3 months, with significant growth in 6 months. Professional SEO agency India delivering sustainable results.",
        keywords: "SEO services India results, SEO agency India timeline, India SEO performance, SEO results timeframe, search engine optimization India"
      }
    },
    {
      question: "What industries do you serve as a web development company in Mumbai?",
      answer: "Our web development company in Mumbai serves diverse industries including e-commerce, healthcare, education, real estate, hospitality, and professional services. As website designers in Mumbai with India-wide reach, we've delivered successful projects for 50+ businesses across Maharashtra and throughout India. Each industry receives customized solutions from our Mumbai-based development team.",
      meta: {
        title: "Web Development Company Mumbai Industries | Mumbai Website Designers Clients",
        description: "Web development company in Mumbai serving e-commerce, healthcare, education, real estate, and professional services. Expert website designers for diverse industries.",
        keywords: "web development company Mumbai industries, Mumbai website designers, industry-specific web development, Mumbai web development clients"
      }
    },
    {
      question: "Can you help with both Mumbai local SEO and national India SEO?",
      answer: "Absolutely! We specialize in both Mumbai local SEO for geographic targeting and comprehensive India SEO for national visibility. Our SEO agency India services include local citation building for Mumbai businesses while simultaneously building national authority through quality link building and content strategies. This dual approach maximizes your visibility across all Indian markets.",
      meta: {
        title: "Mumbai Local SEO & India National SEO | Comprehensive SEO Services | 2025",
        description: "Complete Mumbai local SEO and India national SEO services. Local citation building with national authority development for maximum visibility.",
        keywords: "Mumbai local SEO, India national SEO, local and national SEO, comprehensive SEO services, geographic SEO targeting"
      }
    },
    {
      question: "What is your pricing for website development in Mumbai?",
      answer: "Website development in Mumbai starts from ₹25,000 for basic websites, going up to ₹2,00,000+ for complex e-commerce platforms. As professional website designers in Mumbai, we offer transparent pricing with no hidden costs. Each project from our web development company in Mumbai includes responsive design, SEO foundation, and 3 months of free support.",
      meta: {
        title: "Website Development Mumbai Pricing | Web Development Company Mumbai Costs | 2025",
        description: "Website development in Mumbai starts from ₹25,000. Transparent pricing from professional website designers in Mumbai with responsive design and SEO foundation.",
        keywords: "website development Mumbai pricing, web development company Mumbai costs, Mumbai website design prices, web development costs Mumbai"
      }
    },
    {
      question: "How do you measure success as an SEO agency India?",
      answer: "As a leading SEO agency India, we measure success through key metrics: organic traffic growth, keyword rankings improvement, conversion rate increases, and ROI calculation. For our SEO services in India, we provide monthly reports showing progress across all Indian markets while also tracking Mumbai-specific performance for local businesses.",
      meta: {
        title: "SEO Agency India Success Metrics | SEO Services India Performance Measurement",
        description: "SEO agency India measures success through organic traffic, keyword rankings, conversions, and ROI. Comprehensive tracking for all India markets.",
        keywords: "SEO agency India metrics, SEO services India measurement, SEO success indicators, India SEO performance, search marketing metrics"
      }
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Main Page SEO */}
      <Helmet>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        <link rel="canonical" href={pageMeta.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageMeta.canonical} />
        
        {/* Twitter Card */}
        <meta name="twitter:title" content={pageMeta.title} />
        <meta name="twitter:description" content={pageMeta.description} />
        
        {/* Structured Data for Local Business and Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Service", "LocalBusiness"],
            "name": "Lumivex Growth - Website Development Mumbai & SEO Agency India",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "telephone": "+91-9702845312",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "areaServed": "India",
            "serviceType": [
              "Website Development",
              "SEO Services",
              "Digital Marketing",
              "Web Design"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.description
                }
              }))
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "50"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg py-3 px-6">
              <MapPin className="w-5 h-5 mr-2" />
              Website Development Mumbai & SEO Agency India
            </Badge>

            {/* H1 with Keywords */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Website Development Company in Mumbai & 
              <span className="text-yellow-300 block mt-3">SEO Agency India Services</span>
            </h1>

            {/* H2 with Keywords */}
            <h2 className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Leading website designers in Mumbai offering comprehensive SEO services in India. 
              Professional web development company in Mumbai and SEO agency India delivering 500% ROI.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold text-lg px-8 py-3 group">
                Get Free Mumbai Website Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                India SEO Consultation
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 opacity-90">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-sm">Google Certified Partner India</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Website Designers Mumbai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-sm">SEO Agency India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Website Development Mumbai & SEO Services India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions from Mumbai's top website designers and India's leading SEO agency. 
              Choose from our complete service portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-800">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results & Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-600">Results</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{service.results}</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <DollarSign className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-gray-600">Investment</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{service.pricing}</div>
                    </div>
                    <div className="text-center p-2 bg-orange-50 rounded-lg">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-xs text-gray-600">Timeline</span>
                      </div>
                      <div className="text-sm font-semibold text-gray-900">{service.duration}</div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 group`}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mumbai & India Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Systematic approach combining Mumbai local expertise with India-wide digital marketing strategies for maximum results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="relative text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-16 h-16 mx-auto ${step.color} text-white rounded-xl flex items-center justify-center font-bold text-xl mb-4`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className={`w-8 h-8 mx-auto ${step.color.split('bg-gradient-to-r')[1].split(' ')[0]} rounded-full flex items-center justify-center text-white font-bold text-sm absolute -top-4 left-1/2 transform -translate-x-1/2`}>
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Our Mumbai Web Development & India SEO Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Combining Mumbai local expertise with India-wide digital marketing capabilities for exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 mx-auto ${guarantee.color} rounded-lg flex items-center justify-center mb-4`}>
                      <guarantee.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{guarantee.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{guarantee.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Individual SEO */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Website Development Mumbai & SEO Agency India FAQs
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Common questions about our website development in Mumbai and SEO services across India.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isExpanded = expandedFAQs.includes(index);
                return (
                  <div key={index}>
                    {/* Individual FAQ SEO */}
                    {isExpanded && (
                      <Helmet>
                        <title>{faq.meta.title}</title>
                        <meta name="description" content={faq.meta.description} />
                        <meta name="keywords" content={faq.meta.keywords} />
                        <meta property="og:title" content={faq.meta.title} />
                        <meta property="og:description" content={faq.meta.description} />
                      </Helmet>
                    )}
                    
                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          <div className="flex-shrink-0">
                            {isExpanded ? 
                              <ChevronUp className="w-6 h-6 text-blue-600" /> : 
                              <ChevronDown className="w-6 h-6 text-blue-600" />
                            }
                          </div>
                        </div>
                        {isExpanded && (
                          <div className="text-gray-600 mt-4 leading-relaxed border-t border-gray-100 pt-4">
                            <p>{faq.answer}</p>
                            
                            {/* FAQ Structured Data */}
                            <script type="application/ld+json">
                              {JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                "mainEntity": {
                                  "@type": "Question",
                                  "name": faq.question,
                                  "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                  }
                                }
                              })}
                            </script>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Location-Specific CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you need website development in Mumbai or comprehensive SEO services across India, 
            our team of expert website designers and SEO specialists is ready to help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
              Start Mumbai Website Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              India SEO Strategy Session
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection 
        title="Get Professional Website Development in Mumbai & SEO Services India"
        description="Work with leading website designers in Mumbai and SEO agency India experts. Comprehensive solutions from our web development company in Mumbai delivering 500% ROI guaranteed."
        primaryButtonText="Get Mumbai Website Consultation"
        secondaryButtonText="India SEO Audit"
        variant="primary"
      />
    </div>
  );
};

export default Services;