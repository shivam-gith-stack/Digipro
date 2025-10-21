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
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  
  const services = [
    {
      icon: Code,
      title: "Website Design & Development",
      slug: "web-development",
      description: "Convert-focused websites that look amazing and drive results for your business. Mobile-responsive, fast-loading sites optimized for conversions.",
      features: ["Responsive Design", "Speed Optimization", "Conversion Rate Optimization", "E-commerce Solutions", "SEO-Friendly Structure"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Marketing",
      slug: "ecommerce-marketing",
      description: "Boost your online store with strategies designed to increase traffic, engagement, and sales. Complete e-commerce solutions.",
      features: ["SEO for E-commerce", "Product Listing Ads", "Conversion Funnels", "Email Marketing", "Shopping Campaigns"]
    },
    {
      icon: Search,
      title: "SEO Optimization & Local SEO",
      slug: "seo",
      description: "Rank #1 on Google with our proven SEO strategies. Increase organic traffic by 300% in 6 months with white-hat techniques.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local Citations"]
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
      text: "Digital Marketing Pro increased our qualified leads by 400% in just 3 months. Their SEO and PPC strategies are outstanding! The ROI has been incredible."
    },
    {
      name: "Michael Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      image: "/api/placeholder/60/60", 
      rating: 5,
      text: "Our website traffic doubled and we're now ranking #1 for our main keywords. The team's expertise in local SEO transformed our business visibility."
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Best investment we've made in digital marketing. Revenue increased 350% since working with them. Highly recommend their data-driven approach!"
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
      title: "10 SEO Mistakes That Are Killing Your Website Traffic in 2024",
      excerpt: "Discover the common SEO mistakes that prevent websites from ranking on Google and how to fix them immediately.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "SEO",
      slug: "seo-mistakes-killing-website-traffic",
      image: {
        url: "https://media.istockphoto.com/id/935427102/photo/digital-marketing-word-on-blackboard-with-supportive-icons.jpg?s=612x612&w=0&k=20&c=eM94iufXxJqzEJ6p5caJOgyxOZYfrluNV950vSXc2ks=",
        alt: "SEO mistakes analysis showing declining website traffic analytics",
        size: "1200x628px"
      }
    },
    {
      title: "How to Create High-Converting Facebook Ads in 2024: Complete Guide",
      excerpt: "Master Facebook advertising with our step-by-step guide to creating ads that convert and maximize your ad spend ROI.",
      date: "March 12, 2024", 
      readTime: "6 min read",
      category: "PPC",
      slug: "high-converting-facebook-ads-2024",
      image: {
        url: "https://media.istockphoto.com/id/456855555/photo/ads-on-digital-background.jpg?s=612x612&w=0&k=20&c=41Z8EmfJ82OTAKBL7sVlRL37KOdu-kuiMwcF1l7dOCo=",
        alt: "Social media marketing strategy with Facebook ads optimization on smartphone",
        size: "1200x628px"
      }
    },
    {
      title: "Complete Guide to Local SEO for Small Businesses: Dominate Your Market",
      excerpt: "Everything you need to know about local SEO to dominate your local market and attract more customers.",
      date: "March 10, 2024",
      readTime: "12 min read", 
      category: "Local SEO",
      slug: "local-seo-guide-small-businesses",
      image: {
        url: "https://media.istockphoto.com/id/1426312062/photo/b2b-partnership-collaboration-or-client-handshake-in-business-meeting-for-welcome-onboarding.jpg?s=612x612&w=0&k=20&c=b2_soSRS9GbkDmfal9xx1_yHgEz37gvh7CxImaDvkxU=",
        alt: "Local SEO strategy map with business pins showing market dominance",
        size: "1200x628px"
      }
    }
  ];

  const trustSignals = [
    { icon: Shield, text: "Google Certified Partner" },
    { icon: Award, text: "Facebook Blueprint Certified" },
    { icon: CheckCircle, text: "10+ Years Experience" },
    { icon: DollarSign, text: "Money-Back Guarantee" }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Marketing Agency | SEO, PPC & Social Media Services - 500% ROI Guaranteed</title>
        <meta 
          name="description" 
          content="Top-rated digital marketing agency offering SEO, PPC, social media marketing & web development. 500% average ROI, 200+ successful campaigns. Free audit available." 
        />
        <meta 
          name="keywords" 
          content="digital marketing agency, SEO services, PPC management, social media marketing, web development, email marketing, content marketing, local SEO, ecommerce marketing, Google Ads, Facebook Ads" 
        />
        <meta property="og:title" content="Digital Marketing Agency | 500% ROI Guaranteed - SEO & PPC Experts" />
        <meta property="og:description" content="Get proven digital marketing results with our expert SEO, PPC, and social media services. 500% average ROI. Free strategy session available." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DigitalMarketingAgency",
            "name": "Digital Marketing Pro",
            "description": "Professional digital marketing services including SEO, PPC, social media marketing, and web development",
            "url": "https://yourwebsite.com",
            "telephone": "+91-9702845312",
            "email": "shivam.gupta14083110@gmail.com",
            "areaServed": ["India", "United States", "Canada", "United Kingdom", "Australia"],
            "serviceType": "Digital Marketing Services",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            },
            "offers": {
              "@type": "Offer",
              "description": "Digital Marketing Services"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-orange-900/30 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-400/10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-400/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Certified Google & Facebook Partner</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Results-Driven Digital Marketing Services That
            <span className="text-orange-500 block mt-2">Grow Your Business</span>
          </h1>

          <h2 className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join 200+ successful businesses achieving 500% ROI increases with our proven digital marketing strategies. 
            Data-driven approach delivering measurable results since 2014.
          </h2>

          <Button onClick={() => navigate("/contact")} size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-3 text-lg shadow-lg shadow-orange-500/30 mt-4">
            Get Free Marketing Audit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Proven Results You Can Trust</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our data-driven approach delivers consistent, measurable results for businesses across industries
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
              Comprehensive Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end digital marketing solutions designed to drive growth, increase visibility, and maximize ROI for your business.
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
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Data-Driven Strategy</h4>
                <p className="text-gray-600 text-sm">Every decision backed by analytics and performance data</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">White-Hat Techniques</h4>
                <p className="text-gray-600 text-sm">Ethical, sustainable marketing practices that deliver lasting results</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">24/7 Campaign Monitoring</h4>
                <p className="text-gray-600 text-sm">Continuous optimization and real-time performance tracking</p>
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
              Trusted by 50+ Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses across industries achieve remarkable growth and outstanding ROI.
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
              Latest Digital Marketing Insights & Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the competition with expert tips, proven strategies, and industry insights from our marketing experts.
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

      {/* Enhanced CTA Section */}
      <CTASection
        title="Ready to Transform Your Digital Presence & Drive Real Results?"
        description="Join 200+ successful businesses that have achieved exceptional growth with our proven digital marketing strategies. Get your free comprehensive audit today."
        primaryButtonText="Get Free Marketing Audit"
        secondaryButtonText="Schedule Strategy Call"
        variant="primary"
        onPrimaryClick={() => navigate("/contact")}
      />
    </div>
  );
};

export default Home;