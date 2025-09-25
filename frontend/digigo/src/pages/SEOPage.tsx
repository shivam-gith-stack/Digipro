import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import {useNavigate} from "react-router-dom"
import { 
  Calendar, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  User, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle, 
  Search, 
  BarChart, 
  Target, 
  Zap, 
  Globe, 
  Smartphone,
  ShoppingCart 
} from "lucide-react";
import { Link } from "react-router-dom";

const SEOPage = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const navigate = useNavigate()
  
  const toggleExpanded = (index: number) => {
    setExpandedPosts(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  // Optimized SEO-related images with fast loading
  const blogPosts = [
    {
      title: "Top 10 Local SEO Strategies to Rank #1 in Google Maps",
      excerpt: "Learn how to optimize your business for local searches and dominate Google Maps with these proven strategies.",
      fullContent: `Local SEO is crucial for small and medium businesses targeting nearby customers. Implementing correct Google My Business practices, consistent NAP citations, and location-specific content can skyrocket your local visibility. Optimizing reviews and leveraging geo-targeted keywords ensures your business ranks top for relevant searches in your area.

Start by claiming your Google Business Profile, verify your location, and fill out all information. Next, create localized content on your website and acquire backlinks from trusted local directories. Monitor rankings regularly and adapt strategies based on insights for maximum results.`,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Local SEO",
      date: "September 15, 2025",
      readTime: "7 min read"
    },
    {
      title: "How to Do Effective Keyword Research for SEO in 2025",
      excerpt: "Keyword research is the foundation of SEO. Discover how to identify high-value keywords to boost organic traffic.",
      fullContent: `Effective keyword research is the backbone of any SEO strategy. Start by identifying your target audience and the search terms they use. Use tools like Google Keyword Planner, Ahrefs, or SEMrush to find high-traffic, low-competition keywords. Focus on long-tail keywords that capture user intent.

Once keywords are identified, map them to your website pages and optimize content naturally. Monitor keyword performance regularly and refine strategies based on search trends. Combining keyword research with competitor analysis can give your website a competitive edge.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Keyword Research",
      date: "September 10, 2025",
      readTime: "8 min read"
    },
    {
      title: "Technical SEO Checklist: 15 Factors That Impact Your Rankings",
      excerpt: "Ensure your website meets all technical requirements for optimal search engine performance.",
      fullContent: `Technical SEO forms the foundation of your website's relationship with search engines. Key factors include website speed optimization, mobile responsiveness, secure HTTPS connections, clean URL structures, and proper schema markup implementation. Regularly audit your site for crawl errors, broken links, and indexing issues.

Implementing a solid technical SEO strategy ensures search engines can properly crawl, index, and understand your content. This directly impacts your visibility and rankings in search results. Focus on core web vitals, XML sitemaps, and robots.txt optimization for best results.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Technical SEO",
      date: "September 5, 2025",
      readTime: "10 min read"
    },
    {
      title: "Content Marketing & SEO: How to Create Rank-Worthy Content",
      excerpt: "Learn the art of creating content that both ranks well and converts visitors into customers.",
      fullContent: `Content marketing and SEO go hand in hand. The key is creating high-quality, relevant content that addresses user intent while incorporating strategic keywords naturally. Focus on comprehensive content that thoroughly covers topics, answers questions, and provides unique value beyond what competitors offer.

Develop a content calendar aligned with your target keywords and audience needs. Incorporate various content formats like blog posts, videos, infographics, and case studies. Remember that quality trumps quantity - one excellent piece of content can outperform dozens of mediocre ones.`,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Content Strategy",
      date: "August 28, 2025",
      readTime: "9 min read"
    },
    {
      title: "Mobile-First Indexing: Optimizing for Google's Mobile Priority",
      excerpt: "With mobile-first indexing, learn how to ensure your mobile experience drives rankings.",
      fullContent: `Google's mobile-first indexing means the mobile version of your site becomes the primary version for ranking purposes. Ensure your mobile site contains the same content as desktop, has fast loading speeds, and provides excellent user experience. Implement responsive design, optimize touch elements, and minimize intrusive interstitials.

Test your mobile site regularly using Google's Mobile-Friendly Test tool. Focus on core web vitals specifically for mobile users, as these significantly impact rankings. Remember that a poor mobile experience can negatively affect your desktop rankings as well.`,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Mobile SEO",
      date: "August 22, 2025",
      readTime: "6 min read"
    },
    {
      title: "Backlink Building Strategies That Actually Work in 2025",
      excerpt: "Discover ethical and effective ways to build high-quality backlinks that boost domain authority.",
      fullContent: `Quality backlinks remain one of Google's most important ranking factors. Focus on earning links through creating exceptional content, digital PR, guest posting on authoritative sites, and building relationships with influencers in your industry. Avoid black-hat techniques like buying links or participating in link schemes.

Prioritize relevance and authority over quantity. A single link from a highly authoritative site in your niche is more valuable than dozens of low-quality links. Use tools to analyze your backlink profile regularly and disavow toxic links that could harm your rankings.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400&q=80",
      category: "Link Building",
      date: "August 15, 2025",
      readTime: "11 min read"
    }
  ];

  const faqs = [
    {
      question: "What is Local SEO and why is it important?",
      answer: "Local SEO focuses on optimizing your online presence to attract more business from relevant local searches. It's crucial for businesses targeting customers in a specific geographic area, as it helps you appear in Google Maps, local search results, and improves visibility against competitors."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. Typically, businesses can start seeing measurable results within 3-6 months, but the timeline varies based on competition, current website health, and consistency in content creation and backlink building."
    },
    {
      question: "Can SEO guarantee a #1 Google ranking?",
      answer: "No reputable SEO agency can guarantee #1 ranking, as search engines use complex algorithms. However, effective SEO strategies can significantly improve your rankings, increase organic traffic, and enhance online visibility."
    },
    {
      question: "What's the difference between on-page and off-page SEO?",
      answer: "On-page SEO refers to optimization elements on your website (content, HTML tags, internal linking). Off-page SEO involves activities outside your website (backlinks, social signals, citations). Both are essential for comprehensive SEO success."
    },
    {
      question: "How often should I publish new content for SEO?",
      answer: "Consistency matters more than frequency. It's better to publish one high-quality, comprehensive piece per week than multiple low-quality articles. Focus on content depth, relevance, and value rather than arbitrary publishing schedules."
    },
    {
      question: "What are core web vitals and why do they matter?",
      answer: "Core Web Vitals are Google's metrics for measuring user experience, including loading performance, interactivity, and visual stability. They directly impact rankings and user satisfaction, making them crucial for modern SEO strategies."
    },
    {
      question: "How important are backlinks for SEO in 2025?",
      answer: "Backlinks remain extremely important as they serve as votes of confidence from other websites. Quality and relevance matter more than quantity. Focus on earning links from authoritative, relevant sites in your industry."
    },
    {
      question: "Should I focus on voice search optimization?",
      answer: "Yes, with the growth of voice assistants, optimizing for voice search is increasingly important. Focus on natural language, question-based queries, and featured snippet optimization to capture voice search traffic."
    }
  ];

  const seoServices = [
    {
      title: "Technical SEO",
      description: "Website structure, speed optimization, mobile-friendliness, and indexability",
      icon: Zap
    },
    {
      title: "On-Page Optimization",
      description: "Content optimization, meta tags, heading structure, and internal linking",
      icon: Search
    },
    {
      title: "Local SEO",
      description: "Google Business Profile optimization, local citations, and map rankings",
      icon: Target
    },
    {
      title: "Content Strategy",
      description: "Keyword-focused content creation and optimization for better rankings",
      icon: CheckCircle
    },
    {
      title: "Link Building",
      description: "High-quality backlink acquisition from authoritative websites",
      icon: BarChart
    },
    {
      title: "SEO Analytics",
      description: "Comprehensive tracking, reporting, and performance analysis",
      icon: TrendingUp
    },
    {
      title: "E-commerce SEO",
      description: "Product page optimization, category structure, and online store visibility",
      icon: ShoppingCart
    },
    {
      title: "International SEO",
      description: "Hreflang implementation, geo-targeting, and multi-language optimization",
      icon: Globe
    },
    {
      title: "Mobile SEO",
      description: "Mobile-first optimization, AMP pages, and mobile user experience",
      icon: Smartphone
    }
  ];

  // Preload critical images
  const preloadImages = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=400&q=80",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=400&q=80"
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700/30 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 inline-flex items-center mb-4 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven SEO & Local SEO Services
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Rank #1 on Google & Drive
              <span className="text-green-400 block mt-2">Sustainable Organic Growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Our data-driven SEO strategies help businesses dominate search results, attract high-quality leads, and achieve long-term revenue growth.
            </p>

            <div className="pt-4">
              <Button onClick={() => navigate("/contact")} size="lg" className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 text-lg shadow-lg shadow-green-500/25">
                Get Free SEO Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Comprehensive SEO Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end SEO solutions designed to improve your search rankings, drive organic traffic, and increase conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {seoServices.map((service, index) => (
              <div key={index} className="flex space-x-4 items-start p-6 bg-white rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <service.icon className="w-8 h-8 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <img 
              src="https://media.istockphoto.com/id/891297988/photo/seo-search-engine-optimization.jpg?s=612x612&w=0&k=20&c=KhJVDnfZCgjUK5C4qAV21ihtLBwXmiy6wJaUb0z01wE="
              alt="SEO Analytics Dashboard"
              className="rounded-lg shadow-lg w-full"
              loading="eager"
              width={1200}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Latest SEO Insights & Strategies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay ahead with expert SEO tips, algorithm updates, and proven strategies for 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const isExpanded = expandedPosts.includes(index);
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      loading="eager"
                      width={400}
                      height={250}
                    />
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-green-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                    <p className="text-gray-600">{post.excerpt}</p>
                    
                    {isExpanded && (
                      <div className="bg-gray-50 rounded-lg p-6 space-y-4 border border-gray-200">
                        {post.fullContent.split("\n\n").map((p, i) => (
                          <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
                        ))}
                        <ContactPopup 
                          trigger={
                            <Button size="sm" className="group bg-green-600 hover:bg-green-700">
                              Get SEO Expert Help
                              <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/>
                            </Button>
                          }
                          title={`Get Expert Help with ${post.category}`}
                          description={`Ready to implement these ${post.category.toLowerCase()} strategies? Let's discuss your specific needs.`}
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500"/>
                        <span className="text-sm text-gray-500">SEO Expert</span>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => toggleExpanded(index)} className="border-gray-300 text-gray-700 hover:bg-gray-50">
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
      <section className="py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">SEO Frequently Asked Questions</h2>
            <p className="text-xl text-blue-100">Get answers to common questions about search engine optimization.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors">
                <h3 className="font-semibold text-white text-lg mb-3">{faq.question}</h3>
                <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold">+89%</div>
              <p className="text-lg">Increase in Organic Traffic</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">#1-3</div>
              <p className="text-lg">Average Keyword Rankings</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold">+127%</div>
              <p className="text-lg">More Qualified Leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Dominate Google Search Results?"
        description="Get personalized SEO strategies to boost your traffic, leads, and revenue with our proven approach."
        primaryButtonText="Get Free SEO Consultation"
        secondaryButtonText="View SEO Case Studies"
        variant="primary"
      />
    </div>
  );
};

export default SEOPage;