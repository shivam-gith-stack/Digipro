import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactPopup from "@/components/ContactPopup";
import { Calendar, Clock, ChevronDown, ChevronUp, User, ArrowRight, TrendingUp, Mail, Zap, BarChart, Users, Target } from "lucide-react";

const EmailMarketingPage = () => {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const toggleExpanded = (index: number) => setExpandedPosts(prev => prev.includes(index) ? prev.filter(i=>i!==index) : [...prev,index]);

  // SEO-optimized blog posts for email marketing
  const blogPosts = [
    {
      title: "Email Marketing Automation for 2025: Complete Guide",
      excerpt: "Boost conversions with smart automated email campaigns that nurture leads 24/7.",
      fullContent: `Email marketing automation allows you to nurture leads and increase revenue without manual effort. In 2025, AI-powered personalization and behavioral triggers are revolutionizing email marketing.

**Key Automation Workflows:**
- **Welcome Series**: 3-5 emails introducing your brand
- **Abandoned Cart**: Recover 15-20% of lost sales
- **Lead Nurturing**: Educate prospects over 30-90 days
- **Re-engagement**: Win back inactive subscribers
- **Post-Purchase**: Increase customer lifetime value

**2025 Trends:**
- AI-generated personalized content
- Predictive send time optimization
- Interactive email elements
- SMS integration for multi-channel nurturing`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&auto=format",
      category: "Automation",
      date: "January 20, 2025",
      readTime: "8 min read"
    },
    {
      title: "Designing High-Converting Email Campaigns in 2025",
      excerpt: "Learn the secrets of email templates that convert readers into customers.",
      fullContent: `A high-performing email campaign requires strategic design and psychological principles.

**Conversion-Focused Elements:**
- **Subject Lines**: Personalization increases opens by 26%
- **Preheaders**: Support subject line and create curiosity
- **Mobile Optimization**: 60% of emails are opened on mobile
- **Clear CTAs**: One primary action per email
- **Social Proof**: Testimonials and trust signals

**Design Best Practices:**
- Use single-column layouts for mobile
- Maintain brand consistency
- Optimize images with alt text
- Ensure fast loading times
- Test across email clients

**A/B Testing Framework:**
Test subject lines, sender names, content length, CTA placement, and send times to continuously improve performance.`,
      image: "https://images.unsplash.com/photo-1504691342899-36f8fddf0f3e?w=600&h=300&fit=crop&auto=format",
      category: "Design",
      date: "January 18, 2025",
      readTime: "10 min read"
    },
    {
      title: "Email List Building Strategies That Actually Work",
      excerpt: "Grow your email list with quality subscribers using proven acquisition methods.",
      fullContent: `Building a quality email list is the foundation of successful email marketing.

**Effective Lead Magnets:**
- **Ebooks and Guides**: Solve specific problems
- **Webinars**: Demonstrate expertise and capture leads
- **Discounts and Coupons**: Immediate value exchange
- **Free Tools**: Calculators, templates, checklists
- **Quizzes**: Interactive and shareable content

**Opt-in Form Optimization:**
- Place forms above the fold
- Use compelling copy and benefits
- Offer clear value proposition
- Test different form lengths
- Implement exit-intent popups

**List Hygiene Practices:**
- Regular cleaning of inactive subscribers
- Double opt-in for quality assurance
- Segment based on engagement levels
- GDPR and CAN-SPAM compliance`,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=300&fit=crop&auto=format",
      category: "List Building",
      date: "January 15, 2025",
      readTime: "7 min read"
    },
    {
      title: "Email Marketing Metrics That Matter in 2025",
      excerpt: "Track the right KPIs to measure ROI and optimize your email strategy.",
      fullContent: `Understanding email metrics is crucial for proving ROI and improving performance.

**Essential Metrics to Track:**

**Engagement Metrics:**
- Open Rate (Industry average: 20-30%)
- Click-Through Rate (Average: 2-5%)
- Click-to-Open Rate (Measures content effectiveness)
- Conversion Rate (Most important for ROI)

**Deliverability Metrics:**
- Bounce Rate (Keep below 2%)
- Spam Complaint Rate (Below 0.1%)
- Unsubscribe Rate (Monitor for content quality)

**Revenue Metrics:**
- Revenue Per Email
- ROI (Average: $42 for every $1 spent)
- Customer Lifetime Value from Email

**Tools for Advanced Tracking:**
- Google Analytics UTM parameters
- Email service provider analytics
- CRM integration for revenue attribution`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format",
      category: "Analytics",
      date: "January 12, 2025",
      readTime: "9 min read"
    },
    {
      title: "GDPR-Compliant Email Marketing Strategies",
      excerpt: "Ensure your email marketing practices comply with privacy regulations.",
      fullContent: `Privacy regulations require careful email marketing practices to avoid penalties.

**Key Compliance Requirements:**
- **Explicit Consent**: Clear opt-in processes
- **Data Protection**: Secure storage and processing
- **Right to Access**: Provide subscriber data upon request
- **Right to Be Forgotten**: Easy unsubscribe and data deletion

**Best Practices:**
- Use double opt-in for new subscribers
- Maintain clear privacy policies
- Provide easy unsubscribe options
- Segment based on consent levels
- Regular data audits and cleaning

**Implementation Checklist:**
- Update privacy policy and terms
- Implement consent management platform
- Train team on compliance requirements
- Document data processing activities
- Appoint data protection officer if required`,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=300&fit=crop&auto=format",
      category: "Compliance",
      date: "January 10, 2025",
      readTime: "6 min read"
    },
    {
      title: "AI-Powered Personalization in Email Marketing",
      excerpt: "Leverage artificial intelligence to create hyper-personalized email experiences.",
      fullContent: `AI is transforming email marketing from mass communication to individual conversations.

**AI Applications in Email:**

**Content Personalization:**
- Dynamic content based on user behavior
- Personalized product recommendations
- AI-generated subject lines and copy
- Send time optimization per subscriber

**Predictive Analytics:**
- Churn prediction and prevention
- Lead scoring for better segmentation
- Content performance forecasting
- Optimal frequency recommendations

**Implementation Strategy:**
- Start with basic personalization (name, company)
- Progress to behavioral triggers
- Implement AI tools gradually
- Measure impact on key metrics

**Tools to Consider:**
- AI-powered email platforms
- Predictive analytics software
- Personalization engines
- Behavioral tracking systems`,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&auto=format",
      category: "AI & Personalization",
      date: "January 8, 2025",
      readTime: "8 min read"
    }
  ];

  // Expanded FAQs based on most searched email marketing questions
  const faqs = [
    {
      question: "What is the average ROI for email marketing?",
      answer: "Email marketing has an average ROI of $42 for every $1 spent, making it one of the most cost-effective marketing channels. ROI varies by industry, with e-commerce seeing returns up to $45:$1 and B2B around $35:$1."
    },
    {
      question: "How often should I send marketing emails?",
      answer: "Optimal frequency depends on your audience and content. Generally, 1-2 times per week for newsletters, daily for promotional campaigns, and triggered emails based on user behavior. Monitor engagement metrics and adjust based on subscriber feedback."
    },
    {
      question: "What's a good open rate for email campaigns?",
      answer: "Industry averages range from 20-30%. B2B campaigns average 15-25%, while B2C typically sees 20-35%. Factors affecting open rates include subject line quality, sender reputation, list quality, and audience relevance."
    },
    {
      question: "How can I improve my email deliverability?",
      answer: "Maintain list hygiene, use double opt-in, authenticate your domain (SPF, DKIM, DMARC), avoid spam triggers, monitor sender reputation, segment your list, and regularly clean inactive subscribers."
    },
    {
      question: "What's the best time to send marketing emails?",
      answer: "Generally, Tuesday-Thursday between 9-11 AM local time. However, test with your audience. B2B performs best during business hours, while B2C sees higher engagement evenings and weekends."
    },
    {
      question: "How do I build an email list from scratch?",
      answer: "Create valuable lead magnets, optimize website opt-in forms, use social media promotions, host webinars, run contests, collaborate with influencers, and leverage content upgrades in blog posts."
    },
    {
      question: "What's the difference between cold email and marketing email?",
      answer: "Cold email is unsolicited outreach to prospects, requiring careful compliance. Marketing email goes to subscribers who opted in. Cold email focuses on lead generation, while marketing email nurtures existing relationships."
    },
    {
      question: "How can I reduce my email unsubscribe rate?",
      answer: "Set clear expectations during sign-up, segment your audience, provide valuable content, optimize send frequency, allow subscribers to choose email types, and regularly survey your audience about preferences."
    },
    {
      question: "What are the best email marketing platforms?",
      answer: "Top platforms include HubSpot (all-in-one), Mailchimp (ease of use), ConvertKit (creators), ActiveCampaign (automation), Klaviyo (e-commerce), and Sendinblue (affordable). Choose based on your budget and needs."
    },
    {
      question: "How do I write email subject lines that get opens?",
      answer: "Keep under 50 characters, create urgency or curiosity, personalize when possible, avoid spam words, ask questions, use emojis strategically, and A/B test different approaches."
    },
    {
      question: "What is email segmentation and why is it important?",
      answer: "Segmentation divides your list into groups based on demographics, behavior, or preferences. It increases relevance, improves engagement (14-30% higher open rates), and boosts conversions by sending targeted content."
    },
    {
      question: "How can I make my emails mobile-friendly?",
      answer: "Use responsive design, single-column layouts, large CTAs (min 44px), concise copy, optimized images, legible fonts (16px+), and test on various devices and email clients."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 lg:py-32 text-center max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30 inline-flex items-center mb-4">
          <Mail className="w-4 h-4 mr-2" /> Email Marketing Automation
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Automate, Nurture & Convert With Email Marketing</h1>
        <p className="text-xl md:text-2xl text-white/90 mt-4 leading-relaxed">Boost engagement, nurture leads, and increase lifetime value with targeted and automated email campaigns.</p>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$42</div>
              <p className="text-sm text-gray-600">Average ROI per $1 spent</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4B+</div>
              <p className="text-sm text-gray-600">Daily email users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">59%</div>
              <p className="text-sm text-gray-600">Marketers say email is biggest ROI</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3.9x</div>
              <p className="text-sm text-gray-600">Higher conversion than social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Email Marketing Services</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">Comprehensive email marketing solutions designed to drive growth and customer loyalty</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Automation Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Design and implement automated workflows for lead nurturing, customer onboarding, and retention campaigns.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Welcome series setup</li>
                  <li>• Behavioral triggers</li>
                  <li>• Drip campaign design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Campaign Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Create and optimize email campaigns that drive conversions and build customer relationships.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• A/B testing optimization</li>
                  <li>• Performance analytics</li>
                  <li>• Conversion tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>List Growth Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Grow your email list with quality subscribers using proven acquisition strategies and lead magnets.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Lead magnet creation</li>
                  <li>• Opt-in form optimization</li>
                  <li>• List segmentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Email Marketing Insights & Strategies</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Latest trends, best practices, and data-driven strategies for 2025</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post,index)=>{
              const isExpanded = expandedPosts.includes(index);
              return (
                <Card key={index} className="bg-white border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      loading="lazy"
                    />
                    <Badge variant="secondary" className="absolute top-4 left-4 bg-blue-600 text-white">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900 line-clamp-2">{post.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
                      <div className="flex items-center space-x-1"><Clock className="w-4 h-4"/><span>{post.readTime}</span></div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    {isExpanded && (
                      <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                        <div className="prose prose-sm max-w-none">
                          {post.fullContent.split("\n\n").map((p,i) => (
                            <div key={i}>
                              {p.startsWith("**") ? (
                                <strong className="text-gray-900">{p.replace(/\*\*/g, '')}</strong>
                              ) : (
                                <p className="text-gray-700 leading-relaxed">{p}</p>
                              )}
                            </div>
                          ))}
                        </div>
                        <ContactPopup 
                          trigger={
                            <Button size="sm" className="group w-full bg-blue-600 hover:bg-blue-700">
                              Get Email Strategy
                              <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1"/>
                            </Button>
                          } 
                          title={`Get Expert Help with ${post.category}`} 
                          description={`Let's discuss your email marketing strategy.`}
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500"/>
                        <span className="text-sm text-gray-500">Email Expert</span>
                      </div>
                      <Button variant="outline" size="sm" onClick={()=>toggleExpanded(index)} className="border-gray-300">
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

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Email Marketing FAQs</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">Answers to the most common email marketing questions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq,index)=>(
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Transform Your Email Marketing?" 
        description="Get expert strategies to automate campaigns, nurture leads, and drive revenue growth." 
        primaryButtonText="Get Free Email Audit" 
        secondaryButtonText="Download Email Template Kit" 
        variant="primary"
      />
    </div>
  )
};

export default EmailMarketingPage;