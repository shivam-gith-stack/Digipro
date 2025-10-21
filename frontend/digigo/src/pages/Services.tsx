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
  ChevronUp
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

  // Main Page SEO Meta Data
  const pageMeta = {
    title: "Digital Marketing Services Agency | SEO, PPC, Social Media 2025 | #1 Google Ranking",
    description: "Complete digital marketing services: SEO, PPC, social media, web design, e-commerce marketing. 300% ROI guarantee. Free audit and consultation available.",
    keywords: "digital marketing services, SEO agency, PPC management, social media marketing, web design, e-commerce marketing, content marketing, email marketing, digital agency",
    canonical: "https://youragency.com/services"
  };

  const services = [
    {
      icon: ShoppingCart,
      title: "E-commerce Marketing",
      subtitle: "Boost Online Sales",
      description: "Complete e-commerce marketing solutions to increase conversions, average order value, and customer lifetime value for your online store.",
      features: [
        "E-commerce SEO optimization",
        "Shopping ads & retargeting campaigns",
        "Product feed optimization",
        "Abandoned cart recovery sequences",
        "Customer retention strategies",
        "Multi-channel marketing integration",
        "Sales analytics & reporting"
      ],
      results: "Average 150% increase in online sales",
      pricing: "Starting from 5000/month",
      duration: "15-30 days for measurable results",
      color: "from-orange-500 to-red-500",
      meta: {
        title: "E-commerce Marketing Services | Boost Online Sales 150% | 2025 Strategies",
        description: "E-commerce marketing services that increase online sales by 150%: SEO optimization, shopping ads, retargeting, cart recovery, and multi-channel strategies.",
        keywords: "e-commerce marketing, online store marketing, shopping ads, product feed optimization, abandoned cart recovery, e-commerce SEO"
      }
    },
    {
      icon: Code,
      title: "Website Design & Development",
      subtitle: "Convert-Focused Websites",
      description: "Create stunning, high-converting websites that represent your brand perfectly and turn visitors into customers.",
      features: [
        "Custom website design & development",
        "Mobile-responsive optimization",
        "Speed & performance optimization",
        "Conversion rate optimization (CRO)",
        "E-commerce functionality",
        "SEO-friendly structure",
        "Analytics & tracking setup"
      ],
      results: "Average 150% conversion rate improvement",
      pricing: "Starting from 5000 (one-time)",
      duration: "2-4 weeks for completion",
      color: "from-indigo-500 to-purple-500",
      meta: {
        title: "Website Design & Development | 150% Conversion Rate Improvement | 2025",
        description: "Professional website design and development services delivering 150% conversion rate improvement with mobile optimization, CRO, and SEO-friendly structure.",
        keywords: "website design, web development, conversion rate optimization, mobile-responsive design, custom websites, CRO"
      }
    },
    {
      icon: Search,
      title: "SEO Optimization & Local SEO",
      subtitle: "Rank #1 on Google",
      description: "Dominate search engine results with our comprehensive SEO strategies. We've helped businesses increase organic traffic by 300% in just 6 months.",
      features: [
        "Comprehensive keyword research & strategy",
        "On-page SEO optimization",
        "Technical SEO audits & fixes", 
        "Quality link building campaigns",
        "Local SEO & Google My Business optimization",
        "Competitor analysis & gap identification",
        "Monthly SEO performance reports"
      ],
      results: "Average 300% increase in organic traffic",
      pricing: "Starting from 5000/month",
      duration: "2-3 months to see significant results",
      color: "from-blue-500 to-cyan-500",
      meta: {
        title: "SEO Services Agency | 300% Organic Traffic Increase | Local SEO 2025",
        description: "Professional SEO services delivering 300% organic traffic growth: technical SEO, local SEO, link building, and comprehensive optimization strategies.",
        keywords: "SEO services, search engine optimization, local SEO, technical SEO, link building, Google ranking"
      }
    },
    {
      icon: Target,
      title: "Google Ads & PPC Management",
      subtitle: "Maximize Your Ad ROI",
      description: "Drive immediate results with expertly managed Google Ads campaigns. Our clients see an average 500% return on their advertising investment.",
      features: [
        "Complete Google Ads campaign setup",
        "Advanced keyword research & bidding strategies",
        "Compelling ad copy & creative development",
        "Landing page optimization for conversions",
        "A/B testing for continuous improvement",
        "Conversion tracking & analytics setup",
        "Weekly campaign optimization & reporting"
      ],
      results: "Average 500% return on ad spend",
      pricing: "Starting from 3000/month + ad spend",
      duration: "Results visible within 30 days",
      color: "from-green-500 to-emerald-500",
      meta: {
        title: "PPC Management Services | 500% ROI Google Ads | Expert Campaign Management",
        description: "PPC management services delivering 500% ROI on Google Ads: campaign setup, bid optimization, landing page optimization, and continuous A/B testing.",
        keywords: "PPC management, Google Ads, paid search, ROI optimization, campaign management, conversion optimization"
      }
    },
    {
      icon: Share2,
      title: "Social Media Marketing & Management",
      subtitle: "Build Your Brand Community",
      description: "Engage your audience and build a loyal community across all social platforms. Increase brand awareness and drive qualified traffic to your website.",
      features: [
        "Social media strategy development",
        "Content creation & curation",
        "Community management & engagement",
        "Paid social advertising campaigns",
        "Influencer outreach & partnerships",
        "Social media analytics & reporting",
        "Brand reputation monitoring"
      ],
      results: "Average 250% increase in engagement",
      pricing: "Starting from 3000/month",
      duration: "Ongoing with immediate engagement",
      color: "from-pink-500 to-rose-500",
      meta: {
        title: "Social Media Marketing Services | 250% Engagement Increase | Community Building",
        description: "Social media marketing services increasing engagement by 250%: strategy development, content creation, community management, and paid advertising.",
        keywords: "social media marketing, social media management, community building, social media advertising, influencer marketing"
      }
    },
    {
      icon: PenTool,
      title: "Content Marketing & Copywriting",
      subtitle: "Content That Converts",
      description: "Create compelling content that educates, engages, and converts your audience. Build authority in your industry while driving business growth.",
      features: [
        "Content strategy & editorial calendar",
        "Blog writing & article creation",
        "Website copywriting & optimization",
        "Email marketing campaigns",
        "Video content scripts",
        "Infographic design & creation",
        "Content performance analytics"
      ],
      results: "Average 200% increase in leads",
      pricing: "Starting from 2500/month",
      duration: "2-3 months for content momentum",
      color: "from-purple-500 to-indigo-500",
      meta: {
        title: "Content Marketing Services | 200% Lead Increase | Professional Copywriting",
        description: "Content marketing services increasing leads by 200%: strategy development, blog writing, copywriting, email campaigns, and performance analytics.",
        keywords: "content marketing, copywriting, content strategy, blog writing, email marketing, content creation"
      }
    },
    {
      icon: Mail,
      title: "Email Marketing Automation",
      subtitle: "Nurture & Convert Leads",
      description: "Maximize customer lifetime value with sophisticated email marketing automation that nurtures leads and drives repeat business.",
      features: [
        "Email marketing strategy development",
        "Automated email sequence creation",
        "List building & segmentation",
        "Email template design & coding",
        "A/B testing for optimization",
        "Deliverability optimization",
        "Comprehensive email analytics"
      ],
      results: "Average 400% increase in email ROI",
      pricing: "Starting from 2500/month",
      duration: "15-30 days for full automation setup",
      color: "from-teal-500 to-cyan-500",
      meta: {
        title: "Email Marketing Services | 400% ROI Increase | Automation & Segmentation",
        description: "Email marketing services delivering 400% ROI increase: automation sequences, list segmentation, template design, and deliverability optimization.",
        keywords: "email marketing, email automation, lead nurturing, email segmentation, marketing automation, email campaigns"
      }
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current digital presence and competitive landscape.",
      icon: Search,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Strategy Development", 
      description: "Custom strategy creation based on your goals, audience, and market opportunities.",
      icon: Target,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Expert execution of campaigns with best practices and proven methodologies.",
      icon: Zap,
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring, testing, and optimization for maximum ROI.",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ];

  const guarantees = [
    {
      icon: TrendingUp,
      title: "Performance Guarantee",
      description: "If we don't improve your metrics within 90 days, we'll work for free until we do.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Award,
      title: "Certified Expertise",
      description: "Google & Facebook certified professionals with proven track records.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for all your campaigns.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: BarChart3,
      title: "Transparent Reporting",
      description: "Monthly detailed reports showing exactly what we're doing and the results achieved.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Heart,
      title: "Dedicated Account Manager",
      description: "Your personal marketing expert who understands your business goals.",
      color: "text-pink-600 bg-pink-100"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Approach",
      description: "All strategies optimized for the mobile-first digital landscape.",
      color: "text-cyan-600 bg-cyan-100"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from your marketing services?",
      answer: "Results vary by service: PPC campaigns show results within 30 days, SEO takes 3-6 months for significant growth, social media shows engagement within weeks, and content marketing builds momentum over 3-6 months. We provide detailed timelines during our strategy session. Most clients see measurable improvements within the first 30-60 days, with full optimization achieved within 3-6 months.",
      meta: {
        title: "Digital Marketing Results Timeline | PPC 30 Days, SEO 3-6 Months | 2025 Guide",
        description: "Digital marketing results timeline: PPC shows results in 30 days, SEO takes 3-6 months, social media engagement within weeks, content marketing 3-6 months for momentum.",
        keywords: "marketing results timeline, PPC timeline, SEO results time, social media engagement timeline, content marketing results"
      }
    },
    {
      question: "Do you work with businesses in specific industries?",
      answer: "Yes, we have experience across multiple industries including e-commerce, SaaS, healthcare, real estate, professional services, and more. Our strategies are tailored to each industry's unique challenges and opportunities. We've successfully served over 200 clients across 15+ industries, with specialized expertise in B2B technology, healthcare, e-commerce, and professional services.",
      meta: {
        title: "Industry-Specific Marketing Services | E-commerce, SaaS, Healthcare | Multi-Industry",
        description: "Industry-specific marketing services for e-commerce, SaaS, healthcare, real estate, professional services. 200+ clients across 15+ industries with tailored strategies.",
        keywords: "industry marketing, e-commerce marketing, SaaS marketing, healthcare marketing, real estate marketing, B2B marketing"
      }
    },
    {
      question: "What's included in your monthly reporting?",
      answer: "Our comprehensive monthly reports include: performance metrics, campaign analysis, ROI calculations, competitor insights, recommendations for improvement, and detailed breakdowns of all activities completed. We also schedule monthly strategy calls to discuss results and next steps. Each report includes 15+ key performance indicators, comparative analysis, and actionable insights for continuous improvement.",
      meta: {
        title: "Marketing Reporting & Analytics | Monthly Performance Reports | 15+ KPIs",
        description: "Comprehensive monthly marketing reports: performance metrics, ROI calculations, competitor analysis, 15+ KPIs, and actionable insights for continuous improvement.",
        keywords: "marketing reporting, performance analytics, monthly reports, KPI tracking, campaign analytics"
      }
    },
    {
      question: "Can I choose multiple services or do I need to pick one?",
      answer: "You can absolutely choose multiple services! In fact, most of our clients use 2-4 services for maximum impact. We offer package discounts for bundled services and can create a custom strategy that integrates all chosen services seamlessly. Our integrated approach typically delivers 35-60% better results than single-service strategies due to cross-channel optimization and data sharing.",
      meta: {
        title: "Multiple Marketing Services | Integrated Strategy | Package Discounts 2025",
        description: "Choose multiple marketing services for integrated strategies: 2-4 services recommended, package discounts available, 35-60% better results than single-service approaches.",
        keywords: "multiple marketing services, integrated marketing, package discounts, cross-channel optimization, bundled services"
      }
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We track KPIs specific to each service: SEO (organic traffic, rankings, conversions), PPC (ROAS, CTR, conversion rate), social media (engagement, reach, leads), and more. We establish baseline metrics before starting and measure improvement against those benchmarks. Our ROI calculations include both direct revenue attribution and lifetime customer value for comprehensive performance assessment.",
      meta: {
        title: "Marketing ROI Measurement | KPI Tracking & Performance Analytics | Success Metrics",
        description: "Comprehensive marketing ROI measurement: service-specific KPIs, baseline metrics, direct revenue attribution, lifetime customer value, and performance benchmarking.",
        keywords: "marketing ROI, KPI tracking, performance measurement, success metrics, ROI calculation"
      }
    },
    {
      question: "Do you provide content creation as part of your services?",
      answer: "Yes, content creation is included in our content marketing, social media, and SEO services. We have a team of professional writers, designers, and video creators who produce high-quality content tailored to your brand and audience. Our content team includes industry specialists, SEO experts, and conversion-focused copywriters to ensure every piece drives results.",
      meta: {
        title: "Content Creation Services | Professional Writing & Design | SEO-Optimized Content",
        description: "Professional content creation services: writing, design, video production, SEO optimization, industry specialists, and conversion-focused copywriting included.",
        keywords: "content creation, professional writing, content design, video production, SEO content, copywriting"
      }
    },
    {
      question: "What's your approach to communication and collaboration?",
      answer: "We assign a dedicated account manager as your main point of contact. We use project management tools, schedule regular check-ins, and are available via email, phone, and video calls. You'll always know what we're working on and the results we're achieving. Our clients receive weekly progress updates, monthly strategy reviews, and 24/7 access to campaign dashboards.",
      meta: {
        title: "Client Communication & Collaboration | Dedicated Account Manager | Weekly Updates",
        description: "Transparent client communication: dedicated account manager, weekly progress updates, monthly strategy reviews, 24/7 dashboard access, and multiple contact channels.",
        keywords: "client communication, account management, collaboration, progress updates, client support"
      }
    },
    {
      question: "Can you help with existing marketing campaigns?",
      answer: "Absolutely! We often take over existing campaigns and optimize them for better performance. We start with a comprehensive audit to identify strengths, weaknesses, and immediate improvement opportunities. Our optimization process typically improves campaign performance by 40-80% within the first 60 days through strategic adjustments and best practice implementation.",
      meta: {
        title: "Existing Campaign Optimization | 40-80% Performance Improvement | Campaign Audit",
        description: "Existing campaign optimization services: comprehensive audits, 40-80% performance improvement within 60 days, strategic adjustments, and best practice implementation.",
        keywords: "campaign optimization, existing campaigns, performance improvement, campaign audit, marketing optimization"
      }
    },
    {
      question: "What makes your agency different from others?",
      answer: "Our data-driven approach, transparent reporting, performance guarantees, and dedicated account management set us apart. We focus on delivering measurable ROI rather than just vanity metrics, and we become true partners in your business growth. Unlike many agencies, we provide direct access to our specialists and maintain complete transparency in our strategies and results.",
      meta: {
        title: "Digital Marketing Agency Difference | Data-Driven Approach | Performance Guarantees",
        description: "What sets us apart: data-driven approach, transparent reporting, performance guarantees, dedicated account management, measurable ROI focus, and complete transparency.",
        keywords: "agency difference, data-driven marketing, performance guarantees, transparent reporting, ROI focus"
      }
    },
    {
      question: "How do you stay updated with changing algorithms and trends?",
      answer: "Our team participates in continuous training, attends industry conferences, and stays active in marketing communities. We have dedicated resources for testing new strategies and adapting to algorithm changes before they impact our clients. We maintain partnerships with Google, Facebook, and other platform representatives for early access to updates and best practices.",
      meta: {
        title: "Marketing Algorithm Updates | Continuous Training | Industry Trend Adaptation 2025",
        description: "Staying current with marketing algorithms: continuous training, industry conferences, dedicated testing resources, platform partnerships, and early update access.",
        keywords: "algorithm updates, marketing trends, continuous training, industry adaptation, platform updates"
      }
    },
    {
      question: "What is your contract length and cancellation policy?",
      answer: "We offer flexible month-to-month contracts with 30-day notice for cancellation. For SEO services, we recommend a minimum 6-month commitment to see meaningful results. There are no long-term lock-in contracts. Our cancellation policy is straightforward - you can cancel anytime with 30 days' notice, no hidden fees or penalties.",
      meta: {
        title: "Marketing Service Contracts | Month-to-Month | 30-Day Cancellation | No Lock-in",
        description: "Flexible marketing service contracts: month-to-month agreements, 30-day cancellation notice, no long-term lock-in, straightforward cancellation policy.",
        keywords: "service contracts, cancellation policy, month-to-month, no lock-in, flexible agreements"
      }
    },
    {
      question: "Do you offer international marketing services?",
      answer: "Yes, we have experience running campaigns in multiple countries and languages. We can help with localization, international SEO, geo-targeted advertising, and cultural adaptation of content and strategies. Our international services have helped clients expand into 25+ countries across North America, Europe, Asia, and Australia with localized strategies.",
      meta: {
        title: "International Marketing Services | Multi-Country Campaigns | Localization 2025",
        description: "International marketing services: multi-country campaigns, localization, international SEO, geo-targeted advertising, cultural adaptation for 25+ countries.",
        keywords: "international marketing, multi-country campaigns, localization, global SEO, international advertising"
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
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Digital Marketing Services Agency",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "areaServed": "Worldwide",
            "serviceType": "Digital Marketing",
            "offers": {
              "@type": "Offer",
              "description": "Digital Marketing Services"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg py-3 px-6">
              <Zap className="w-5 h-5 mr-2" />
              Comprehensive Digital Marketing Services
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Complete Digital Marketing
              <span className="text-yellow-300 block mt-3">Solutions That Deliver Results</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              From SEO to PPC, social media to e-commerce marketing - everything you need to dominate 
              your market and achieve exceptional ROI with our data-driven strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-semibold text-lg px-8 py-3 group">
                Get Free Service Audit
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3">
                View Pricing Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of services or let us create a custom solution 
              that fits your unique business needs and goals.
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
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
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
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3`}>
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
                Our Proven 4-Step Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach that ensures every campaign delivers maximum results and ROI for your business.
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
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We're so confident in our ability to deliver results that we back our services with these guarantees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-12 h-12 mx-auto ${guarantee.color.split('text-')[1].split(' ')[0]} rounded-lg flex items-center justify-center mb-4`}>
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our digital marketing services and processes.
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

      {/* CTA Section */}
      <CTASection 
        title="Ready to Accelerate Your Business Growth?"
        description="Choose the services that fit your needs or let us create a custom strategy that delivers exceptional results for your business. Get started with a free consultation today."
        primaryButtonText="Get Free Service Consultation"
        secondaryButtonText="View Custom Packages"
        variant="primary"
      />
    </div>
  );
};

export default Services;