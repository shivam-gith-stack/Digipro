import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import { 
  ShoppingCart, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Target, 
  Mail, 
  Search, 
  Video, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Clock, 
  User,
  Star,
  Zap,
  Shield,
  MessageCircle,
  Gift,
  DollarSign,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceMarketing = () => {
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
    { 
      title: "E-commerce SEO", 
      description: "Optimize your online store to rank higher on search engines and drive organic traffic.", 
      icon: Search,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=300&fit=crop"
    },
    { 
      title: "Shopping Ads Management", 
      description: "Maximize ROI with strategic Google Shopping and social media advertising campaigns.", 
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1563013541-3f7e6753f5ce?w=600&h=300&fit=crop"
    },
    { 
      title: "Social Media Marketing", 
      description: "Engage customers and drive sales through targeted social media campaigns.", 
      icon: Users,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop"
    },
    { 
      title: "Email Marketing", 
      description: "Convert leads into customers with automated email sequences and personalized campaigns.", 
      icon: Mail,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
    },
    { 
      title: "Conversion Rate Optimization", 
      description: "Improve your website's ability to convert visitors into paying customers.", 
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop"
    },
    { 
      title: "Influencer Marketing", 
      description: "Leverage influencer partnerships to reach new audiences and build brand trust.", 
      icon: Star,
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=300&fit=crop"
    },
    { 
      title: "Video Marketing", 
      description: "Create engaging product videos and tutorials that drive conversions.", 
      icon: Video,
      image: "https://images.unsplash.com/photo-1559703243-9094e6f303b3?w=600&h=300&fit=crop"
    },
    { 
      title: "Mobile Marketing", 
      description: "Optimize for mobile shoppers with SMS campaigns and app push notifications.", 
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop"
    }
  ];

  const successStories = [
    { 
      title: "Fashion Boutique", 
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop", 
      description: "Increased online sales by 300% in 6 months through targeted social media ads and influencer partnerships.",
      metrics: "300% Sales Increase"
    },
    { 
      title: "Electronics Store", 
      image: "https://images.unsplash.com/photo-1563013541-3f7e6753f5ce?w=800&h=400&fit=crop", 
      description: "Reduced customer acquisition cost by 40% while increasing monthly revenue by 150%.",
      metrics: "40% Lower CAC"
    },
    { 
      title: "Home Decor Brand", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop", 
      description: "Grew email list by 5000 subscribers and achieved 25% email conversion rate.",
      metrics: "25% Email Conversion"
    },
    { 
      title: "Beauty Products", 
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=400&fit=crop", 
      description: "Achieved 5x ROI on Facebook ads with optimized product targeting and retargeting campaigns.",
      metrics: "5x ROI Achieved"
    },
    { 
      title: "Fitness Equipment", 
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop", 
      description: "Increased average order value by 35% through upselling and cross-selling strategies.",
      metrics: "35% Higher AOV"
    },
    { 
      title: "Gourmet Foods", 
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop", 
      description: "Reduced cart abandonment rate from 75% to 35% with optimized checkout process.",
      metrics: "40% Less Abandonment"
    }
  ];

  const stats = [
    { number: "4.8x", label: "Average ROI", icon: DollarSign },
    { number: "250+", label: "Stores Optimized", icon: ShoppingCart },
    { number: "45%", label: "Average Sales Increase", icon: TrendingUp },
    { number: "2.3M", label: "Products Marketed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Campaign Monitoring", icon: Shield }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from e-commerce marketing?",
      answer: "Most clients see initial results within 2-4 weeks, with significant growth occurring within 3-6 months. SEO efforts typically take 3-6 months to show substantial results, while paid advertising can generate immediate traffic and sales."
    },
    {
      question: "What's the average ROI for e-commerce marketing?",
      answer: "Our clients typically achieve 4-8x ROI on their marketing investments. The exact return depends on factors like product margin, competition, and marketing budget. We focus on maximizing ROI through data-driven strategies and continuous optimization."
    },
    {
      question: "Do you work with specific e-commerce platforms?",
      answer: "Yes, we have expertise with all major platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom solutions. We tailor our strategies to leverage each platform's unique features and capabilities."
    },
    {
      question: "How do you measure e-commerce marketing success?",
      answer: "We track key metrics including conversion rate, customer acquisition cost, lifetime value, return on ad spend, average order value, and revenue growth. We provide detailed analytics dashboards and regular performance reports."
    },
    {
      question: "What's included in your e-commerce marketing packages?",
      answer: "Our packages include strategy development, campaign management, content creation, analytics reporting, A/B testing, and ongoing optimization. We offer customizable packages based on your business size and goals."
    },
    {
      question: "How do you handle international e-commerce marketing?",
      answer: "We develop localized strategies for different markets, including language adaptation, currency optimization, and region-specific advertising. We're experienced with cross-border taxation, shipping, and compliance requirements."
    },
    {
      question: "Do you provide content creation for product pages?",
      answer: "Yes, we offer complete product page optimization including professional photography, compelling descriptions, SEO optimization, and conversion-focused layout design to maximize sales."
    },
    {
      question: "How do you reduce cart abandonment?",
      answer: "We implement strategies like exit-intent popups, abandoned cart emails, simplified checkout processes, multiple payment options, and trust signals to recover lost sales and improve conversion rates."
    },
    {
      question: "What's your approach to social media for e-commerce?",
      answer: "We create platform-specific strategies focusing on visual content, user-generated content, influencer collaborations, shoppable posts, and retargeting campaigns to drive engagement and sales."
    },
    {
      question: "How do you optimize for mobile shoppers?",
      answer: "We ensure mobile-first design, fast loading speeds, simplified navigation, mobile-optimized checkout, and implement SMS marketing and push notifications to engage mobile users effectively."
    }
  ];

  const blogPosts = [
    {
      title: "10 E-commerce SEO Strategies That Actually Work in 2025",
      excerpt: "Discover proven SEO techniques to improve your online store's visibility and drive qualified traffic.",
      fullContent: `E-commerce SEO requires a specialized approach focusing on product pages, category structure, and user intent. Key strategies include optimizing product titles and descriptions with relevant keywords, implementing schema markup for rich snippets, improving site speed for better user experience, and creating valuable content through blogs and buying guides. Technical SEO aspects like proper URL structure, mobile optimization, and internal linking are crucial for e-commerce success.`,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
      category: "SEO",
      date: "September 15, 2025",
      readTime: "8 min read"
    },
    {
      title: "Maximizing ROI with Google Shopping Ads",
      excerpt: "Learn how to set up and optimize Google Shopping campaigns for maximum profitability.",
      fullContent: `Google Shopping ads drive 85% of all retail search ad clicks. Optimize your product feed with high-quality images, compelling titles, and accurate pricing. Use negative keywords to filter irrelevant traffic, implement smart bidding strategies, and segment campaigns by product performance. Regular feed optimization and performance analysis are key to maintaining high ROI. Consider seasonal adjustments and competitor analysis to stay ahead in competitive markets.`,
      image: "https://images.unsplash.com/photo-1563013541-3f7e6753f5ce?w=800&h=400&fit=crop",
      category: "PPC",
      date: "September 10, 2025",
      readTime: "7 min read"
    },
    {
      title: "Social Commerce: The Future of E-commerce",
      excerpt: "Explore how social media platforms are transforming into shopping destinations.",
      fullContent: `Social commerce is expected to reach $1.2 trillion by 2025. Platforms like Instagram, TikTok, and Facebook offer integrated shopping features that reduce friction in the buyer journey. Implement shoppable posts, leverage user-generated content, and use influencer marketing to build trust. Live shopping events and AR try-on features are becoming increasingly popular. Focus on creating authentic content that resonates with your target audience while making purchasing seamless.`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      category: "Social Media",
      date: "September 5, 2025",
      readTime: "6 min read"
    },
    {
      title: "Email Marketing Strategies That Drive E-commerce Sales",
      excerpt: "Build effective email sequences that convert subscribers into loyal customers.",
      fullContent: `Email marketing generates $42 for every $1 spent. Implement welcome series, abandoned cart sequences, post-purchase follow-ups, and re-engagement campaigns. Personalize content based on customer behavior and preferences. Segment your list for targeted messaging and optimize send times for maximum engagement. Use automation to scale your efforts while maintaining personal touchpoints. Track key metrics like open rates, click-through rates, and conversion rates to continuously improve performance.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      category: "Email Marketing",
      date: "August 28, 2025",
      readTime: "9 min read"
    },
    {
      title: "Conversion Rate Optimization for E-commerce",
      excerpt: "Practical techniques to increase your website's conversion rate and boost sales.",
      fullContent: `CRO involves testing and optimizing every element of your customer journey. Focus on improving product page design, simplifying checkout processes, adding trust signals, and optimizing for mobile users. Implement A/B testing for headlines, images, calls-to-action, and pricing strategies. Use heatmaps and session recordings to understand user behavior. Address common pain points like slow loading times, complicated navigation, and unclear value propositions to significantly improve conversion rates.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      category: "CRO",
      date: "August 20, 2025",
      readTime: "10 min read"
    },
    {
      title: "Mobile Commerce Strategies for 2025",
      excerpt: "Optimize your e-commerce store for the growing mobile shopping audience.",
      fullContent: `Mobile commerce accounts for 60% of all e-commerce sales. Ensure your site has responsive design, fast loading speeds, and mobile-friendly navigation. Implement progressive web app features, enable mobile payments like Apple Pay and Google Wallet, and use push notifications strategically. Optimize product images and descriptions for smaller screens, and simplify the checkout process for mobile users. Consider developing a dedicated mobile app for frequent shoppers to enhance user experience and retention.`,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      category: "Mobile Commerce",
      date: "August 15, 2025",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center space-y-8 max-w-6xl">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
            <ShoppingCart className="w-5 h-5 mr-2" />
            E-commerce Marketing Experts
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Drive More Sales With Data-Driven
            <span className="text-yellow-300 block mt-2">E-commerce Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            We help online stores increase revenue, acquire loyal customers, and maximize ROI through proven marketing strategies.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-yellow-400 text-red-900 hover:bg-yellow-300 text-lg px-8 py-3 font-semibold">
                Get Free Store Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-3">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Complete E-commerce Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From driving traffic to converting visitors into loyal customers, we cover every aspect of e-commerce marketing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <ContactPopup 
                    trigger={
                      <Button size="sm" variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
                        Learn More
                      </Button>
                    }
                    title={`Learn More About ${service.title}`}
                    description={`Discover how our ${service.title} services can boost your e-commerce sales.`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600">
              See how we've helped e-commerce businesses achieve remarkable growth and increased profitability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                    {story.metrics}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">{story.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{story.description}</p>
                  <Button variant="outline" size="sm" className="w-full mt-2 text-orange-600 border-orange-200 hover:bg-orange-50">
                    Read Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg">
                <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">E-commerce Marketing FAQs</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about growing your online store with effective marketing strategies.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFAQ.includes(index);
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 cursor-pointer" onClick={() => toggleFAQ(index)}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {isExpanded ? 
                          <ChevronUp className="w-6 h-6 text-orange-600" /> : 
                          <ChevronDown className="w-6 h-6 text-orange-600" />
                        }
                      </div>
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
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">E-commerce Marketing Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the competition with the latest e-commerce marketing trends and strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const isExpanded = expandedBlogPosts.includes(index);
              return (
                <Card key={index} className="bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-orange-600 text-white">
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
                    <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                    {isExpanded && (
                      <div className="bg-orange-50 rounded-lg p-4 space-y-3">
                        <div className="prose prose-sm max-w-none">
                          {post.fullContent.split('\n\n').map((para, pIndex) => (
                            <p key={pIndex} className="text-gray-600 mb-3 leading-relaxed text-sm">{para.trim()}</p>
                          ))}
                        </div>
                        <ContactPopup 
                          trigger={
                            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 w-full">
                              Get Marketing Audit
                              <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                            </Button>
                          }
                          title={`Get Expert Help with ${post.category}`}
                          description={`Ready to boost your e-commerce sales? Let's discuss your marketing strategy.`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">E-commerce Expert</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-orange-600 border-orange-200 hover:bg-orange-50"
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
        title="Ready to Skyrocket Your E-commerce Sales?"
        description="Let us develop a customized marketing strategy that drives traffic, increases conversions, and maximizes your ROI."
        primaryButtonText="Get Free Store Audit"
        secondaryButtonText="Schedule Consultation"
        variant="primary"
      />

    </div>
  );
};

export default EcommerceMarketing;