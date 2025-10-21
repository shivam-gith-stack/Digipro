import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import { 
  Calendar,
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedPosts(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const blogPosts = [
    {
      title: "10 SEO Mistakes That Are Killing Your Website Traffic in 2024",
      excerpt: "Discover the most common SEO mistakes that prevent websites from ranking on Google and learn how to fix them for immediate traffic improvements.",
      fullContent: `Search engine optimization is crucial for online visibility, but many businesses unknowingly make critical SEO mistakes that severely impact their organic traffic and search rankings.

The most devastating SEO mistake is keyword stuffing - cramming too many keywords into your content unnaturally. This hurts user experience and can trigger Google penalties. Instead, focus on natural keyword integration and semantic SEO.

Another major SEO mistake is neglecting page loading speed. Google considers site speed a crucial ranking factor, and slow-loading pages result in higher bounce rates and lower rankings. Use tools like Google PageSpeed Insights to identify and fix performance issues.

<h2>Additional Critical SEO Mistakes to Avoid:</h2>
<ul>
<li><strong>Ignoring Mobile Optimization:</strong> With mobile-first indexing, your site must be fully responsive and mobile-friendly</li>
<li><strong>Poor Quality Content:</strong> Thin, duplicate, or AI-generated content without human editing gets penalized</li>
<li><strong>Neglecting Technical SEO:</strong> Broken links, poor site structure, and crawl errors hurt rankings</li>
<li><strong>Not Optimizing for Featured Snippets:</strong> Position zero results capture significant traffic</li>
<li><strong>Ignoring E-E-A-T Signals:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness matter more than ever</li>
</ul>`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      category: "SEO",
      date: "March 15, 2024",
      readTime: "8 min read",
      metaDescription: "Fix these 10 critical SEO mistakes killing your website traffic. Expert tips for better Google rankings and increased organic traffic in 2024.",
      keywords: "SEO mistakes, website traffic, Google ranking, SEO optimization, search engine optimization"
    },
    {
      title: "How to Create High-Converting Facebook Ads in 2024: Complete Guide",
      excerpt: "Master Facebook advertising with our step-by-step guide to creating ads that convert visitors into customers and maximize your ad spend ROI.",
      fullContent: `Facebook advertising remains one of the most effective ways to reach your target audience and drive conversions in 2024.

Creating high-converting Facebook ads starts with understanding your audience's demographics, interests, and behaviors. Use Facebook's detailed targeting options to reach users most likely to convert.

<h2>Advanced Facebook Ad Strategies for 2024:</h2>
<ul>
<li><strong>Video-First Approach:</strong> Video ads generate 3x more engagement than static images</li>
<li><strong>Utilize AI-Powered Optimization:</strong> Let Facebook's algorithm optimize for conversions automatically</li>
<li><strong>Implement Retargeting Sequences:</strong> Create custom audiences based on user behavior</li>
<li><strong>Test Advantage+ Campaigns:</strong> Automated ad placement and optimization</li>
<li><strong>Focus on Value Proposition:</strong> Clear benefits in the first 3 seconds of video ads</li>
</ul>`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "PPC",
      date: "March 12, 2024",
      readTime: "6 min read",
      metaDescription: "Learn to create high-converting Facebook ads that drive results. Complete 2024 guide with advanced targeting strategies and optimization techniques.",
      keywords: "Facebook ads, PPC advertising, social media ads, conversion optimization, Facebook marketing"
    },
    {
      title: "The Rise of AI in Digital Marketing: What You Need to Know in 2024",
      excerpt: "AI is transforming marketing by automating tasks, personalizing experiences, and providing smarter insights. Learn how to integrate it into your strategy.",
      fullContent: `AI-powered tools are now essential in marketing. From content creation to predictive analytics, AI helps marketers save time and improve targeting accuracy.

Businesses using AI see better engagement, more precise customer journeys, and stronger ROI from campaigns.

<h2>AI Marketing Applications You Should Implement:</h2>
<ul>
<li><strong>Predictive Analytics:</strong> Forecast customer behavior and campaign performance</li>
<li><strong>Chatbots and Conversational AI:</strong> 24/7 customer service and lead qualification</li>
<li><strong>Content Generation and Optimization:</strong> AI-assisted writing and SEO optimization</li>
<li><strong>Personalization at Scale:</strong> Dynamic content and product recommendations</li>
<li><strong>Programmatic Advertising:</strong> AI-optimized ad bidding and placement</li>
</ul>`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      category: "AI",
      date: "March 5, 2024",
      readTime: "7 min read",
      metaDescription: "Discover how AI is revolutionizing digital marketing in 2024. Learn practical AI applications and implementation strategies for better marketing results.",
      keywords: "AI marketing, artificial intelligence, marketing automation, predictive analytics, AI tools"
    },
    // ... Add similar enhancements to other blog posts
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Digital Marketing Blog - Expert Tips, Strategies & Insights 2024</title>
        <meta 
          name="description" 
          content="Get the latest digital marketing insights, SEO strategies, social media tips, and PPC guides from industry experts. Stay ahead with proven marketing techniques." 
        />
        <meta 
          name="keywords" 
          content="digital marketing blog, SEO tips, social media marketing, PPC strategies, content marketing, email marketing, AI marketing, local SEO, ecommerce SEO" 
        />
        <meta property="og:title" content="Digital Marketing Blog - Expert Strategies & Insights 2024" />
        <meta property="og:description" content="Latest digital marketing tips, SEO strategies, and growth hacking techniques from industry experts." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourwebsite.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Expert Digital Marketing Insights
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Digital Marketing Tips & 
              <span className="text-accent block mt-2">Strategies That Work</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the competition with proven strategies, case studies, and actionable insights from successful digital marketing campaigns.
            </h2>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="sr-only">Latest Digital Marketing Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => {
                const isExpanded = expandedPosts.includes(index);
                return (
                  <Card key={index} className="card-hover bg-gradient-card border-0 shadow-lg overflow-hidden">
                    <Helmet>
                      {/* Individual post meta tags for better SEO */}
                      <meta property="og:title" content={post.title} />
                      <meta property="og:description" content={post.excerpt} />
                      <meta property="og:image" content={post.image} />
                    </Helmet>
                    
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-primary text-primary-foreground"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground">
                        <h3>{post.title}</h3>
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
                      <p className="text-muted-foreground">{post.excerpt}</p>
                      
                      {isExpanded && (
                        <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                          <div 
                            className="prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.fullContent }}
                          />
                          <ContactPopup 
                            trigger={
                              <Button size="sm" className="group">
                                Get Expert Help
                                <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                              </Button>
                            }
                            title={`Get Expert Help with ${post.category}`}
                            description={`Ready to implement these ${post.category.toLowerCase()} strategies? Let's discuss your specific needs.`}
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Expert</span>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="group"
                          onClick={() => toggleExpanded(index)}
                        >
                          {isExpanded ? (
                            <>
                              Show Less
                              <ChevronUp className="ml-2 w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Read More
                              <ChevronDown className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional SEO Content Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Read Our Digital Marketing Blog?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Expert-Backed Strategies</h3>
                <p className="text-muted-foreground">
                  All our content is created by industry experts with proven track records in digital marketing success.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Actionable Insights</h3>
                <p className="text-muted-foreground">
                  Get step-by-step guides and practical tips you can implement immediately for better results.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Latest Trends</h3>
                <p className="text-muted-foreground">
                  Stay updated with the rapidly changing digital landscape and algorithm updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Implement These Strategies?"
        description="Get personalized help implementing these digital marketing strategies for your business."
        primaryButtonText="Get Free Strategy Session"
        secondaryButtonText="Download Free Guide"
        variant="primary"
      />
    </div>
  );
};

export default Blog;