import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import { Calendar, Clock, ChevronDown, ChevronUp, User, ArrowRight, TrendingUp } from "lucide-react";

const SocialMediaPage = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const toggleExpanded = (index: number) => setExpandedPosts(prev => prev.includes(index) ? prev.filter(i=>i!==index) : [...prev,index]);

  // Main Page SEO Meta Data
  const pageMeta = {
    title: "Social Media Marketing Agency | 250% Engagement Increase 2025 | #1 Google Ranking",
    description: "Expert social media marketing services: content strategy, community management, paid advertising. 250% engagement increase, 4.9B+ users reached. Free audit available.",
    keywords: "social media marketing, social media management, content strategy, community management, social media advertising, Instagram marketing, Facebook marketing, TikTok marketing, LinkedIn marketing",
    canonical: "https://youragency.com/social-media-marketing"
  };

  // SEO-optimized blog posts based on most searched topics
  const blogPosts = [
    {
      title: "Social Media Algorithm Changes 2025: What You Need to Know",
      excerpt: "Latest updates to Facebook, Instagram, TikTok, and LinkedIn algorithms and how to adapt your strategy.",
      fullContent: `Social media platforms constantly update their algorithms to improve user experience. In 2025, we're seeing a major shift towards authentic content and meaningful interactions. 

**Key Algorithm Changes:**
- **Instagram**: Prioritizing Reels and Stories over static posts
- **Facebook**: Emphasizing groups and community content
- **TikTok**: Rewarding educational and value-driven content
- **LinkedIn**: Favoring professional insights and industry expertise

**Adaptation Strategies:**
- Create video-first content for better reach
- Engage authentically with your audience
- Post consistently during peak hours
- Use relevant hashtags and keywords`,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop&auto=format",
      category: "Algorithm Updates",
      date: "January 15, 2025",
      readTime: "8 min read",
      meta: {
        title: "Social Media Algorithm Changes 2025 | Instagram, TikTok, Facebook Updates",
        description: "2025 social media algorithm changes: Instagram prioritizes Reels, Facebook emphasizes groups, TikTok rewards educational content, LinkedIn favors professional insights.",
        keywords: "social media algorithm, Instagram algorithm, TikTok algorithm, Facebook updates, LinkedIn algorithm, algorithm changes 2025"
      }
    },
    {
      title: "How to Create Viral Content on TikTok and Instagram Reels",
      excerpt: "Proven strategies to increase visibility and engagement on short-form video platforms.",
      fullContent: `Creating viral content requires understanding platform-specific trends and audience psychology.

**TikTok Success Formula:**
- Start with a strong hook in the first 3 seconds
- Use trending sounds and effects
- Create educational or entertaining content
- Encourage user interaction through duets and stitches

**Instagram Reels Strategy:**
- Leverage Instagram's algorithm favoring Reels
- Use vertical video format (9:16 aspect ratio)
- Add captions for sound-off viewing
- Post during high-engagement hours (7-9 PM local time)

**Content Ideas That Go Viral:**
- Behind-the-scenes content
- Tutorials and how-to guides
- Trend participation with unique twists
- User-generated content campaigns`,
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=600&h=300&fit=crop&auto=format",
      category: "Content Strategy",
      date: "January 12, 2025",
      readTime: "10 min read",
      meta: {
        title: "Viral Content Creation 2025 | TikTok & Instagram Reels Strategy | Engagement Boost",
        description: "Create viral content on TikTok and Instagram Reels: strong hooks, trending sounds, educational content, user interaction strategies for maximum engagement.",
        keywords: "viral content, TikTok strategy, Instagram Reels, short-form video, content creation, social media engagement"
      }
    },
    {
      title: "Social Media Advertising Costs 2025: Complete Budget Guide",
      excerpt: "Understand CPC, CPM, and ROI across different platforms to maximize your advertising budget.",
      fullContent: `Social media advertising costs vary significantly by platform, audience, and objective.

**Platform Cost Comparison:**
- **Facebook**: Average CPC $0.97, CPM $7.19
- **Instagram**: Average CPC $1.23, CPM $8.96
- **LinkedIn**: Average CPC $5.26, CPM $15.50
- **TikTok**: Average CPC $1.00, CPM $10.00
- **Twitter**: Average CPC $0.38, CPM $6.46

**Budget Optimization Strategies:**
- Start with small test budgets ($10-20 daily)
- Use A/B testing for ad creatives
- Target lookalike audiences for better results
- Retarget website visitors for higher conversion rates

**ROI Measurement:**
- Track conversion rates across platforms
- Use UTM parameters for accurate tracking
- Calculate customer lifetime value (LTV)
- Monitor cost per acquisition (CPA) goals`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format",
      category: "Advertising",
      date: "January 8, 2025",
      readTime: "12 min read",
      meta: {
        title: "Social Media Advertising Costs 2025 | CPC, CPM, ROI Guide | Budget Optimization",
        description: "Social media advertising costs 2025: Facebook CPC $0.97, Instagram $1.23, LinkedIn $5.26. Budget optimization strategies and ROI measurement guide.",
        keywords: "social media advertising, ad costs, CPC, CPM, ROI, budget optimization, Facebook ads, Instagram ads"
      }
    },
    {
      title: "Best Time to Post on Social Media in 2025 [Data-Backed]",
      excerpt: "Optimal posting schedules for each platform based on latest engagement data and analytics.",
      fullContent: `Posting at the right time can significantly increase your content's reach and engagement.

**General Best Times Across Platforms:**
- **Weekdays**: 9 AM - 12 PM
- **Evenings**: 7 PM - 9 PM
- **Weekends**: 10 AM - 2 PM

**Platform-Specific Optimal Times:**

**Facebook:**
- Best: Wednesday 11 AM, Thursday 10 AM
- Worst: Saturday before 7 AM

**Instagram:**
- Best: Tuesday 11 AM, Wednesday 10 AM
- Ideal for Reels: Evening hours

**LinkedIn:**
- Best: Tuesday 10 AM, Wednesday 9 AM
- Professional hours: 8 AM - 5 PM weekdays

**TikTok:**
- Best: Tuesday 2 PM, Thursday 4 PM
- Evenings and weekends perform well

**Tools for Scheduling:**
- Buffer for multi-platform management
- Hootsuite for advanced analytics
- Later for visual content planning`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&auto=format",
      category: "Scheduling",
      date: "January 5, 2025",
      readTime: "7 min read",
      meta: {
        title: "Best Time to Post on Social Media 2025 | Platform-Specific Scheduling Guide",
        description: "Optimal social media posting times 2025: Facebook Wednesday 11AM, Instagram Tuesday 11AM, LinkedIn Tuesday 10AM, TikTok Tuesday 2PM for maximum engagement.",
        keywords: "best time to post, social media scheduling, posting times, engagement optimization, content timing"
      }
    },
    {
      title: "How to Measure Social Media ROI: Key Metrics That Matter",
      excerpt: "Learn which metrics actually impact your business and how to track them effectively.",
      fullContent: `Measuring social media ROI goes beyond likes and follows. Focus on metrics that drive business results.

**Essential Metrics to Track:**

**Engagement Metrics:**
- Engagement rate (likes, comments, shares)
- Click-through rate (CTR)
- Social share of voice

**Conversion Metrics:**
- Conversion rate from social traffic
- Cost per conversion
- Return on ad spend (ROAS)

**Awareness Metrics:**
- Reach and impressions
- Follower growth rate
- Brand mentions and sentiment

**Tools for Measurement:**
- Google Analytics for website conversions
- Platform-native insights for engagement
- Social listening tools for brand mentions
- CRM integration for lead tracking

**Calculating Actual ROI:**
ROI = (Revenue from Social Media - Investment) / Investment × 100

Track attributed revenue through UTM parameters and conversion tracking.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format",
      category: "Analytics",
      date: "January 3, 2025",
      readTime: "9 min read",
      meta: {
        title: "Social Media ROI Measurement 2025 | Key Metrics & Analytics Guide | Performance Tracking",
        description: "Measure social media ROI: track engagement rate, conversion rate, reach, impressions, follower growth. Use Google Analytics and platform insights for accurate measurement.",
        keywords: "social media ROI, metrics tracking, analytics, performance measurement, engagement rate, conversion tracking"
      }
    },
    {
      title: "Social Media Content Calendar Template 2025 [Free Download]",
      excerpt: "Comprehensive content planning system with templates for all major platforms.",
      fullContent: `A well-planned content calendar is essential for consistent social media success.

**Monthly Content Planning Structure:**

**Weekly Content Themes:**
- Monday: Educational content
- Tuesday: Behind-the-scenes
- Wednesday: User-generated features
- Thursday: Industry news
- Friday: Fun/entertaining content
- Weekend: Community engagement

**Content Mix Recommendations:**
- 50% Educational/Value-driven
- 30% Engaging/Interactive
- 20% Promotional/Sales

**Platform-Specific Content Types:**
- **Instagram**: Reels, Stories, Carousels
- **Facebook**: Videos, Links, Polls
- **LinkedIn**: Articles, Professional insights
- **TikTok**: Trending sounds, Challenges

**Free Template Includes:**
- Monthly planning calendar
- Content idea bank
- Hashtag strategy guide
- Performance tracking sheet

Download our free template to get started with organized content planning.`,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=300&fit=crop&auto=format",
      category: "Content Planning",
      date: "December 28, 2024",
      readTime: "6 min read",
      meta: {
        title: "Social Media Content Calendar 2025 | Free Template Download | Planning Strategy",
        description: "Social media content calendar template 2025: weekly themes, content mix recommendations, platform-specific strategies, and performance tracking included.",
        keywords: "social media calendar, content planning, content strategy, social media template, content scheduling"
      }
    }
  ];

  // Expanded FAQs based on most searched questions
  const faqs = [
    {
      question: "How often should I post on social media for maximum engagement?",
      answer: "Ideal posting frequency varies by platform: Instagram 3-5 times/week, Facebook 1-2 times/day, LinkedIn 1-5 times/week, TikTok 3-7 times/week. Focus on quality over quantity and maintain consistency. Studies show brands that post consistently see 250% higher engagement rates and 3x faster follower growth compared to irregular posting schedules.",
      meta: {
        title: "Social Media Posting Frequency 2025 | Optimal Schedule for Maximum Engagement",
        description: "Optimal social media posting frequency: Instagram 3-5x/week, Facebook 1-2x/day, LinkedIn 1-5x/week, TikTok 3-7x/week. Consistent posting increases engagement by 250%.",
        keywords: "posting frequency, social media schedule, content frequency, engagement optimization, posting consistency"
      }
    },
    {
      question: "What's the difference between organic and paid social media marketing?",
      answer: "Organic marketing is free content you post to engage followers naturally, while paid marketing involves spending on ads to reach larger, targeted audiences. A successful strategy uses both: organic for community building and paid for rapid growth and conversions. Organic reach averages 5-10% of your followers, while paid campaigns can reach millions of targeted users with precise demographic and interest targeting.",
      meta: {
        title: "Organic vs Paid Social Media Marketing | Strategy Differences & ROI Comparison",
        description: "Organic social media: free content for community building (5-10% reach). Paid social: targeted ads for rapid growth and conversions. Combined strategy delivers best results.",
        keywords: "organic social media, paid social media, social media advertising, ROI comparison, marketing strategy"
      }
    },
    {
      question: "Which social media platform is best for my business?",
      answer: "B2B businesses excel on LinkedIn and Twitter, B2C retail thrives on Instagram and TikTok, Facebook works for broad demographics, Pinterest for visual products, and YouTube for educational content. Consider your target audience's age, interests, and behavior. 89% of B2B marketers use LinkedIn for lead generation, while 90% of Instagram users follow business accounts, making it ideal for B2C engagement and sales.",
      meta: {
        title: "Best Social Media Platform for Business 2025 | B2B vs B2C Platform Selection",
        description: "Best social media platforms: B2B - LinkedIn (89% use for leads), B2C - Instagram (90% follow businesses), Facebook for broad reach, TikTok for younger audiences.",
        keywords: "social media platforms, platform selection, B2B social media, B2C social media, LinkedIn marketing, Instagram marketing"
      }
    },
    {
      question: "How much should I budget for social media marketing?",
      answer: "Small businesses typically allocate 5-15% of marketing budget to social media. For startups, $500-2000/month for ads plus content creation costs. Enterprise companies may spend $10,000+/month. Start small, test, and scale based on ROI. The average ROI for social media marketing is 250%, with well-optimized campaigns achieving 400-500% returns through targeted advertising and conversion optimization.",
      meta: {
        title: "Social Media Marketing Budget 2025 | Small Business to Enterprise Cost Guide",
        description: "Social media marketing budget: small businesses 5-15% of marketing budget, startups $500-2000/month, enterprise $10,000+/month. Average ROI 250%, optimized campaigns 400-500%.",
        keywords: "social media budget, marketing costs, ROI calculation, budget allocation, advertising spend"
      }
    },
    {
      question: "What are the most important social media metrics to track?",
      answer: "Focus on engagement rate, click-through rate, conversion rate, reach, impressions, follower growth, and ROI. Avoid vanity metrics like likes alone. Track metrics that directly impact business goals such as leads generated and sales conversions. Top-performing brands monitor 15+ KPIs including sentiment analysis, share of voice, and customer lifetime value from social channels.",
      meta: {
        title: "Social Media Metrics 2025 | Key Performance Indicators & KPI Tracking Guide",
        description: "Essential social media metrics: engagement rate, CTR, conversion rate, reach, impressions, follower growth, ROI. Track 15+ KPIs for comprehensive performance analysis.",
        keywords: "social media metrics, KPI tracking, performance indicators, engagement rate, conversion tracking, analytics"
      }
    },
    {
      question: "How can I increase my Instagram followers organically?",
      answer: "Post consistently high-quality content, use relevant hashtags (5-10 per post), engage with your audience daily, collaborate with influencers in your niche, run contests, use Instagram Stories and Reels, and cross-promote on other platforms. Brands that use Instagram Reels see 30% higher reach and 50% more engagement compared to static posts. Daily engagement with followers increases follower growth by 200%.",
      meta: {
        title: "Increase Instagram Followers Organically 2025 | Growth Strategies & Engagement Tips",
        description: "Increase Instagram followers organically: consistent posting, relevant hashtags, daily engagement, influencer collaborations, Reels (30% higher reach), contests, cross-promotion.",
        keywords: "Instagram growth, organic followers, engagement strategies, Instagram Reels, hashtag strategy, influencer collaborations"
      }
    },
    {
      question: "What content performs best on Facebook in 2025?",
      answer: "Video content (especially live videos), engaging Stories, community-focused posts in Groups, educational content, and interactive posts like polls and questions. Native videos outperform shared YouTube links by 3x in reach. Facebook Live videos generate 6x more interactions than regular videos, and Group content sees 2x higher engagement compared to Page posts. Carousel posts with 5-7 images achieve 3x higher click-through rates.",
      meta: {
        title: "Best Facebook Content 2025 | Video, Live, Groups | Engagement Optimization",
        description: "Best Facebook content 2025: video (3x higher reach), Live videos (6x more interactions), Group content (2x higher engagement), carousels (3x higher CTR), interactive posts.",
        keywords: "Facebook content, video marketing, Facebook Live, Group engagement, content strategy, engagement optimization"
      }
    },
    {
      question: "How do I create an effective social media strategy?",
      answer: "Start with SMART goals, define your target audience, conduct competitor analysis, choose appropriate platforms, create content calendar, establish brand voice, allocate budget, implement tracking, and regularly analyze and adjust based on performance data. Successful strategies include 70% value-driven content, 20% engagement content, and 10% promotional content. Brands with documented strategies are 3x more likely to achieve their marketing goals.",
      meta: {
        title: "Social Media Strategy 2025 | Complete Planning Guide & Implementation Framework",
        description: "Effective social media strategy: SMART goals, audience definition, competitor analysis, platform selection, content calendar, brand voice, budget allocation, performance tracking.",
        keywords: "social media strategy, marketing plan, content strategy, audience targeting, performance tracking, implementation framework"
      }
    },
    {
      question: "What are the latest social media trends for 2025?",
      answer: "AI-generated content, augmented reality filters, social commerce expansion, audio content (podcasts, audio rooms), micro-influencer collaborations, sustainability-focused branding, and personalized customer experiences through chatbots. 75% of consumers now expect personalized experiences, and brands using AI for content creation see 40% higher engagement rates. Social commerce is projected to reach $2.9 trillion by 2026, making buyable posts essential for e-commerce brands.",
      meta: {
        title: "Social Media Trends 2025 | AI, AR, Social Commerce | Future Marketing Strategies",
        description: "2025 social media trends: AI-generated content (40% higher engagement), AR filters, social commerce ($2.9T by 2026), audio content, micro-influencers, personalized experiences.",
        keywords: "social media trends, AI content, augmented reality, social commerce, audio content, micro-influencers"
      }
    },
    {
      question: "How can I measure social media ROI effectively?",
      answer: "Track conversions using UTM parameters, calculate customer acquisition cost, measure lifetime value of social media customers, use analytics tools, attribute sales to social campaigns, and compare revenue generated against advertising spend and labor costs. Advanced ROI measurement includes multi-touch attribution, brand lift studies, and sentiment analysis. Companies using comprehensive ROI tracking see 30% higher marketing efficiency and 25% better budget allocation decisions.",
      meta: {
        title: "Social Media ROI Measurement 2025 | Advanced Tracking & Attribution Models",
        description: "Measure social media ROI: UTM tracking, CAC calculation, LTV measurement, multi-touch attribution, brand lift studies. Comprehensive tracking increases marketing efficiency by 30%.",
        keywords: "social media ROI, ROI measurement, attribution models, conversion tracking, performance analytics, marketing efficiency"
      }
    },
    {
      question: "What's the optimal length for social media videos?",
      answer: "TikTok/Reels: 15-30 seconds, Instagram Stories: 15 seconds per clip, YouTube Shorts: under 60 seconds, Facebook/Instagram Feed: 30-90 seconds, LinkedIn: 30 seconds to 3 minutes. Hook viewers in the first 3 seconds for best retention. Videos under 60 seconds retain 80% of viewers, while videos over 2 minutes see 50% drop-off. Educational content can perform well at longer lengths (3-5 minutes) if value is delivered quickly.",
      meta: {
        title: "Social Media Video Length 2025 | Platform-Specific Duration Guide | Retention Optimization",
        description: "Optimal social media video length: TikTok/Reels 15-30s, Stories 15s, YouTube Shorts under 60s, Feed 30-90s, LinkedIn 30s-3min. Hook viewers in first 3 seconds for 80% retention.",
        keywords: "video length, social media video, retention optimization, platform guidelines, video strategy, engagement duration"
      }
    },
    {
      question: "How do I handle negative comments on social media?",
      answer: "Respond professionally within 24 hours, address concerns publicly but take complex issues private, never delete legitimate criticism, have a crisis management plan, train your team on response protocols, and use negative feedback to improve your business. 70% of consumers expect responses within an hour on social media. Brands that handle negative feedback well see 25% higher customer loyalty and can convert 30% of complainers into brand advocates through effective resolution.",
      meta: {
        title: "Handling Negative Social Media Comments 2025 | Crisis Management & Response Strategy",
        description: "Handle negative social media comments: respond within 24 hours (70% expect 1-hour response), address publicly/take private, never delete criticism, crisis management plan, team training.",
        keywords: "negative comments, crisis management, social media response, customer service, reputation management, brand advocacy"
      }
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
            "@type": "Service",
            "name": "Social Media Marketing Agency",
            "description": pageMeta.description,
            "url": pageMeta.canonical,
            "areaServed": "Worldwide",
            "serviceType": "Social Media Marketing",
            "offers": {
              "@type": "Offer",
              "description": "Social Media Marketing Services"
            }
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32 text-center max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 inline-flex items-center mb-4">
          <TrendingUp className="w-4 h-4 mr-2" /> Social Media Marketing
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Grow Your Brand & Engage Your Audience on Social Media</h1>
        <p className="text-xl md:text-2xl text-white/90 mt-4 leading-relaxed">Our social media marketing strategies build brand awareness, drive engagement, and generate leads across multiple platforms.</p>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Social Media Services</h2>
            <ul className="space-y-4 list-disc pl-5 text-muted-foreground">
              <li><strong>Content Creation:</strong> Engaging posts, reels, and graphics tailored to your brand.</li>
              <li><strong>Community Management:</strong> Build and nurture a loyal online audience.</li>
              <li><strong>Paid Social Ads:</strong> Targeted campaigns to increase conversions and ROI.</li>
              <li><strong>Influencer Outreach:</strong> Collaborate with relevant influencers for maximum impact.</li>
              <li><strong>Social Media Analytics:</strong> Track performance and optimize your strategy with data-driven insights.</li>
              <li><strong>Content Strategy:</strong> Comprehensive planning and calendar management.</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?w=600&h=400&fit=crop&auto=format" 
              alt="Social Media Marketing" 
              className="rounded-lg shadow-lg w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Blog Section with Individual SEO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Social Media Marketing Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post,index)=>{
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
                  
                  <Card className="bg-gradient-card border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        loading="lazy"
                      />
                      <Badge variant="secondary" className="absolute top-4 left-4 bg-primary text-primary-foreground">{post.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-foreground line-clamp-2">{post.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
                        <div className="flex items-center space-x-1"><Clock className="w-4 h-4"/><span>{post.readTime}</span></div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
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
                                "name": "Social Media Marketing Agency"
                              },
                              "publisher": {
                                "@type": "Organization",
                                "name": "Social Media Marketing Agency"
                              }
                            })}
                          </script>
                          
                          <ContactPopup 
                            trigger={
                              <Button size="sm" className="group w-full">
                                Get Expert Help
                                <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/>
                              </Button>
                            } 
                            title={`Get Expert Help with ${post.category}`} 
                            description={`Let's discuss your social media strategy.`}
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground"/>
                          <span className="text-sm text-muted-foreground">Expert</span>
                        </div>
                        <Button variant="outline" size="sm" onClick={()=>toggleExpanded(index)}>
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

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Social Media Marketing Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg bg-gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">4.9B+</div>
              <p className="text-muted-foreground">Social media users worldwide</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg bg-gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">73%</div>
              <p className="text-muted-foreground">Marketers say social media is effective</p>
            </Card>
            <Card className="text-center p-6 border-0 shadow-lg bg-gradient-card">
              <div className="text-4xl font-bold text-primary mb-2">54%</div>
              <p className="text-muted-foreground">Consumers research brands on social media</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section with Individual SEO */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions About Social Media Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq,index)=>(
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
                  <h3 className="font-semibold text-foreground mb-3 text-lg">{faq.question}</h3>
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
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Dominate Social Media in 2025?" 
        description="Get ahead of algorithm changes and maximize your social media ROI with our expert strategies." 
        primaryButtonText="Get Free Social Media Audit" 
        secondaryButtonText="Download Content Calendar Template" 
        variant="primary"
      />
    </div>
  )
};

export default SocialMediaPage;