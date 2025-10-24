import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import {useNavigate} from "react-router-dom"
import { Calendar, Clock, ChevronDown, ChevronUp, User, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";

const PPCPage = () => {
  const navigate = useNavigate()
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const toggleExpanded = (index: number) =>
    setExpandedPosts(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);

  // Main Page SEO Meta Data
  const pageMeta = {
    title: "PPC Management Agency | Google Ads Experts 2025 | Maximize ROI & Conversions",
    description: "Expert PPC management services delivering 300% ROI. Google Ads, Facebook Ads, and paid search campaign optimization. Free PPC audit and consultation available.",
    keywords: "PPC management, Google Ads, paid search, PPC agency, Facebook Ads, pay-per-click, ad campaign management, ROI optimization, conversion rate optimization",
    canonical: "https://lumivexgrowth.in/ppc"
  };

  // Optimized PPC-related images with WebP format and preloading
  const blogPosts = [
    {
      title: "Maximize ROI with Google Ads in 2025",
      excerpt: "Learn how to structure your Google Ads campaigns for maximum return on ad spend.",
      fullContent: `Google Ads can deliver immediate traffic and leads if set up correctly. Focus on proper campaign structure, ad group segmentation, and targeted keywords. Monitor metrics like CTR, Quality Score, and conversion rate. Regular A/B testing of ad copy and landing pages ensures you get the best ROI.

**Advanced Google Ads Strategies for 2025:**

**Campaign Structure Optimization:**
- **SKAGs (Single Keyword Ad Groups)**: 1-2 keywords per ad group for maximum relevance
- **RLSA (Remarketing Lists for Search Ads)**: Target previous visitors with customized messaging
- **Smart Bidding Strategies**: Use Target CPA, Target ROAS, and Maximize Conversions
- **Ad Extensions**: Implement all relevant extensions (sitelinks, callouts, structured snippets)
- **Competitor Analysis**: Monitor competitor strategies and adjust bidding accordingly

**Performance Metrics to Track:**
- **Quality Score**: Aim for 8-10/10 to reduce CPC by up to 50%
- **Click-Through Rate (CTR)**: Industry average 2-5%, aim for 5%+
- **Conversion Rate**: Optimize for 3-7% depending on industry
- **Cost Per Acquisition (CPA)**: Monitor and optimize for maximum profitability
- **Return on Ad Spend (ROAS)**: Target 4:1 or higher for sustainable growth

**2025 Google Ads Updates:**
- AI-powered bidding optimization
- Enhanced audience targeting capabilities
- Voice search ad integration
- Visual search advertising features
- Automated creative optimization

Focus on proper campaign structure, ad group segmentation, and targeted keywords. Monitor metrics like CTR, Quality Score, and conversion rate. Regular A/B testing of ad copy and landing pages ensures you get the best ROI.`,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "PPC",
      date: "September 20, 2025",
      readTime: "7 min read",
      meta: {
        title: "Google Ads ROI Maximization 2025 | 300% ROI Strategies & Campaign Optimization",
        description: "Maximize Google Ads ROI with 2025 strategies: SKAGs, RLSA, smart bidding, Quality Score optimization, and AI-powered campaign management for 300%+ returns.",
        keywords: "Google Ads ROI, PPC optimization, campaign structure, Quality Score, smart bidding, ad extensions"
      }
    },
    {
      title: "Advanced Bid Management Techniques",
      excerpt: "Discover strategies to control your ad spend and increase conversions.",
      fullContent: `Bid management is key to maximizing ROI. Use automated bidding strategies like Target CPA or Target ROAS. Monitor campaign performance, adjust bids based on device, location, and audience. Avoid overbidding on low-converting keywords, and prioritize high-performing campaigns.

**Comprehensive Bid Management Framework:**

**Automated Bidding Strategies:**
- **Target CPA**: Set target cost-per-acquisition for consistent conversion costs
- **Target ROAS**: Optimize for specific return on ad spend percentages
- **Maximize Conversions**: Let Google automatically maximize conversion volume
- **Enhanced CPC**: Manual bidding with smart adjustments
- **Portfolio Bid Strategies**: Manage multiple campaigns with unified goals

**Manual Bid Optimization Techniques:**
- **Device Bid Adjustments**: Mobile: +20%, Tablet: -10%, Desktop: Base
- **Location Bid Modifiers**: +15-25% for high-converting geographic areas
- **Time-of-Day Optimization**: Increase bids during peak conversion hours
- **Audience Bid Adjustments**: +10-30% for high-value remarketing lists
- **Competitive Position Adjustments**: Monitor and adjust for top positions

**Performance Monitoring & Adjustment:**
- Daily performance reviews and bid adjustments
- Weekly competitive analysis and strategy refinement
- Monthly portfolio optimization and budget reallocation
- Quarterly strategy reviews and testing new approaches

**Tools for Advanced Bid Management:**
- Google Ads Scripts for automated bid rules
- Third-party bid management platforms
- Custom reporting and analytics dashboards
- Machine learning algorithms for predictive bidding

Bid management is key to maximizing ROI. Use automated bidding strategies like Target CPA or Target ROAS. Monitor campaign performance, adjust bids based on device, location, and audience. Avoid overbidding on low-converting keywords, and prioritize high-performing campaigns.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "PPC",
      date: "September 15, 2025",
      readTime: "6 min read",
      meta: {
        title: "PPC Bid Management 2025 | Automated Bidding & ROI Optimization Strategies",
        description: "Advanced PPC bid management techniques: Target CPA, Target ROAS, device/location bidding, audience adjustments, and automated optimization for maximum conversions.",
        keywords: "PPC bid management, automated bidding, Target CPA, Target ROAS, bid adjustments, conversion optimization"
      }
    },
    {
      title: "Creating High-Converting Landing Pages",
      excerpt: "Learn design and copy techniques to improve PPC conversion rates.",
      fullContent: `Landing pages are critical for converting clicks into customers. Use clear CTAs, minimal distractions, persuasive copy, and fast-loading pages. Split-test layouts and headlines to optimize conversion rates. Integrate tracking for precise performance measurement.

**Landing Page Optimization Framework:**

**Design Best Practices:**
- **Above-the-Fold Optimization**: Clear value proposition and primary CTA
- **Mobile-First Design**: 60% of PPC traffic comes from mobile devices
- **Loading Speed**: Aim for under 2-second load time (affects Quality Score)
- **Visual Hierarchy**: Guide visitors through logical conversion paths
- **Trust Signals**: Testimonials, security badges, and social proof

**Conversion Rate Optimization (CRO):**
- **A/B Testing**: Test headlines, CTAs, images, and form lengths
- **Multivariate Testing**: Test multiple elements simultaneously
- **Heatmap Analysis**: Understand user behavior and engagement patterns
- **Exit-Intent Popups**: Capture abandoning visitors with special offers
- **Chat Integration**: Live chat for immediate customer support

**Content & Copywriting Strategies:**
- **Benefit-Oriented Headlines**: Focus on customer outcomes, not features
- **Pain Point Addressing**: Identify and solve specific customer problems
- **Social Proof Integration**: Case studies, testimonials, and user statistics
- **Urgency & Scarcity**: Limited-time offers and inventory alerts
- **Clear Value Proposition**: Immediate understanding of your offer

**Technical Optimization:**
- **Conversion Tracking**: Google Ads and Analytics implementation
- **Page Speed Optimization**: Core Web Vitals compliance
- **SEO Elements**: Meta tags, structured data, and internal linking
- **Security**: SSL certificates and privacy policy compliance
- **Accessibility**: WCAG 2.1 compliance for broader audience reach

Landing pages are critical for converting clicks into customers. Use clear CTAs, minimal distractions, persuasive copy, and fast-loading pages. Split-test layouts and headlines to optimize conversion rates. Integrate tracking for precise performance measurement.`,
      image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a6?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "Landing Page",
      date: "September 10, 2025",
      readTime: "8 min read",
      meta: {
        title: "High-Converting Landing Pages 2025 | PPC Conversion Rate Optimization Guide",
        description: "Create high-converting landing pages for PPC: design best practices, CRO techniques, A/B testing, mobile optimization, and trust signals for maximum conversions.",
        keywords: "landing page optimization, conversion rate optimization, PPC landing pages, A/B testing, CRO strategies"
      }
    }
  ];

  const faqs = [
    { 
      question: "How much should I spend on Google Ads?", 
      answer: "Ad spend depends on your business goals, industry, and competition. Start with a test budget of $1,000-$2,000 monthly, then scale based on performance. Most businesses achieve positive ROI with monthly budgets of $2,500-$10,000. We recommend allocating 7-12% of projected revenue to PPC for optimal growth."
    },
    { 
      question: "Can PPC replace SEO?", 
      answer: "No. PPC delivers immediate traffic, but SEO builds long-term organic visibility. A combined strategy yields the best results. PPC provides instant testing data for SEO keywords, while SEO reduces long-term customer acquisition costs. Businesses using both channels see 25% higher conversion rates and 30% lower overall marketing costs."
    },
    { 
      question: "How do I track conversions effectively?", 
      answer: "Use Google Ads conversion tracking, Google Analytics, and proper landing page tracking to measure performance accurately. Implement Google Tag Manager for advanced tracking, set up conversion goals, track micro-conversions, and use UTM parameters for campaign attribution. Proper tracking typically reveals 20-30% more conversions than basic setup."
    },
    { 
      question: "What is a good CTR for PPC?", 
      answer: "A typical CTR ranges from 2% to 5% depending on industry. Higher CTR usually indicates better ad relevance and targeting. Search ads average 3-5% CTR, while display ads average 0.5-1%. Top-performing campaigns achieve 7-10% CTR through precise targeting, compelling ad copy, and continuous optimization."
    },
    { 
      question: "Should I run PPC continuously?", 
      answer: "Yes, continuous campaigns help maintain visibility, collect data, and improve ROI over time through optimization. Consistent PPC presence increases brand recognition by 80% and typically reduces CPA by 15-25% over 6 months due to accumulated data and optimization insights."
    },
    {
      question: "What's the average ROI for PPC campaigns?",
      answer: "Average PPC ROI ranges from 200% to 500% depending on industry and optimization. Well-managed campaigns typically achieve $2-5 return for every $1 spent. E-commerce often sees higher ROAS (400-800%), while B2B services average 300-500% ROI with proper lead qualification and nurturing."
    },
    {
      question: "How long does it take to see PPC results?",
      answer: "Initial PPC results appear within 24-48 hours of campaign launch. Meaningful data for optimization accumulates in 2-4 weeks. Significant ROI and consistent performance typically stabilize within 3-6 months of continuous optimization and testing."
    },
    {
      question: "Do you manage Facebook Ads and other platforms?",
      answer: "Yes, we manage comprehensive PPC campaigns across Google Ads, Facebook, Instagram, LinkedIn, Twitter, and Microsoft Advertising. Multi-platform strategies typically increase overall campaign performance by 35-60% through audience diversification and cross-channel retargeting opportunities."
    }
  ];

  const features = [
    { title: "Campaign Setup", description: "Targeted campaigns designed to reach your ideal customers.", icon: CheckCircle },
    { title: "Bid Management", description: "Maximize ROI with automated and manual bidding strategies.", icon: CheckCircle },
    { title: "Ad Copy Optimization", description: "High-converting ads tailored to your audience.", icon: CheckCircle },
    { title: "Landing Page Optimization", description: "Improve conversions and reduce cost-per-lead.", icon: CheckCircle },
    { title: "Analytics & Reporting", description: "Track performance metrics and make data-driven decisions.", icon: CheckCircle },
    { title: "A/B Testing", description: "Continuously optimize ad creatives, audiences, and landing pages.", icon: CheckCircle }
  ];

  // Preload critical images
  const preloadImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80",
    "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a6?auto=format&fit=crop&w=1200&h=600&q=80"
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
            "@type": "Service",
            "name": "PPC Management Agency",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "areaServed": "Worldwide",
            "serviceType": "PPC Management",
            "offers": {
              "@type": "Offer",
              "description": "PPC Management Services"
            }
          })}
        </script>

        {/* Consolidated FAQPage Schema - FIXED */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Preload critical images */}
      <div className="hidden">
        {preloadImages.map((src, index) => (
          <img key={index} src={src} alt="" loading="eager" />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-orange-900/30 text-white py-20 lg:py-32 overflow-hidden">
        {/* Orange Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 inline-flex items-center mb-4 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" /> PPC & Google Ads
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Drive Traffic & Maximize ROI with 
              <span className="text-orange-500 block mt-2">Expert PPC Management</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mt-4 leading-relaxed">
              Our Google Ads and PPC campaigns are expertly managed to deliver maximum ROI, high-quality leads, and scalable growth.
            </p>

            <div className="pt-4">
              <Button onClick={() => navigate("/contact")} size="lg" className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-8 py-3 text-lg shadow-lg shadow-orange-500/25">
                Get Free PPC Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive PPC Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end PPC management designed to maximize your return on ad spend and drive qualified traffic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4 items-start">
                <feature.icon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <img 
              src="https://media.istockphoto.com/id/155278713/photo/affiliate-marketing-ecommerce.jpg?s=612x612&w=0&k=20&c=47YAAW8-hdwvhR6MgkphzJl31H1l5GC_g-S8RCG-NuY="
              alt="PPC Analytics Dashboard"
              className="rounded-lg shadow-lg w-full"
              loading="eager"
              width={800}
              height={200}
            />
          </div>
        </div>
      </section>

      {/* Blog Section with Individual SEO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">PPC Strategy Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest trends, strategies, and best practices for maximizing your PPC performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const isExpanded = expandedPosts.includes(index);
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
                  
                  <Card className="bg-card border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative w-full aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                        loading="eager"
                        width={400}
                        height={250}
                      />
                      <Badge variant="secondary" className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4"/>
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4"/>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      
                      {isExpanded && (
                        <div className="bg-muted/20 rounded-lg p-6 space-y-4">
                          <div className="prose prose-sm max-w-none">
                            {post.fullContent.split("\n\n").map((p,i) => (
                              <div key={i}>
                                {p.startsWith("**") ? (
                                  <h4 className="font-bold text-foreground mb-3 text-lg">{p.replace(/\*\*/g, '')}</h4>
                                ) : (
                                  <p className="text-muted-foreground leading-relaxed">{p}</p>
                                )}
                              </div>
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
                                "name": "PPC Management Agency"
                              },
                              "publisher": {
                                "@type": "Organization",
                                "name": "PPC Management Agency"
                              }
                            })}
                          </script>
                          
                          <ContactPopup 
                            trigger={
                              <Button size="sm" className="group">
                                Get Expert Help
                                <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/>
                              </Button>
                            } 
                            title={`Get Expert Help with ${post.category}`} 
                            description={`Let's discuss your PPC campaigns for maximum ROI.`}
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground"/>
                          <span className="text-sm text-muted-foreground">PPC Expert</span>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => toggleExpanded(index)}>
                          {isExpanded ? (
                            <>Show Less<ChevronUp className="ml-2 w-4 h-4"/></>
                          ) : (
                            <>Read More<ChevronDown className="ml-2 w-4 h-4"/></>
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

      {/* FAQ Section - Corrected with Single Schema */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">PPC Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Get answers to common questions about PPC advertising.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-foreground text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold">300%</div>
              <p className="text-lg">Average ROI</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">45%</div>
              <p className="text-lg">Lower CPA</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">2.8x</div>
              <p className="text-lg">Higher Conversions</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">24/7</div>
              <p className="text-lg">Campaign Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Maximize Your PPC ROI?" 
        description="Let our certified PPC experts manage your campaigns for maximum traffic, leads, and conversions." 
        primaryButtonText="Get Free PPC Consultation" 
        secondaryButtonText="View Case Studies" 
        variant="primary"
      />
    </div>
  );
};

export default PPCPage;