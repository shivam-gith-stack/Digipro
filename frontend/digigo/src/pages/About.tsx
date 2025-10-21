import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Lightbulb,
  Heart,
  Globe,
  Shield,
  Zap,
  Star,
  Rocket,
  Calendar,
  DollarSign,
  MessageCircle
} from "lucide-react";

const About = () => {
  // Main Page SEO Meta Data
  const pageMeta = {
    title: "Digital Marketing Expert | 10+ Years Experience | 500% Average ROI | Certified Pro",
    description: "Certified digital marketing expert with 10+ years experience delivering 500% average ROI. Google, Facebook, HubSpot certified. Free consultation available.",
    keywords: "digital marketing expert, certified marketer, Google Ads certified, Facebook marketing expert, SEO specialist, PPC expert, marketing consultant",
    canonical: "https://youragency.com/about"
  };

  const certifications = [
    "Google Ads Certified",
    "Google Analytics Certified", 
    "Facebook Blueprint Certified",
    "HubSpot Inbound Certified",
    "SEMrush Certified",
    "Hootsuite Certified",
    "Microsoft Advertising Certified",
    "Twitter Flight School Certified"
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every strategy we implement is designed to deliver measurable results and maximize your ROI."
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "We make decisions based on comprehensive data analysis, not guesswork or assumptions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital marketing trends to give our clients a competitive advantage."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to helping your business grow and thrive."
    }
  ];

  const achievements = [
    {
      number: "10+",
      label: "Years Experience",
      description: "Decade of proven expertise in digital marketing"
    },
    {
      number: "500%",
      label: "Average ROI",
      description: "Consistent high returns for our clients"
    },
    {
      number: "200+",
      label: "Campaigns Launched",
      description: "Successful marketing campaigns delivered"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Businesses transformed and growing"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business, goals, and current digital presence through comprehensive analysis."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we create a customized digital marketing strategy tailored to your specific needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, launching campaigns and optimizing for maximum performance."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization ensure your campaigns deliver the best possible results."
    }
  ];

  // FAQ Section for About Page
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer: "I have extensive experience across multiple industries including e-commerce, SaaS, healthcare, professional services, real estate, and B2B technology. My diverse background allows me to adapt strategies to any industry, with particular expertise in competitive markets where data-driven approaches deliver the best results.",
      meta: {
        title: "Digital Marketing Industry Specialization | E-commerce, SaaS, Healthcare Expert",
        description: "Industry specialization: e-commerce, SaaS, healthcare, professional services, real estate, B2B technology. Expert in competitive market strategies.",
        keywords: "industry specialization, e-commerce marketing, SaaS marketing, healthcare marketing, B2B marketing, professional services marketing"
      }
    },
    {
      question: "How do you measure campaign success?",
      answer: "I track comprehensive KPIs including ROI, conversion rates, customer acquisition cost, lifetime value, engagement metrics, and brand awareness indicators. Each campaign includes specific success metrics aligned with your business goals, with transparent reporting showing exactly how your investment is performing.",
      meta: {
        title: "Campaign Success Measurement | ROI Tracking & Performance Analytics | KPI Monitoring",
        description: "Campaign success measurement: ROI tracking, conversion rates, CAC, LTV, engagement metrics, brand awareness. Transparent reporting and performance analytics.",
        keywords: "campaign measurement, ROI tracking, KPI monitoring, performance analytics, success metrics, conversion tracking"
      }
    },
    {
      question: "What's your typical client engagement process?",
      answer: "The process begins with a comprehensive discovery session, followed by strategy development, implementation, and ongoing optimization. Most clients see initial results within 30-60 days, with full optimization achieved within 3-6 months. I provide weekly progress updates and monthly comprehensive performance reviews.",
      meta: {
        title: "Client Engagement Process | Digital Marketing Strategy Implementation Timeline",
        description: "Client engagement process: discovery session, strategy development, implementation, optimization. Initial results in 30-60 days, full optimization in 3-6 months.",
        keywords: "client engagement, marketing process, strategy implementation, campaign timeline, progress updates"
      }
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer: "I work with businesses of all sizes, from startups to Fortune 500 companies. My flexible approach allows me to scale strategies based on budget and goals. Small businesses typically start with focused campaigns ($2,000-5,000/month), while enterprise clients may have comprehensive programs ($10,000+/month).",
      meta: {
        title: "Small Business vs Enterprise Marketing | Scalable Digital Marketing Strategies",
        description: "Work with all business sizes: startups to Fortune 500. Small businesses $2,000-5,000/month, enterprise $10,000+/month. Scalable strategies for any budget.",
        keywords: "small business marketing, enterprise marketing, startup marketing, scalable strategies, budget marketing"
      }
    },
    {
      question: "What makes your approach different from other marketers?",
      answer: "My 10+ years of hands-on experience, multiple platform certifications, and data-driven approach set me apart. Unlike agencies that assign junior staff, you work directly with me - an experienced expert. I focus on delivering measurable ROI rather than vanity metrics, with 99% client retention rate.",
      meta: {
        title: "Digital Marketing Expert Difference | 10+ Years Experience | Certified Professional",
        description: "What sets me apart: 10+ years experience, multiple certifications, data-driven approach, direct expert access, measurable ROI focus, 99% client retention.",
        keywords: "marketing expert difference, certified professional, experienced marketer, ROI focus, client retention"
      }
    },
    {
      question: "How do you stay current with marketing trends?",
      answer: "Continuous learning is core to my approach. I maintain active certifications, participate in industry conferences, test new strategies, and have early access to platform updates through partner programs. This ensures clients benefit from the latest marketing innovations and algorithm changes.",
      meta: {
        title: "Marketing Trend Updates | Continuous Learning & Certification | Industry Innovation",
        description: "Stay current with marketing trends: active certifications, industry conferences, strategy testing, early platform access, continuous learning for latest innovations.",
        keywords: "marketing trends, continuous learning, industry updates, certification maintenance, innovation adoption"
      }
    }
  ];

  // Blog-style content sections
  const expertiseArticles = [
    {
      title: "The Evolution of Digital Marketing: 10 Years of Industry Changes",
      content: "Over the past decade, digital marketing has transformed from basic website optimization to sophisticated AI-driven strategies. Key shifts include mobile-first indexing, voice search optimization, and the rise of video content. Understanding these changes is crucial for developing effective modern marketing strategies.",
      stats: "Mobile traffic increased 400% since 2015"
    },
    {
      title: "Why Data-Driven Marketing Delivers 500% Better ROI",
      content: "Data-driven approaches eliminate guesswork and enable precise targeting. By analyzing customer behavior, conversion patterns, and market trends, we can allocate resources efficiently and optimize campaigns for maximum return. Traditional marketing often wastes 50% of budget on ineffective channels.",
      stats: "Data-driven campaigns achieve 5x higher ROI"
    },
    {
      title: "Building Sustainable Growth: Beyond Quick Wins",
      content: "Sustainable growth requires balancing immediate results with long-term strategy. While PPC delivers quick wins, SEO and content marketing build lasting authority. The most successful businesses combine both approaches for consistent, scalable growth that withstands market changes.",
      stats: "Businesses with balanced strategies grow 3x faster"
    }
  ];

  return (
    <div className="overflow-hidden">
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
            "@type": "Person",
            "name": "Digital Marketing Expert",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "knowsAbout": [
              "Digital Marketing",
              "Search Engine Optimization",
              "Pay-Per-Click Advertising",
              "Social Media Marketing",
              "Content Marketing",
              "Email Marketing",
              "Marketing Analytics"
            ],
            "hasCredential": [
              "Google Ads Certification",
              "Google Analytics Certification",
              "Facebook Blueprint Certification",
              "HubSpot Inbound Certification"
            ],
            "experienceYears": "10"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Certified Digital Marketing Expert
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Your Digital Marketing
              <span className="text-accent block mt-2">Success Partner</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              With over 10 years of experience and multiple certifications, I help businesses achieve 
              extraordinary growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Transforming Businesses Through Digital Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in digital marketing began over a decade ago when I discovered the power 
                  of connecting businesses with their ideal customers online. Since then, I've helped 
                  hundreds of companies achieve remarkable growth through strategic digital marketing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What sets me apart is my commitment to results. Every campaign I create is designed 
                  with one goal in mind: delivering measurable ROI that grows your business. I don't 
                  believe in vanity metrics or empty promises – only real, sustainable growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                    <div className="text-sm font-medium text-foreground">{achievement.label}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary rounded-2xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                My Mission & Expertise
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help businesses achieve measurable online growth through data-driven digital 
                marketing strategies that deliver exceptional ROI and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover bg-gradient-card border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Articles Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Digital Marketing Insights & Expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sharing knowledge and insights gained from 10+ years of hands-on digital marketing experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertiseArticles.map((article, index) => (
                <Card key={index} className="card-hover bg-gradient-card border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Rocket className="w-5 h-5 text-primary" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Expert Insight
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{article.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.content}</p>
                    <div className="flex items-center space-x-2 pt-4 border-t border-border">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="text-xs font-medium text-success">{article.stats}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Certified Expertise You Can Trust
              </h2>
              <p className="text-xl text-muted-foreground">
                Continuous learning and certification ensure I stay at the forefront of digital marketing innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg shadow-md">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                My Proven 4-Step Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A systematic methodology that ensures every campaign delivers maximum results and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((step, index) => (
                <Card key={index} className="relative card-hover bg-gradient-card border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-primary/20"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Individual SEO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about my digital marketing services and approach.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  {/* Individual FAQ SEO */}
                  <Helmet>
                    <title>{faq.meta.title}</title>
                    <meta name="description" content={faq.meta.description} />
                    <meta name="keywords" content={faq.meta.keywords} />
                    <meta property="og:title" content={faq.meta.title} />
                    <meta property="og:description" content={faq.meta.description} />
                  </Helmet>
                  
                  <Card className="p-6 border-0 shadow-lg bg-gradient-card hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-semibold text-foreground text-lg mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    
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
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Digital Marketing Pro?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">100% Remote Service</h3>
                    <p className="text-muted-foreground">
                      No geographic limitations. I work with businesses worldwide, providing the same 
                      high-quality service regardless of location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Your success doesn't wait for business hours. I'm available when you need me, 
                      ensuring your campaigns run smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      You work directly with me, not a team of junior staff. Get personalized attention 
                      and expert guidance for your campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of delivering 500% average ROI increases with 99% client retention rate. 
                      Results speak louder than promises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Industry Recognition</h3>
                    <p className="text-muted-foreground">
                      Google Partner, Facebook Blueprint certified, and recognized industry expert with 
                      multiple platform certifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Reporting</h3>
                    <p className="text-muted-foreground">
                      Monthly detailed reports showing exactly how your campaigns are performing and 
                      the ROI you're receiving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Work Together?"
        description="Let's discuss how I can help transform your digital presence and drive the growth your business deserves."
        primaryButtonText="Schedule Free Consultation"
        secondaryButtonText="Get Marketing Audit"
        variant="primary"
      />
    </div>
  );
};

export default About;