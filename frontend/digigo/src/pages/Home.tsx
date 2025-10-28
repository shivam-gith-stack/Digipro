import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet-async";
import { 
  Search, 
  Target, 
  Share2, 
  PenTool, 
  Mail, 
  Code, 
  ShoppingCart,
  TrendingUp, 
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  BarChart3,
  Zap,
  Award,
  Shield,
  Clock,
  DollarSign,
  MapPin,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  
  // Typewriter effect for rotating cities
  const [displayText, setDisplayText] = useState("");
  const [cityIndex, setCityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const cities = ["Mumbai", "Pune", "Bangalore", "Delhi", "Hyderabad", "Chennai", "Noida" , "Kolkata" , "Ahmedabad", "Jaipur", "Indore", "Coimbatore", "Kochi" ,"Lucknow" ,"Bhubaneswar" ,"Nagpur" ,"Trivandrum", "Surat" ,"Chandigarh & Mohali" ,"Vadodara" ,"Mysuru"];

  useEffect(() => {
    const currentCity = cities[cityIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 1500); // Pause for 1.5 seconds after typing complete
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && !isPaused) {
      // Typing effect
      if (displayText.length < currentCity.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentCity.slice(0, displayText.length + 1));
        }, 100); // Typing speed
        return () => clearTimeout(timer);
      } else {
        // Finished typing, start pause
        setIsPaused(true);
      }
    } else if (isDeleting) {
      // Deleting effect
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 50); // Deleting speed (faster than typing)
        return () => clearTimeout(timer);
      } else {
        // Finished deleting, move to next city
        setIsDeleting(false);
        setCityIndex((prev) => (prev + 1) % cities.length);
      }
    }
  }, [displayText, cityIndex, isDeleting, isPaused]);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      slug: "web-development",
      description: "Leading website designers in Mumbai creating stunning, responsive websites that drive conversions and business growth.",
      features: ["Custom Website Development", "Mobile-First Design", "E-commerce Solutions", "CMS Development", "Website Maintenance"]
    },
    {
      icon: Search,
      title: "SEO Agency Mumbai & India",
      slug: "seo",
      description: "Top SEO agency in Mumbai providing comprehensive SEO services across India. Dominate Google rankings with our proven strategies.",
      features: ["Local SEO Mumbai", "National SEO India", "Technical SEO", "Content Strategy", "Link Building"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Marketing",
      slug: "ecommerce-marketing",
      description: "Boost your online store with strategies designed to increase traffic, engagement, and sales. Complete e-commerce solutions.",
      features: ["SEO for E-commerce", "Product Listing Ads", "Conversion Funnels", "Email Marketing", "Shopping Campaigns"]
    },
    {
      icon: Target,
      title: "Google Ads & PPC Management",
      slug: "ppc",
      description: "Maximize ROI with expertly managed Google Ads campaigns. Average 500% return on ad spend with precise targeting.",
      features: ["Campaign Setup", "Bid Management", "Ad Copy Optimization", "Landing Pages", "Conversion Tracking"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      slug: "social-media",
      description: "Build brand awareness and engage your audience across all social platforms. Drive meaningful interactions.",
      features: ["Content Creation", "Community Management", "Paid Social Ads", "Influencer Outreach", "Social Analytics"]
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      slug: "content-marketing",
      description: "Create compelling content that converts visitors into customers and builds authority. Strategic content planning.",
      features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy", "Content Distribution"]
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      slug: "email-marketing",
      description: "Nurture leads and increase customer lifetime value with automated email sequences. Personalized communication.",
      features: ["Email Campaigns", "Automation Setup", "List Building", "A/B Testing", "Performance Analytics"]
    },
    {
      icon: Shield,
      title: "Digital Marketing Strategy",
      slug: "digital-strategy",
      description: "Comprehensive digital marketing roadmap tailored to your business goals and target audience.",
      features: ["Market Analysis", "Competitor Research", "Strategy Development", "KPI Setting", "Performance Monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "As the best web development company in Mumbai, they delivered an exceptional website that increased our conversions by 300%."
    },
    {
      name: "Michael Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      image: "/api/placeholder/60/60", 
      rating: 5,
      text: "This SEO agency Mumbai helped us rank #1 for competitive keywords. Their India SEO company expertise is unmatched."
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Outstanding SEO services in India from a professional web development company in Mumbai. Revenue increased 350%!"
    }
  ];

  const stats = [
    { number: "500%", label: "Average ROI Increase", icon: TrendingUp, description: "Across all client campaigns" },
    { number: "200+", label: "Successful Campaigns", icon: BarChart3, description: "Proven track record" },
    { number: "50+", label: "Happy Clients", icon: Users, description: "Satisfied businesses" },
    { number: "99%", label: "Client Retention", icon: Award, description: "Long-term partnerships" },
    { number: "24/7", label: "Support", icon: Clock, description: "Dedicated assistance" },
    { number: "300%", label: "Traffic Growth", icon: Zap, description: "Average increase" }
  ];

  const blogPosts = [
    {
      title: "Website Development in Mumbai: Top Trends for 2024",
      excerpt: "Discover the latest trends in website development in Mumbai and how top website designers in Mumbai are transforming businesses.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      slug: "website-development-mumbai-trends-2024",
      image: {
        url: "https://media.istockphoto.com/id/935427102/photo/digital-marketing-word-on-blackboard-with-supportive-icons.jpg?s=612x612&w=0&k=20&c=eM94iufXxJqzEJ6p5caJOgyxOZYfrluNV950vSXc2ks=",
        alt: "Website development in Mumbai trends and strategies",
        size: "1200x628px"
      }
    },
    {
      title: "Why Choose an SEO Agency in Mumbai for Your Business Growth",
      excerpt: "Learn how an SEO agency Mumbai can boost your local visibility while an India SEO company expands your national presence.",
      date: "March 12, 2024", 
      readTime: "6 min read",
      category: "SEO",
      slug: "seo-agency-mumbai-benefits",
      image: {
        url: "https://media.istockphoto.com/id/456855555/photo/ads-on-digital-background.jpg?s=612x612&w=0&k=20&c=41Z8EmfJ82OTAKBL7sVlRL37KOdu-kuiMwcF1l7dOCo=",
        alt: "SEO agency Mumbai services and benefits for local businesses",
        size: "1200x628px"
      }
    },
    {
      title: "Comprehensive SEO Services in India: A Complete Guide",
      excerpt: "Everything about SEO services in India from a leading web development company in Mumbai and India SEO company.",
      date: "March 10, 2024",
      readTime: "12 min read", 
      category: "SEO India",
      slug: "seo-services-india-complete-guide",
      image: {
        url: "https://media.istockphoto.com/id/1426312062/photo/b2b-partnership-collaboration-or-client-handshake-in-business-meeting-for-welcome-onboarding.jpg?s=612x612&w=0&k=20&c=b2_soSRS9GbkDmfal9xx1_yHgEz37gvh7CxImaDvkxU=",
        alt: "SEO services in India comprehensive guide and strategies",
        size: "1200x628px"
      }
    }
  ];

  const trustSignals = [
    { icon: Shield, text: "Google Certified Partner" },
    { icon: Award, text: "Facebook Blueprint Certified" },
    { icon: CheckCircle, text: "10+ Years Experience" },
    { icon: DollarSign, text: "Money-Back Guarantee" },
    { icon: MapPin, text: "Based in Mumbai" },
    { icon: Globe, text: "Serving Across India" }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Website Development in Mumbai | SEO Agency India | Web Development Company Mumbai</title>
        <meta 
          name="description" 
          content="Leading website designers in Mumbai & SEO agency India. Top web development company in Mumbai offering comprehensive SEO services in India. Get 500% ROI guaranteed." 
        />
        <meta 
          name="keywords" 
          content="website development in Mumbai, website designers in Mumbai, web development company in Mumbai, SEO agency India, SEO services in India, SEO agency Mumbai, India SEO company, digital marketing Mumbai, web designers Mumbai, SEO company India" 
        />
        <meta property="og:title" content="Website Development in Mumbai | SEO Agency India | Top Web Development Company" />
        <meta property="og:description" content="Leading website designers in Mumbai & SEO agency India. Professional web development company in Mumbai offering SEO services across India. Free audit available." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lumivexgrowth.in/og-image.jpg" />
        <link rel="canonical" href="https://lumivexgrowth.in/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "LocalBusiness"],
            "name": "Lumivex Growth",
            "url": "https://lumivexgrowth.in/",
            "logo": "https://lumivexgrowth.in/logo.png",
            "description": "Leading website development company in Mumbai and SEO agency India offering comprehensive digital marketing services across India.",
            "email": "shivam.gupta14083110@gmail.com",
            "telephone": "+91-9702845312",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "serviceType": [
              "Website Development Service",
              "SEO Service", 
              "Digital Marketing Service",
              "Web Design Service"
            ],
            "areaServed": "India",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development in Mumbai",
                    "description": "Professional website development services by expert website designers in Mumbai"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "SEO Services in India",
                    "description": "Comprehensive SEO services across India from leading SEO agency"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "27"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section with Rotating Cities */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-orange-900/30 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-400/10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Top Website Designers | SEO Agency India</span>
          </div>

          {/* H1 with Rotating Cities Typewriter Effect */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  <span className="block">Website Development Company in</span>
  <span className="text-orange-500 block mt-2 text-center">
    <span className="inline-block min-w-[200px]">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  </span>
  <span className="text-orange-500 block mt-2">SEO Agency India</span>
</h1>
          {/* H2 with Keywords */}
          <h2 className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            India’s first AI-integrated digital marketing agency empowering brands with data-driven growth.  
We deliver up to 500% ROI through advanced SEO and AI-powered marketing strategies.

          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button onClick={() => navigate("/contact")} size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-3 text-lg shadow-lg shadow-orange-500/30">
              Get Free Website Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button onClick={() => navigate("/contact")} size="lg" variant="outline" className="border-white text-white hover:bg-white/20 font-semibold px-8 py-3 text-lg">
              Free SEO Analysis
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-12 opacity-90">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center space-x-2">
                <signal.icon className="w-5 h-5 text-green-400" />
                <span className="text-sm">{signal.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Web Development Company in India</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a leading website design and SEO agency in India, based in Mumbai, we deliver measurable growth and results nationwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-800">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Website Development | SEO Services India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions from Mumbai's top website designers and India's leading SEO agency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 space-y-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline" className="w-full group border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Benefits */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Website Development in Mumbai</h4>
                <p className="text-gray-600 text-sm">Expert website designers in Mumbai creating stunning, responsive websites</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">SEO Agency India</h4>
                <p className="text-gray-600 text-sm">Comprehensive SEO services in India from leading India SEO company</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Web Development Company Mumbai</h4>
                <p className="text-gray-600 text-sm">Top-rated web development company in Mumbai with proven track record</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Trusted by Businesses Across Mumbai & India
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See why we're recognized as leading website designers in Mumbai and top SEO agency India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link to="/testimonials">
              <Button 
                variant="solid" 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                View All Client Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Expert Insights: Website Development Mumbai & SEO India
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest trends and strategies from leading website designers in Mumbai and SEO agency India experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={post.image.url} 
                    alt={post.image.alt} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link to={`/blog/${post.slug}`}>
                      <Button 
                        variant="solid" 
                        size="sm" 
                        className="bg-blue-600 text-white hover:bg-blue-700 group"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-12">
            <Link to="/blog">
              <Button 
                variant="solid" 
                size="lg" 
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Explore All Marketing Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Specific CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Website Development in Mumbai or SEO Services in India?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            As a premier web development company in Mumbai and SEO agency India, we serve clients across Mumbai and nationwide. 
            Get expert solutions from leading website designers in Mumbai and India SEO company specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate("/contact")} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8">
              Contact Mumbai Office
            </Button>
            <Button onClick={() => navigate("/contact")} size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              India SEO Services
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection
        title="Ready to Work with Top Website Designers in Mumbai & SEO Agency India?"
        description="Get comprehensive website development in Mumbai and SEO services in India from our expert team. As a leading web development company in Mumbai and India SEO company, we deliver 500% ROI guaranteed."
        primaryButtonText="Get Free Mumbai Website Audit"
        secondaryButtonText="India SEO Consultation"
        variant="primary"
        onPrimaryClick={() => navigate("/contact")}
        onSecondaryClick={() => navigate("/contact")}
      />
    </div>
  );
};

export default Home;