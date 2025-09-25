import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import {useNavigate} from "react-router-dom"
import { Calendar, Clock, ChevronDown, ChevronUp, User, ArrowRight, TrendingUp, FileText, Video, BarChart, Share2 } from "lucide-react";

const ContentMarketingPage = () => {
  const navigate = useNavigate()
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const toggleExpanded = (index: number) => setExpandedPosts(prev => prev.includes(index) ? prev.filter(i=>i!==index) : [...prev,index]);

  const blogPosts = [
    {
      title: "Creating High-Converting Content for 2025",
      excerpt: "Learn how to craft content that engages, informs, and converts.",
      fullContent: `Content marketing is the backbone of digital marketing success. Focus on blog posts, videos, infographics, and guides that educate your audience and solve their pain points. Use keyword research to target relevant search terms and optimize each piece for SEO.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
      category: "Content Strategy",
      date: "September 20, 2025",
      readTime: "7 min read"
    },
    {
      title: "Content Strategy Tips to Boost Engagement",
      excerpt: "Maximize engagement with a structured and well-planned content strategy.",
      fullContent: `Develop a content calendar to ensure consistent publishing. Use analytics to monitor engagement metrics like time on page, shares, and comments. Repurpose high-performing content into multiple formats to expand reach and improve SEO results.`,
      image: "https://images.unsplash.com/photo-1504691342899-36f8fddf0f3e?w=800&h=400&fit=crop",
      category: "Content Strategy",
      date: "September 15, 2025",
      readTime: "6 min read"
    },
    {
      title: "Video Content: The Future of Digital Marketing",
      excerpt: "Discover why video content dominates engagement metrics and how to leverage it.",
      fullContent: `Video content generates 1200% more shares than text and images combined. Create tutorial videos, behind-the-scenes content, and customer testimonials to build trust and engagement. Optimize videos for different platforms and include captions for accessibility.`,
      image: "https://images.unsplash.com/photo-1559703243-9094e6f303b3?w=800&h=400&fit=crop",
      category: "Video Marketing",
      date: "September 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "SEO Content Writing Best Practices",
      excerpt: "Master the art of writing content that ranks well and converts readers.",
      fullContent: `Focus on user intent, create comprehensive content that answers questions thoroughly, and optimize for featured snippets. Use internal linking strategically and ensure your content is mobile-friendly. Regularly update old content to maintain relevance and rankings.`,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "SEO Writing",
      date: "September 5, 2025",
      readTime: "9 min read"
    },
    {
      title: "Social Media Content That Drives Results",
      excerpt: "Create social media content that builds community and drives traffic.",
      fullContent: `Develop a consistent brand voice across all platforms. Use a mix of educational, entertaining, and promotional content. Leverage user-generated content and run interactive campaigns to boost engagement. Track performance metrics to refine your strategy over time.`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      category: "Social Media",
      date: "August 30, 2025",
      readTime: "5 min read"
    },
    {
      title: "Measuring Content Marketing ROI Effectively",
      excerpt: "Learn how to track and analyze your content marketing performance.",
      fullContent: `Set clear KPIs from the beginning, track traffic sources, engagement rates, conversion rates, and customer lifetime value. Use tools like Google Analytics, heatmaps, and social media analytics to gather data. Calculate ROI by comparing content costs against generated revenue.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      category: "Analytics",
      date: "August 25, 2025",
      readTime: "7 min read"
    }
  ];

  const faqs = [
    {
      question: "What type of content should I create?",
      answer: "Focus on blog posts, videos, infographics, case studies, and social media content that addresses your audience's needs and pain points."
    },
    {
      question: "How often should I publish content?",
      answer: "Consistency is key. Aim for 2-3 blog posts per week plus daily social media content. Quality should never be sacrificed for quantity."
    },
    {
      question: "How do I measure content marketing success?",
      answer: "Track KPIs like organic traffic, social shares, backlinks, leads generated, conversion rates, and time on page."
    },
    {
      question: "What's the difference between content marketing and copywriting?",
      answer: "Content marketing focuses on educating and building relationships, while copywriting aims to persuade and drive immediate action."
    },
    {
      question: "How long does it take to see results from content marketing?",
      answer: "Typically 3-6 months for significant SEO results, but social media engagement can improve within weeks of consistent posting."
    },
    {
      question: "Should I focus on short-form or long-form content?",
      answer: "Use both strategically. Long-form ranks better for SEO, while short-form works well for social media and quick engagement."
    },
    {
      question: "How important is visual content in marketing?",
      answer: "Extremely important. Visual content increases engagement by 80% and helps communicate complex information more effectively."
    },
    {
      question: "What's the best way to repurpose existing content?",
      answer: "Turn blog posts into videos, infographics, social media threads, podcasts, or email newsletters to maximize reach."
    }
  ];

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Blog Content Creation",
      description: "SEO-optimized articles that attract and engage your target audience",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=300&fit=crop"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      description: "High-quality video content for education and engagement across platforms",
      image: "https://images.unsplash.com/photo-1559703243-9094e6f303b3?w=600&h=300&fit=crop"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Content Strategy",
      description: "Develop a comprehensive roadmap to maximize ROI and audience reach",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Content",
      description: "Engaging content that builds community and drives traffic to your website",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=300&fit=crop"
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 lg:py-32 text-center max-w-6xl mx-auto px-4 rounded-3xl mt-8 shadow-2xl">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 inline-flex items-center mb-4">
          <TrendingUp className="w-4 h-4 mr-2" /> Content Marketing
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Engage, Educate & Convert With Powerful Content</h1>
        <p className="text-xl md:text-2xl text-white/90 mt-4 leading-relaxed">Our content marketing strategies build authority, drive organic traffic, and convert visitors into loyal customers.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button onClick={() => navigate("/contact")} size="lg" className="bg-white text-blue-600 hover:bg-gray-100">Get Free Content Audit</Button>
            
          
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">View Case Studies</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Content Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover"/>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ContactPopup 
                    trigger={<Button size="sm" variant="outline" className="group">Learn More <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/></Button>}
                    title={`Learn More About ${service.title}`}
                    description={`Get detailed information about our ${service.title.toLowerCase()} services.`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Content Marketing Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post,index)=>{
              const isExpanded = expandedPosts.includes(index);
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover"/>
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
                      <div className="flex items-center space-x-1"><Clock className="w-4 h-4"/><span>{post.readTime}</span></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    {isExpanded && (
                      <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                        {post.fullContent.split("\n\n").map((p,i)=><p key={i} className="text-muted-foreground leading-relaxed text-sm">{p}</p>)}
                        <ContactPopup 
                          trigger={<Button size="sm" className="group bg-blue-600 hover:bg-blue-700">Get Expert Help<ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/></Button>} 
                          title={`Get Expert Help with ${post.category}`} 
                          description={`Let's discuss your content marketing strategy.`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-2"><User className="w-4 h-4 text-muted-foreground"/><span className="text-sm text-muted-foreground">Content Expert</span></div>
                      <Button variant="outline" size="sm" onClick={()=>toggleExpanded(index)}>
                        {isExpanded ? <>Show Less<ChevronUp className="ml-2 w-4 h-4"/></> : <>Read More<ChevronDown className="ml-2 w-4 h-4"/></>}
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
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Content Marketing FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq,index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-foreground mb-3 text-lg">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Elevate Your Content Strategy?" 
        description="Our content marketing experts can help grow traffic, engagement, and conversions with proven strategies." 
        primaryButtonText="Get Free Content Strategy" 
        secondaryButtonText="View Our Portfolio" 
        variant="primary"
      />
    </div>
  )
};

export default ContentMarketingPage;