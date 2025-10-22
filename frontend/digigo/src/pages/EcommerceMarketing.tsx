import { useState } from "react";
import { Helmet } from "react-helmet-async";
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

  // SEO Meta Data
  const pageMeta = {
    title: "E-commerce Marketing Agency | Boost Sales & ROI 2025 | #1 Google Ranking",
    description: "Expert e-commerce marketing services that drive sales, increase ROI, and grow your online store. SEO, PPC, social media, email marketing & CRO strategies.",
    keywords: "e-commerce marketing, online store marketing, ecommerce SEO, Google Shopping ads, social media marketing, email marketing, conversion rate optimization, ROI increase, sales growth, digital marketing agency",
    canonical: "https://lumivexgrowth.in/ecommerce-marketing"
  };

  const faqs = [
    {
      question: "How long does it take to see results from e-commerce marketing?",
      answer: "Most clients see initial results within 2-4 weeks, with significant growth occurring within 3-6 months. SEO efforts typically take 3-6 months to show substantial results, while paid advertising can generate immediate traffic and sales.",
      meta: {
        title: "E-commerce Marketing Results Timeline | How Long for ROI & Sales Growth",
        description: "Learn how long it takes to see e-commerce marketing results. Get 2-4 week initial results, 3-6 month significant growth with SEO and paid advertising strategies.",
        keywords: "e-commerce marketing results timeline, ROI timeline, sales growth duration, SEO results time, paid advertising results"
      }
    },
    {
      question: "What's the average ROI for e-commerce marketing?",
      answer: "Our clients typically achieve 4-8x ROI on their marketing investments. The exact return depends on factors like product margin, competition, and marketing budget. We focus on maximizing ROI through data-driven strategies and continuous optimization.",
      meta: {
        title: "E-commerce Marketing ROI | Average 4-8x Return on Investment 2025",
        description: "Achieve 4-8x ROI with our e-commerce marketing strategies. Data-driven approaches maximize return on investment for online stores and retail businesses.",
        keywords: "e-commerce marketing ROI, return on investment, marketing ROI average, profit margin, data-driven marketing"
      }
    },
    {
      question: "Do you work with specific e-commerce platforms?",
      answer: "Yes, we have expertise with all major platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom solutions. We tailor our strategies to leverage each platform's unique features and capabilities.",
      meta: {
        title: "E-commerce Platform Experts | Shopify, WooCommerce, BigCommerce Marketing",
        description: "Expert e-commerce marketing for all platforms: Shopify, WooCommerce, BigCommerce, Magento. Platform-specific strategies for maximum sales growth.",
        keywords: "Shopify marketing, WooCommerce SEO, BigCommerce optimization, Magento marketing, e-commerce platform experts"
      }
    },
    {
      question: "How do you measure e-commerce marketing success?",
      answer: "We track key metrics including conversion rate, customer acquisition cost, lifetime value, return on ad spend, average order value, and revenue growth. We provide detailed analytics dashboards and regular performance reports.",
      meta: {
        title: "E-commerce Marketing Metrics | Track Conversion Rate, CAC, LTV & ROAS",
        description: "Measure e-commerce marketing success with key metrics: conversion rate, CAC, LTV, ROAS, AOV. Comprehensive analytics and performance tracking.",
        keywords: "e-commerce metrics, conversion rate tracking, CAC measurement, LTV calculation, ROAS optimization, marketing KPIs"
      }
    },
    {
      question: "What's included in your e-commerce marketing packages?",
      answer: "Our packages include strategy development, campaign management, content creation, analytics reporting, A/B testing, and ongoing optimization. We offer customizable packages based on your business size and goals.",
      meta: {
        title: "E-commerce Marketing Packages | Complete Strategy & Campaign Management",
        description: "Complete e-commerce marketing packages: strategy development, campaign management, content creation, analytics, A/B testing, and ongoing optimization.",
        keywords: "e-commerce marketing packages, digital marketing services, campaign management, marketing strategy, optimization services"
      }
    },
    {
      question: "How do you handle international e-commerce marketing?",
      answer: "We develop localized strategies for different markets, including language adaptation, currency optimization, and region-specific advertising. We're experienced with cross-border taxation, shipping, and compliance requirements.",
      meta: {
        title: "International E-commerce Marketing | Global Market Expansion Strategies",
        description: "Expert international e-commerce marketing with localized strategies, currency optimization, cross-border compliance, and global market expansion.",
        keywords: "international e-commerce, global marketing, cross-border sales, localization strategies, international SEO"
      }
    },
    {
      question: "Do you provide content creation for product pages?",
      answer: "Yes, we offer complete product page optimization including professional photography, compelling descriptions, SEO optimization, and conversion-focused layout design to maximize sales.",
      meta: {
        title: "E-commerce Product Page Optimization | SEO & Conversion-Focused Design",
        description: "Complete product page optimization: professional photography, SEO descriptions, conversion-focused design to maximize e-commerce sales and visibility.",
        keywords: "product page optimization, e-commerce SEO, product descriptions, conversion optimization, product photography"
      }
    },
    {
      question: "How do you reduce cart abandonment?",
      answer: "We implement strategies like exit-intent popups, abandoned cart emails, simplified checkout processes, multiple payment options, and trust signals to recover lost sales and improve conversion rates.",
      meta: {
        title: "Reduce Cart Abandonment | Exit-Intent Popups & Abandoned Cart Emails",
        description: "Reduce e-commerce cart abandonment with exit-intent popups, abandoned cart emails, simplified checkout, and trust signals. Increase conversions by 40%.",
        keywords: "cart abandonment reduction, exit-intent popups, abandoned cart emails, checkout optimization, conversion rate improvement"
      }
    },
    {
      question: "What's your approach to social media for e-commerce?",
      answer: "We create platform-specific strategies focusing on visual content, user-generated content, influencer collaborations, shoppable posts, and retargeting campaigns to drive engagement and sales.",
      meta: {
        title: "Social Media E-commerce Strategy | Shoppable Posts & Influencer Marketing",
        description: "Platform-specific social media strategies for e-commerce: shoppable posts, influencer collaborations, UGC, and retargeting campaigns for maximum sales.",
        keywords: "social media e-commerce, shoppable posts, influencer marketing, user-generated content, social media advertising"
      }
    },
    {
      question: "How do you optimize for mobile shoppers?",
      answer: "We ensure mobile-first design, fast loading speeds, simplified navigation, mobile-optimized checkout, and implement SMS marketing and push notifications to engage mobile users effectively.",
      meta: {
        title: "Mobile E-commerce Optimization | Fast Loading & Mobile-First Design 2025",
        description: "Complete mobile e-commerce optimization: mobile-first design, fast loading, simplified checkout, SMS marketing for maximum mobile conversions.",
        keywords: "mobile e-commerce, mobile optimization, mobile-first design, PWA, mobile checkout, SMS marketing"
      }
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
      readTime: "8 min read",
      meta: {
        title: "10 E-commerce SEO Strategies That Work in 2025 | Boost Rankings & Sales",
        description: "Proven e-commerce SEO strategies for 2025: product page optimization, schema markup, site speed, technical SEO. Increase rankings and drive qualified traffic.",
        keywords: "e-commerce SEO, product page SEO, schema markup, technical SEO, site speed optimization, 2025 SEO strategies"
      }
    },
    {
      title: "Maximizing ROI with Google Shopping Ads",
      excerpt: "Learn how to set up and optimize Google Shopping campaigns for maximum profitability.",
      fullContent: `Google Shopping ads drive 85% of all retail search ad clicks. Optimize your product feed with high-quality images, compelling titles, and accurate pricing. Use negative keywords to filter irrelevant traffic, implement smart bidding strategies, and segment campaigns by product performance. Regular feed optimization and performance analysis are key to maintaining high ROI. Consider seasonal adjustments and competitor analysis to stay ahead in competitive markets.`,
      image: "https://images.unsplash.com/photo-1563013541-3f7e6753f5ce?w=800&h=400&fit=crop",
      category: "PPC",
      date: "September 10, 2025",
      readTime: "7 min read",
      meta: {
        title: "Google Shopping Ads ROI Maximization | Product Feed Optimization 2025",
        description: "Maximize Google Shopping Ads ROI with product feed optimization, smart bidding, negative keywords. Drive 85% of retail search clicks profitably.",
        keywords: "Google Shopping ads, product feed optimization, PPC management, smart bidding, negative keywords, shopping campaign optimization"
      }
    },
    {
      title: "Social Commerce: The Future of E-commerce",
      excerpt: "Explore how social media platforms are transforming into shopping destinations.",
      fullContent: `Social commerce is expected to reach $1.2 trillion by 2025. Platforms like Instagram, TikTok, and Facebook offer integrated shopping features that reduce friction in the buyer journey. Implement shoppable posts, leverage user-generated content, and use influencer marketing to build trust. Live shopping events and AR try-on features are becoming increasingly popular. Focus on creating authentic content that resonates with your target audience while making purchasing seamless.`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      category: "Social Media",
      date: "September 5, 2025",
      readTime: "6 min read",
      meta: {
        title: "Social Commerce Future 2025 | $1.2T Market | Shoppable Posts & Live Shopping",
        description: "Social commerce reaching $1.2 trillion by 2025. Master shoppable posts, live shopping, AR try-ons, and influencer marketing for e-commerce growth.",
        keywords: "social commerce, shoppable posts, live shopping, AR try-ons, influencer marketing, social media shopping"
      }
    },
    {
      title: "Email Marketing Strategies That Drive E-commerce Sales",
      excerpt: "Build effective email sequences that convert subscribers into loyal customers.",
      fullContent: `Email marketing generates $42 for every $1 spent. Implement welcome series, abandoned cart sequences, post-purchase follow-ups, and re-engagement campaigns. Personalize content based on customer behavior and preferences. Segment your list for targeted messaging and optimize send times for maximum engagement. Use automation to scale your efforts while maintaining personal touchpoints. Track key metrics like open rates, click-through rates, and conversion rates to continuously improve performance.`,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      category: "Email Marketing",
      date: "August 28, 2025",
      readTime: "9 min read",
      meta: {
        title: "E-commerce Email Marketing Strategies | $42 ROI per $1 | Automation Sequences",
        description: "E-commerce email marketing delivering $42 ROI per $1 spent. Master automation sequences, personalization, segmentation for maximum sales.",
        keywords: "e-commerce email marketing, email automation, abandoned cart emails, segmentation, personalization, email ROI"
      }
    },
    {
      title: "Conversion Rate Optimization for E-commerce",
      excerpt: "Practical techniques to increase your website's conversion rate and boost sales.",
      fullContent: `CRO involves testing and optimizing every element of your customer journey. Focus on improving product page design, simplifying checkout processes, adding trust signals, and optimizing for mobile users. Implement A/B testing for headlines, images, calls-to-action, and pricing strategies. Use heatmaps and session recordings to understand user behavior. Address common pain points like slow loading times, complicated navigation, and unclear value propositions to significantly improve conversion rates.`,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      category: "CRO",
      date: "August 20, 2025",
      readTime: "10 min read",
      meta: {
        title: "E-commerce CRO Strategies | Conversion Rate Optimization Techniques 2025",
        description: "Master e-commerce CRO with A/B testing, checkout optimization, trust signals, mobile optimization. Boost conversion rates and sales significantly.",
        keywords: "e-commerce CRO, conversion rate optimization, A/B testing, checkout optimization, trust signals, mobile optimization"
      }
    },
    {
      title: "Mobile Commerce Strategies for 2025",
      excerpt: "Optimize your e-commerce store for the growing mobile shopping audience.",
      fullContent: `Mobile commerce accounts for 60% of all e-commerce sales. Ensure your site has responsive design, fast loading speeds, and mobile-friendly navigation. Implement progressive web app features, enable mobile payments like Apple Pay and Google Wallet, and use push notifications strategically. Optimize product images and descriptions for smaller screens, and simplify the checkout process for mobile users. Consider developing a dedicated mobile app for frequent shoppers to enhance user experience and retention.`,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
      category: "Mobile Commerce",
      date: "August 15, 2025",
      readTime: "7 min read",
      meta: {
        title: "Mobile Commerce Strategies 2025 | 60% of E-commerce Sales | PWA & Optimization",
        description: "Mobile commerce strategies for 2025: PWA implementation, mobile payments, push notifications. Capture 60% of e-commerce sales from mobile users.",
        keywords: "mobile commerce, m-commerce, PWA, mobile optimization, mobile payments, responsive design"
      }
    }
  ];

  // Services and other data remain the same...
  const services = [
    { 
      title: "E-commerce SEO", 
      description: "Optimize your online store to rank higher on search engines and drive organic traffic.", 
      icon: Search,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=300&fit=crop"
    },
    // ... other services
  ];

  const successStories = [
    // ... success stories data
  ];

  const stats = [
    // ... stats data
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-orange-50 to-pink-50">
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
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "E-commerce Marketing Agency",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "areaServed": "Worldwide",
            "serviceType": "Digital Marketing",
            "offers": {
              "@type": "Offer",
              "description": "E-commerce Marketing Services"
            }
          })}
        </script>
      </Helmet>

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
      {/* ... services section code remains the same ... */}

      {/* Success Stories Section */}
      {/* ... success stories section code remains the same ... */}

      {/* Stats Section */}
      {/* ... stats section code remains the same ... */}

      {/* FAQ Section with Individual SEO */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              E-commerce Marketing FAQs
            </h1>
            <p className="text-xl text-gray-600">
              Get answers to common questions about growing your online store with effective marketing strategies.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFAQ.includes(index);
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
                        <h2 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h2>
                        <div className="flex-shrink-0">
                          {isExpanded ? 
                            <ChevronUp className="w-6 h-6 text-orange-600" /> : 
                            <ChevronDown className="w-6 h-6 text-orange-600" />
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
      </section>

      {/* Blog Section with Individual SEO */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              E-commerce Marketing Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of the competition with the latest e-commerce marketing trends and strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const isExpanded = expandedBlogPosts.includes(index);
              return (
                <div key={index}>
                  {/* Individual Blog Post SEO */}
                  {isExpanded && (
                    <Helmet>
                      <title>{post.meta.title}</title>
                      <meta name="description" content={post.meta.description} />
                      <meta name="keywords" content={post.meta.keywords} />
                      <meta property="og:title" content={post.meta.title} />
                      <meta property="og:description" content={post.meta.description} />
                      <meta property="og:image" content={post.image} />
                      <meta property="og:type" content="article" />
                    </Helmet>
                  )}
                  
                  <Card className="bg-gradient-to-br from-white to-orange-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      <Badge variant="secondary" className="absolute top-4 left-4 bg-orange-600 text-white">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-gray-900 leading-tight">
                        {post.title}
                      </CardTitle>
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
                          
                          {/* Blog Post Structured Data */}
                          <script type="application/ld+json">
                            {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "BlogPosting",
                              "headline": post.title,
                              "description": post.meta.description,
                              "image": post.image,
                              "datePublished": post.date,
                              "author": {
                                "@type": "Organization",
                                "name": "E-commerce Marketing Agency"
                              },
                              "publisher": {
                                "@type": "Organization",
                                "name": "E-commerce Marketing Agency"
                              }
                            })}
                          </script>
                          
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
                </div>
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