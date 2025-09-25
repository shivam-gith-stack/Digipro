import { useState } from "react";
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
      title: "10 SEO Mistakes That Are Killing Your Website Traffic",
      excerpt: "Discover the most common SEO mistakes that prevent websites from ranking on Google and learn how to fix them for immediate traffic improvements.",
      fullContent: `Search engine optimization is crucial for online visibility, but many businesses unknowingly make critical SEO mistakes that severely impact their organic traffic and search rankings.

The most devastating SEO mistake is keyword stuffing - cramming too many keywords into your content unnaturally. This hurts user experience and can trigger Google penalties. Instead, focus on natural keyword integration.

Another major SEO mistake is neglecting page loading speed. Google considers site speed a crucial ranking factor, and slow-loading pages result in higher bounce rates and lower rankings.`,
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
      category: "SEO",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "How to Create High-Converting Facebook Ads in 2024",
      excerpt: "Master Facebook advertising with our step-by-step guide to creating ads that convert visitors into customers and maximize your ad spend ROI.",
      fullContent: `Facebook advertising remains one of the most effective ways to reach your target audience and drive conversions.

Creating high-converting Facebook ads starts with understanding your audience's demographics, interests, and behaviors. Use Facebook's detailed targeting options to reach users most likely to convert.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "PPC",
      date: "March 12, 2024",
      readTime: "6 min read"
    },
    {
      title: "The Rise of AI in Digital Marketing: What You Need to Know",
      excerpt: "AI is transforming marketing by automating tasks, personalizing experiences, and providing smarter insights. Learn how to integrate it into your strategy.",
      fullContent: `AI-powered tools are now essential in marketing. From content creation to predictive analytics, AI helps marketers save time and improve targeting accuracy.

Businesses using AI see better engagement, more precise customer journeys, and stronger ROI from campaigns.`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      category: "AI",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
    {
      title: "Top Social Media Marketing Trends in 2024",
      excerpt: "Social platforms evolve quickly. Stay ahead with the latest trends driving engagement and brand growth this year.",
      fullContent: `Short-form video dominates platforms like TikTok, Instagram Reels, and YouTube Shorts. Brands embracing authentic, quick content are seeing massive engagement.

Another trend is social commerce. More consumers are buying directly through Instagram, Facebook Shops, and TikTok integrations.`,
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&h=400&fit=crop",
      category: "Social Media",
      date: "March 1, 2024",
      readTime: "5 min read"
    },
    {
      title: "Content Marketing Strategies That Still Work in 2024",
      excerpt: "Content remains king—but the strategies have evolved. See what still works and what no longer delivers results.",
      fullContent: `Long-form, high-quality content continues to dominate search results. Google favors well-structured, authoritative content that answers user intent fully.

Interactive content like quizzes, polls, and infographics also drive higher engagement compared to static blog posts.`,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop",
      category: "Content Marketing",
      date: "Feb 26, 2024",
      readTime: "9 min read"
    },
    {
      title: "Local SEO Tips to Dominate Your City in 2024",
      excerpt: "Local search is critical for small businesses. Learn how to optimize your website and Google Business Profile to get found by local customers.",
      fullContent: `Claiming and optimizing your Google Business Profile is the most important local SEO step. Add photos, respond to reviews, and update your business info.

Additionally, building citations on trusted directories and earning local backlinks strengthens your visibility.`,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=400&fit=crop",
      category: "Local SEO",
      date: "Feb 20, 2024",
      readTime: "6 min read"
    },
    {
      title: "Email Marketing: The Most Underrated Growth Channel",
      excerpt: "Email delivers one of the highest ROIs in digital marketing. Discover strategies to improve open rates, click-throughs, and conversions.",
      fullContent: `Segmentation is key to successful email campaigns. By sending targeted messages based on customer behavior, you can drastically improve engagement.

Automation workflows like welcome sequences and abandoned cart reminders continue to deliver excellent results.`,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=400&fit=crop",
      category: "Email Marketing",
      date: "Feb 12, 2024",
      readTime: "7 min read"
    },
    {
      title: "E-commerce SEO Strategies to Boost Sales",
      excerpt: "Your online store needs more than great products—it needs visibility. Learn how to optimize your e-commerce site for Google rankings.",
      fullContent: `Optimizing product pages with detailed descriptions, reviews, and high-quality images improves both SEO and conversion rates.

Technical SEO—like improving crawlability, fixing duplicate content, and ensuring fast site speed—is equally important for online stores.`,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
      category: "E-commerce",
      date: "Feb 5, 2024",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="overflow-hidden">
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

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the competition with proven strategies, case studies, and actionable insights from successful digital marketing campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => {
                const isExpanded = expandedPosts.includes(index);
                return (
                  <Card key={index} className="card-hover bg-gradient-card border-0 shadow-lg overflow-hidden">
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
                      <CardTitle className="text-xl text-foreground">{post.title}</CardTitle>
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
                          <div className="prose prose-sm max-w-none">
                            {post.fullContent.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                                {paragraph.trim()}
                              </p>
                            ))}
                          </div>
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
