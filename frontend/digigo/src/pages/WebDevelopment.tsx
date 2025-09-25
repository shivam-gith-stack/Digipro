import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import { 
  Globe, 
  Code, 
  Layout, 
  Smartphone, 
  BarChart3, 
  Users, 
  Award, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Clock, 
  User,
  Database,
  Shield,
  Zap,
  Palette,
  Search,
  SmartphoneCharging
} from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number[]>([]);
  const [expandedBlogPosts, setExpandedBlogPosts] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const toggleBlog = (index: number) => {
    setExpandedBlogPosts(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const services = [
    { title: "Responsive Web Design", description: "Modern websites optimized for mobile, tablet, and desktop with seamless user experiences.", icon: Layout },
    { title: "Custom Web Applications", description: "Build tailored applications that scale with your business needs and streamline operations.", icon: Code },
    { title: "E-commerce Solutions", description: "Robust online stores with secure payments, inventory management, and conversion-focused designs.", icon: Globe },
    { title: "Progressive Web Apps (PWA)", description: "Fast, reliable, and engaging apps that deliver native-app experiences on the web.", icon: Smartphone },
    { title: "API Development & Integration", description: "Custom API development and seamless integration with third-party services and databases.", icon: Database },
    { title: "Website Security & Optimization", description: "Comprehensive security measures and performance optimization for lightning-fast loading.", icon: Shield },
  ];

  const projects = [
    { title: "TechStart SaaS Platform", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop", description: "Custom SaaS platform with automated workflows and advanced analytics for technology startups." },
    { title: "E-Shop Global", image: "https://images.unsplash.com/photo-1581091012184-7a70a6e7b8f5?w=800&h=400&fit=crop", description: "High-converting e-commerce store with multi-currency support and personalized recommendations." },
    { title: "HealthCare Portal", image: "https://images.unsplash.com/photo-1588776814546-1ffcf9c7c2a1?w=800&h=400&fit=crop", description: "HIPAA-compliant patient portal with appointment scheduling and secure messaging." },
    { title: "FinTech Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop", description: "Real-time financial dashboard with data visualization and predictive analytics." },
    { title: "Education Learning Platform", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop", description: "Interactive learning management system with video streaming and progress tracking." },
    { title: "Travel Booking Engine", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop", description: "Multi-service travel platform with booking system and itinerary management." },
  ];

  const stats = [
    { number: "150+", label: "Websites Launched", icon: Globe },
    { number: "500k+", label: "Users Served", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "300+", label: "Projects Delivered", icon: BarChart3 },
    { number: "99.9%", label: "Uptime Guarantee", icon: Zap },
    { number: "24/7", label: "Support Available", icon: SmartphoneCharging },
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the complexity and features required. Typically, a simple business website takes 3-6 weeks, while custom web applications or e-commerce stores may take 8-16 weeks. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, regular backups, performance optimizations, content updates, and technical support to keep your website running smoothly and securely."
    },
    {
      question: "Will my website be SEO-friendly?",
      answer: "Absolutely! Every website we build is optimized for SEO with fast loading times, proper heading structure, meta tags, mobile-friendly design, and clean code structure to help you rank higher on search engines from day one."
    },
    {
      question: "Can you integrate my website with third-party tools?",
      answer: "Yes, we specialize in integrating various third-party tools including CRMs, email marketing platforms, payment gateways, analytics tools, social media APIs, and custom software solutions to make your website fully functional and connected."
    },
    {
      question: "Do you offer custom web applications?",
      answer: "Yes, we build scalable custom web applications tailored to your business workflows, including dashboards, portals, SaaS solutions, and enterprise-level systems with advanced functionality and security features."
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, Vue.js, Node.js, Python Django, PHP Laravel, and various databases. We choose the best stack based on your project requirements for optimal performance and scalability."
    },
    {
      question: "Do you provide hosting and domain services?",
      answer: "Yes, we offer complete hosting solutions with reliable servers, SSL certificates, and domain registration. We can also migrate your existing website to our optimized hosting environment."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in website redesigns that improve user experience, modernize the design, enhance performance, and boost conversions while maintaining your brand identity."
    },
  ];

  const blogPosts = [
    {
      title: "Top 10 Web Design Trends in 2025",
      excerpt: "Discover the latest web design trends that will dominate 2025 and help you create stunning, high-converting websites.",
      fullContent: `The web is constantly evolving, and staying ahead of design trends ensures your site feels modern and engaging. In 2025, expect to see minimalistic layouts, immersive 3D elements, micro-interactions, and AI-powered personalization that create unique user experiences. Focus on accessibility, fast load times, and mobile-first designs to improve user engagement and SEO.

Dark mode optimization, glass morphism effects, and advanced animations will continue to gain popularity. Voice user interface (VUI) integration and augmented reality features will become more mainstream, offering innovative ways to interact with web content.`,
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=800&h=400&fit=crop",
      category: "Web Design",
      date: "September 1, 2025",
      readTime: "7 min read"
    },
    {
      title: "Why Progressive Web Apps Are a Game-Changer",
      excerpt: "Learn how PWAs are transforming user engagement and driving conversions across devices.",
      fullContent: `Progressive Web Apps (PWAs) combine the best of web and mobile apps. They offer offline access, push notifications, and near-instant loading, giving users a native app experience without the need for downloads. PWAs improve engagement, increase conversions, and boost SEO due to their superior performance and accessibility.

Key benefits include reduced development costs compared to native apps, seamless updates, and cross-platform compatibility. Major companies like Twitter, Starbucks, and Pinterest have seen significant improvements in user engagement after implementing PWAs.`,
      image: "https://images.unsplash.com/photo-1581092795366-8d7f53ab1d24?w=800&h=400&fit=crop",
      category: "Web Development",
      date: "August 25, 2025",
      readTime: "6 min read"
    },
    {
      title: "How to Optimize Your Website for SEO in 2025",
      excerpt: "Step-by-step guide to optimizing your website structure, content, and technical SEO to rank higher on search engines.",
      fullContent: `SEO is essential for attracting organic traffic. Start with technical SEO: ensure fast load times, proper site hierarchy, mobile responsiveness, and secure HTTPS connections. Content optimization includes keyword research, semantic search alignment, meta descriptions, structured data, and internal linking.

User experience signals like engagement, bounce rates, and dwell time also play a critical role in search rankings. Core Web Vitals (LCP, FID, CLS) are now crucial ranking factors. Implement schema markup, optimize images, and create quality backlinks to establish domain authority.`,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      category: "SEO",
      date: "August 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "The Future of E-commerce: Headless Architecture",
      excerpt: "Explore how headless commerce is revolutionizing online shopping experiences with unparalleled flexibility.",
      fullContent: `Headless commerce separates the frontend presentation layer from the backend e-commerce functionality, allowing businesses to create unique shopping experiences across multiple channels. This architecture provides greater flexibility, faster loading times, and easier integration with various platforms.

Benefits include omnichannel selling capabilities, improved developer experience, and the ability to use modern frontend frameworks. Brands can deliver consistent experiences across web, mobile, IoT devices, and social media platforms while maintaining a centralized backend.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      category: "E-commerce",
      date: "July 28, 2025",
      readTime: "9 min read"
    },
    {
      title: "Web Security Best Practices for 2025",
      excerpt: "Essential security measures every website owner should implement to protect against modern cyber threats.",
      fullContent: `Website security is more critical than ever with increasing cyber threats. Implement HTTPS across your entire site, use secure headers (CSP, HSTS), and regularly update your software and dependencies. Conduct security audits and penetration testing to identify vulnerabilities.

Additional measures include implementing rate limiting, using Web Application Firewalls (WAF), securing APIs with proper authentication, and regular security monitoring. Educate your team about security best practices and have an incident response plan in place.`,
      image: "https://images.unsplash.com/photo-1563013541-3f7e6753ee3d?w=800&h=400&fit=crop",
      category: "Security",
      date: "July 15, 2025",
      readTime: "10 min read"
    },
    {
      title: "JavaScript Frameworks Comparison: React vs Vue vs Angular",
      excerpt: "Comprehensive analysis of popular JavaScript frameworks to help you choose the right one for your project.",
      fullContent: `Choosing the right JavaScript framework depends on your project requirements, team expertise, and long-term goals. React offers flexibility and a vast ecosystem, Vue provides gentle learning curve and excellent documentation, while Angular delivers enterprise-ready solutions with built-in features.

Consider factors like community support, performance requirements, mobile development needs, and integration capabilities. Each framework has strengths: React for complex UIs, Vue for rapid prototyping, and Angular for large-scale applications with strict coding standards.`,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
      category: "Development",
      date: "June 30, 2025",
      readTime: "11 min read"
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center space-y-8 max-w-4xl relative z-10">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
            <Code className="w-4 h-4 mr-2" />
            Expert Web Development Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build Stunning & Scalable Websites
            <span className="text-yellow-300 block mt-2">That Grow Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            We create modern websites, web applications, and e-commerce platforms optimized for performance, usability, and conversions.
          </p>
          <div className="pt-6">
            <Link to="/contact">
              <Button size="lg" className="group bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600">
              From concept to deployment, we deliver web solutions that are visually appealing, technically robust, and fully optimized for growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center max-w-4xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recent Projects</h2>
          <p className="text-xl text-gray-600 mt-4">
            See how we've helped businesses achieve online success with custom web solutions.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 mt-4">
            Answers to the most common questions about our web development services.
          </p>
        </div>
        <div className="container mx-auto px-4 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isExpanded = expandedFAQ.includes(index);
            return (
              <Card key={index} className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {isExpanded ? 
                      <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" /> : 
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    }
                  </div>
                  {isExpanded && (
                    <p className="text-gray-600 mt-4 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Web Development Insights & Blog</h2>
            <p className="text-xl text-gray-600 mt-4">
              Stay updated with SEO-rich articles, trends, and actionable web development strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const isExpanded = expandedBlogPosts.includes(index);
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-blue-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-gray-900 leading-tight">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{post.excerpt}</p>
                    {isExpanded && (
                      <div className="bg-gray-50 rounded-lg p-4 space-y-4 border border-gray-200">
                        <div className="prose prose-sm max-w-none">
                          {post.fullContent.split('\n\n').map((para, pIndex) => (
                            <p key={pIndex} className="text-gray-600 mb-4 leading-relaxed">{para.trim()}</p>
                          ))}
                        </div>
                        <ContactPopup 
                          trigger={
                            <Button size="sm" className="group bg-blue-600 hover:bg-blue-700">
                              Get Expert Help
                              <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </Button>
                          }
                          title={`Get Expert Help with ${post.category}`}
                          description={`Ready to implement these ${post.category.toLowerCase()} strategies? Let's discuss your specific needs.`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Web Development Expert</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group border-blue-200 text-blue-600 hover:bg-blue-50"
                        onClick={() => toggleBlog(index)}
                      >
                        {isExpanded ? (
                          <>Show Less<ChevronUp className="ml-2 w-4 h-4" /></>
                        ) : (
                          <>Read More<ChevronDown className="ml-2 w-4 h-4" /></>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Launch Your Next Web Project?"
        description="Partner with us to build a website or web application that drives traffic, engagement, and conversions."
        primaryButtonText="Start Your Project Today"
        secondaryButtonText="Contact Us for Free Consultation"
        variant="primary"
      />

    </div>
  );
};

export default WebDevelopment;