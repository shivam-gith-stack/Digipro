import { useState } from "react";
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

  // Optimized PPC-related images with WebP format and preloading
  const blogPosts = [
    {
      title: "Maximize ROI with Google Ads in 2025",
      excerpt: "Learn how to structure your Google Ads campaigns for maximum return on ad spend.",
      fullContent: `Google Ads can deliver immediate traffic and leads if set up correctly. Focus on proper campaign structure, ad group segmentation, and targeted keywords. Monitor metrics like CTR, Quality Score, and conversion rate. Regular A/B testing of ad copy and landing pages ensures you get the best ROI.`,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "PPC",
      date: "September 20, 2025",
      readTime: "7 min read"
    },
    {
      title: "Advanced Bid Management Techniques",
      excerpt: "Discover strategies to control your ad spend and increase conversions.",
      fullContent: `Bid management is key to maximizing ROI. Use automated bidding strategies like Target CPA or Target ROAS. Monitor campaign performance, adjust bids based on device, location, and audience. Avoid overbidding on low-converting keywords, and prioritize high-performing campaigns.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "PPC",
      date: "September 15, 2025",
      readTime: "6 min read"
    },
    {
      title: "Creating High-Converting Landing Pages",
      excerpt: "Learn design and copy techniques to improve PPC conversion rates.",
      fullContent: `Landing pages are critical for converting clicks into customers. Use clear CTAs, minimal distractions, persuasive copy, and fast-loading pages. Split-test layouts and headlines to optimize conversion rates. Integrate tracking for precise performance measurement.`,
      image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a6?auto=format&fit=crop&w=1200&h=600&q=80",
      category: "Landing Page",
      date: "September 10, 2025",
      readTime: "8 min read"
    }
  ];

  const faqs = [
    { question: "How much should I spend on Google Ads?", answer: "Ad spend depends on your business goals, industry, and competition. Start small, monitor results, and scale successful campaigns." },
    { question: "Can PPC replace SEO?", answer: "No. PPC delivers immediate traffic, but SEO builds long-term organic visibility. A combined strategy yields the best results." },
    { question: "How do I track conversions effectively?", answer: "Use Google Ads conversion tracking, Google Analytics, and proper landing page tracking to measure performance accurately." },
    { question: "What is a good CTR for PPC?", answer: "A typical CTR ranges from 2% to 5% depending on industry. Higher CTR usually indicates better ad relevance and targeting." },
    { question: "Should I run PPC continuously?", answer: "Yes, continuous campaigns help maintain visibility, collect data, and improve ROI over time through optimization." }
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

      {/* Blog Section */}
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
                <Card key={index} className="bg-card border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                        {post.fullContent.split("\n\n").map((p,i) => (
                          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
                        ))}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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