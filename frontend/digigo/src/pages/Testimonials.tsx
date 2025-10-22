import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import { Helmet } from "react-helmet-async";
import { 
  Star,
  TrendingUp,
  Users,
  Award,
  BarChart3,
  Quote,
  Play,
  Calendar,
  Building,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const videoTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      thumbnail: "/api/placeholder/300/200",
      duration: "2:34",
      title: "How We Achieved 400% Lead Growth in 3 Months",
      description: "Tech startup transforms lead generation with strategic SEO and PPC campaigns"
    },
    {
      name: "Michael Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      thumbnail: "/api/placeholder/300/200",
      duration: "1:58",
      title: "From Local to Regional Leader in Fitness",
      description: "Local gym dominates local search results and triples membership"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      thumbnail: "/api/placeholder/300/200",
      duration: "3:12",
      title: "350% Revenue Increase in 6 Months",
      description: "E-commerce store achieves remarkable growth through conversion optimization"
    }
  ];

  const detailedTestimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      role: "CEO",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "March 2024",
      industry: "Technology & SaaS",
      companySize: "50-100 employees",
      location: "San Francisco, CA",
      duration: "6 months",
      results: {
        metric1: "400% Lead Increase",
        metric2: "250% Website Traffic", 
        metric3: "600% ROI",
        before: "25 leads/month",
        after: "125 leads/month"
      },
      testimonial: "Working with Digital Marketing Pro has been absolutely transformational for our SaaS business. When we started, we were struggling to generate quality leads and our website traffic was stagnant at around 2,000 visitors per month. Within just 3 months of implementing their comprehensive SEO and PPC strategies, we saw a 400% increase in qualified leads. Their approach is incredibly data-driven and they explain everything in terms that make sense for our business. The ROI has been outstanding - we're seeing 600% return on our marketing investment. The team's expertise in technical SEO and conversion rate optimization helped us rank for competitive keywords we never thought possible. I can't recommend them highly enough!",
      services: ["SEO", "Google Ads", "Content Marketing", "Conversion Rate Optimization"],
      challenges: ["Low website traffic", "Poor lead quality", "Ineffective PPC campaigns"],
      solutions: ["Technical SEO audit", "Keyword strategy overhaul", "Landing page optimization", "PPC campaign restructuring"]
    },
    {
      name: "Michael Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "February 2024",
      industry: "Fitness & Health",
      companySize: "10-25 employees",
      location: "Austin, TX",
      duration: "4 months",
      results: {
        metric1: "300% Local Traffic",
        metric2: "150% New Members",
        metric3: "500% ROI",
        before: "15 new members/month",
        after: "38 new members/month"
      },
      testimonial: "As a local fitness business owner, I was skeptical about digital marketing. I thought word-of-mouth and local advertising were enough. I was completely wrong! Digital Marketing Pro transformed our online presence with their hyper-local SEO strategies. We went from barely showing up in Google searches to ranking #1 for all our target keywords like 'best gym in Austin' and 'personal training near me'. Our website traffic from local searches increased by 300%, and we've seen a 150% increase in new member signups. The investment has paid for itself many times over. They truly understand local business needs and implemented Google Business Profile optimization that actually works. Our gym is now the top-rated fitness center in our area!",
      services: ["Local SEO", "Google My Business", "Social Media Marketing", "Reputation Management"],
      challenges: ["Poor local visibility", "Low online reviews", "Ineffective social media"],
      solutions: ["GMB optimization", "Local citation building", "Review generation strategy", "Social media content calendar"]
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "January 2024",
      industry: "E-commerce & Retail",
      companySize: "25-50 employees",
      location: "Miami, FL",
      duration: "6 months",
      results: {
        metric1: "350% Revenue Growth",
        metric2: "280% Conversion Rate",
        metric3: "450% ROAS",
        before: "$25,000/month revenue",
        after: "$112,500/month revenue"
      },
      testimonial: "Our e-commerce business was stuck in a plateau for over a year. We had decent traffic but terrible conversion rates (under 1%) and our paid advertising was burning money without results. Digital Marketing Pro completely overhauled our approach from the ground up. They conducted extensive user behavior analysis, optimized our website for mobile conversions, restructured our Google Ads campaigns with better audience targeting, and implemented sophisticated email automation sequences. The results speak for themselves - 350% revenue growth in 6 months, conversion rates increased by 280% to 2.8%, and our return on ad spend improved to 450%. This is the best investment we've ever made in our business. They don't just manage campaigns; they transform entire marketing funnels.",
      services: ["PPC Management", "CRO", "Email Marketing", "Shopping Ads"],
      challenges: ["Low conversion rates", "Inefficient ad spend", "Poor mobile experience"],
      solutions: ["Conversion funnel analysis", "A/B testing implementation", "Email automation setup", "Mobile optimization"]
    },
    {
      name: "David Thompson",
      company: "Professional Services Co",
      role: "Managing Partner",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "December 2023",
      industry: "Professional Services",
      companySize: "100-250 employees",
      location: "New York, NY",
      duration: "8 months",
      results: {
        metric1: "500% Lead Quality",
        metric2: "200% Website Traffic",
        metric3: "800% ROI",
        before: "10 qualified leads/month",
        after: "60 qualified leads/month"
      },
      testimonial: "In the professional services industry, generating high-quality, enterprise-level leads is everything. We were spending thousands on traditional marketing and generic digital ads with poor results. Digital Marketing Pro developed a comprehensive content marketing and SEO strategy that positioned us as thought leaders in our specific niche. They created in-depth whitepapers, case studies, and industry reports that attracted our ideal clients. Not only did our website traffic double, but the quality of our leads improved by 500%. We're now attracting Fortune 500 clients who found us through organic search. The ROI has been phenomenal - over 800% return on our investment. Their understanding of B2B marketing psychology is exceptional.",
      services: ["SEO", "Content Marketing", "LinkedIn Ads", "Marketing Strategy"],
      challenges: ["Poor lead quality", "Weak thought leadership", "Ineffective content"],
      solutions: ["Content strategy development", "Thought leadership positioning", "LinkedIn campaign optimization", "Lead scoring implementation"]
    },
    {
      name: "Lisa Martinez",
      company: "Healthcare Solutions",
      role: "Marketing Manager",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "November 2023",
      industry: "Healthcare & Medical",
      companySize: "250+ employees",
      location: "Chicago, IL",
      duration: "7 months",
      results: {
        metric1: "600% Appointment Bookings",
        metric2: "400% Online Visibility",
        metric3: "300% Patient Referrals",
        before: "45 online bookings/month",
        after: "315 online bookings/month"
      },
      testimonial: "Healthcare marketing has unique challenges and strict compliance requirements that most agencies don't understand. Digital Marketing Pro understood this from day one and created strategies that were both highly effective and fully HIPAA compliant. Their local SEO work helped us rank for specialized healthcare services in our area, and their social media management built genuine trust with our community. We've seen a 600% increase in online appointment bookings and our patient referrals have tripled. They implemented a reputation management system that helped us maintain our 4.9-star rating across all platforms. What impressed me most was their ability to balance aggressive growth with medical industry compliance. They're true professionals who deliver exceptional results while maintaining the highest standards.",
      services: ["Local SEO", "Social Media", "Reputation Management", "Healthcare Marketing"],
      challenges: ["Compliance restrictions", "Low online visibility", "Poor patient engagement"],
      solutions: ["HIPAA-compliant strategy", "Local SEO optimization", "Review management system", "Patient education content"]
    },
    {
      name: "Robert Kim",
      company: "Manufacturing Direct",
      role: "Sales Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "October 2023",
      industry: "Manufacturing & B2B",
      companySize: "500+ employees",
      location: "Detroit, MI",
      duration: "9 months",
      results: {
        metric1: "750% B2B Leads",
        metric2: "300% Sales Pipeline",
        metric3: "450% Revenue Growth",
        before: "8 qualified B2B leads/month",
        after: "68 qualified B2B leads/month"
      },
      testimonial: "Manufacturing isn't typically thought of as a digital-first business, but Digital Marketing Pro proved that digital transformation is essential even in traditional industries. They developed a sophisticated B2B marketing strategy that included LinkedIn advertising targeting specific industries, industry-specific content marketing that addressed pain points of manufacturing executives, and technical SEO for complex product pages. The results have been staggering - we've generated 750% more qualified B2B leads, our sales pipeline has tripled in value, and overall revenue is up 450%. They transformed how we think about marketing and customer acquisition. We're now winning contracts we never would have known about through traditional channels. Their ability to understand complex B2B sales cycles sets them apart.",
      services: ["B2B Marketing", "LinkedIn Ads", "Technical SEO", "Account-Based Marketing"],
      challenges: ["Long sales cycles", "Complex products", "Limited digital presence"],
      solutions: ["ABM strategy", "LinkedIn targeting", "Technical product SEO", "Sales enablement content"]
    }
  ];

  const stats = [
    { number: "99%", label: "Client Retention Rate", icon: Users, description: "Long-term partnerships" },
    { number: "500%", label: "Average ROI Increase", icon: TrendingUp, description: "Across all campaigns" },
    { number: "50+", label: "Success Stories", icon: Award, description: "Verified case studies" },
    { number: "200+", label: "Campaigns Delivered", icon: BarChart3, description: "Proven track record" }
  ];

  const industries = [
    "Technology & SaaS",
    "E-commerce & Retail", 
    "Professional Services",
    "Healthcare & Medical",
    "Fitness & Wellness",
    "Manufacturing & B2B",
    "Real Estate",
    "Financial Services",
    "Education & EdTech",
    "Hospitality & Travel",
    "Non-Profit Organizations",
    "Legal Services"
  ];

  const trustBadges = [
    { icon: CheckCircle, text: "Google Premier Partner" },
    { icon: Award, text: "Facebook Marketing Partner" },
    { icon: Star, text: "4.9/5 Client Rating" },
    { icon: Zap, text: "Fast Results Guaranteed" },
    { icon: Target, text: "Data-Driven Strategies" },
    { icon: Heart, text: "Client-First Approach" }
  ];

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Client Testimonials & Success Stories | 500% ROI Digital Marketing Case Studies</title>
        <meta 
          name="description" 
          content="Read 50+ verified client testimonials and success stories. See how businesses achieved 500% average ROI with our proven digital marketing strategies. Real results, real clients." 
        />
        <meta 
          name="keywords" 
          content="digital marketing testimonials, client success stories, marketing case studies, ROI proof, SEO results, PPC success stories, social media marketing results, client reviews, verified results" 
        />
        <meta property="og:title" content="Client Testimonials & Success Stories - 500% ROI Proven Results" />
        <meta property="og:description" content="See how 50+ businesses achieved remarkable growth with our digital marketing services. Real client testimonials and verified results." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lumivexgrowth.in/testimonials-og-image.jpg" />
        <link rel="canonical" href="https://lumivexgrowth.in/testimonials" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Client Testimonials and Success Stories",
            "description": "Verified client testimonials and case studies showing digital marketing results",
            "numberOfItems": "50",
            "itemListElement": detailedTestimonials.map((testimonial, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Review",
                "author": testimonial.name,
                "reviewBody": testimonial.testimonial,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": testimonial.rating,
                  "bestRating": "5"
                },
                "itemReviewed": {
                  "@type": "Service",
                  "name": "Digital Marketing Services"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Verified Success Stories & Real Results
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Client Success Stories &
              <span className="text-accent block mt-2">Proven Marketing Results</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover how 50+ businesses across 12+ industries achieved extraordinary growth with our data-driven 
              digital marketing strategies. Real clients, verified results, remarkable ROI.
            </h2>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl lg:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80 font-semibold">{stat.label}</div>
                  <div className="text-xs text-white/60">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Video Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our clients about their transformation journey and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden card-hover bg-gradient-card border-0 shadow-lg group">
                <div className="relative">
                  <div className="h-48 bg-gradient-primary relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full"></div>
                    <div>
                      <div className="font-medium text-foreground">{video.name}</div>
                      <div className="text-sm text-muted-foreground">{video.role}, {video.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Detailed Case Studies & Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth client stories showing challenges, strategies implemented, and remarkable business results.
            </p>
          </div>

          <div className="space-y-16">
            {detailedTestimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Client Info & Metrics */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name} - ${testimonial.role} at ${testimonial.company}`}
                          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                          <p className="text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.date} • {testimonial.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.industry}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.companySize}</span>
                          </div>
                          <div className="text-muted-foreground">{testimonial.location}</div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground">Services Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {testimonial.services.map((service, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content & Results */}
                    <div className="lg:col-span-3 space-y-8">
                      <div className="relative">
                        <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                        <p className="text-muted-foreground leading-relaxed text-lg pl-6">
                          {testimonial.testimonial}
                        </p>
                      </div>

                      {/* Challenges & Solutions */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-red-500" />
                            Challenges Faced
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {testimonial.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                            Solutions Implemented
                          </h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {testimonial.solutions.map((solution, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                <span>{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-6 text-center text-lg">
                          Measurable Results Achieved
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{testimonial.results.metric1.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground font-semibold">{testimonial.results.metric1.split(' ').slice(1).join(' ')}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {testimonial.results.before} → {testimonial.results.after}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{testimonial.results.metric2.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground font-semibold">{testimonial.results.metric2.split(' ').slice(1).join(' ')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary mb-2">{testimonial.results.metric3.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground font-semibold">{testimonial.results.metric3.split(' ').slice(1).join(' ')}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Industries We've Transformed
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our proven digital marketing strategies deliver exceptional results across diverse industries 
                and business models. From startups to enterprise companies.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 bg-gradient-card rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border">
                  <div className="text-sm font-medium text-foreground">{industry}</div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-6 text-lg">
                Don't see your specific industry? We've successfully adapted our strategies for unique business models 
                and can create a custom solution for your specific needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection 
        title="Ready to Become Our Next Success Story?"
        description="Join 50+ businesses that have transformed their growth with our proven digital marketing strategies. Your success story could be featured here next."
        primaryButtonText="Start Your Success Story"
        secondaryButtonText="View More Case Studies"
        variant="primary"
      />
    </div>
  );
};

export default Testimonials;