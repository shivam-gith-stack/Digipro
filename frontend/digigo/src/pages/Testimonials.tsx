import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
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
  ArrowRight
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
      title: "How We Achieved 400% Lead Growth"
    },
    {
      name: "Michael Chen",
      company: "Local Fitness Pro",
      role: "Owner",
      thumbnail: "/api/placeholder/300/200",
      duration: "1:58",
      title: "From Local to Regional Leader"
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      thumbnail: "/api/placeholder/300/200",
      duration: "3:12",
      title: "350% Revenue Increase Story"
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
      industry: "Technology",
      companySize: "50-100 employees",
      results: {
        metric1: "400% Lead Increase",
        metric2: "250% Website Traffic", 
        metric3: "600% ROI"
      },
      testimonial: "Working with Digital Marketing Pro has been absolutely transformational for our business. When we started, we were struggling to generate quality leads and our website traffic was stagnant. Within just 3 months of implementing their SEO and PPC strategies, we saw a 400% increase in qualified leads. Their approach is incredibly data-driven and they explain everything in terms that make sense for our business. The ROI has been outstanding - we're seeing 600% return on our marketing investment. I can't recommend them highly enough!",
      services: ["SEO", "Google Ads", "Content Marketing"]
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
      results: {
        metric1: "300% Local Traffic",
        metric2: "150% New Members",
        metric3: "500% ROI"
      },
      testimonial: "As a local fitness business, I was skeptical about digital marketing. I thought word-of-mouth was enough. I was completely wrong! Digital Marketing Pro transformed our online presence with their local SEO strategies. We went from barely showing up in Google searches to ranking #1 for all our target keywords. Our website traffic from local searches increased by 300%, and we've seen a 150% increase in new member signups. The investment has paid for itself many times over. They truly understand local business needs.",
      services: ["Local SEO", "Google My Business", "Social Media"]
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Plus",
      role: "Marketing Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "January 2024",
      industry: "E-commerce",
      companySize: "25-50 employees",
      results: {
        metric1: "350% Revenue Growth",
        metric2: "280% Conversion Rate",
        metric3: "450% ROAS"
      },
      testimonial: "Our e-commerce business was stuck in a plateau. We had decent traffic but terrible conversion rates and our paid advertising was burning money without results. Digital Marketing Pro completely overhauled our approach. They optimized our website for conversions, restructured our Google Ads campaigns, and implemented email automation sequences. The results speak for themselves - 350% revenue growth in 6 months, conversion rates increased by 280%, and our return on ad spend improved to 450%. This is the best investment we've ever made in our business.",
      services: ["PPC Management", "CRO", "Email Marketing"]
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
      results: {
        metric1: "500% Lead Quality",
        metric2: "200% Website Traffic",
        metric3: "800% ROI"
      },
      testimonial: "In the professional services industry, generating high-quality leads is everything. We were spending thousands on traditional marketing with poor results. Digital Marketing Pro developed a comprehensive content marketing and SEO strategy that positioned us as thought leaders in our industry. Not only did our website traffic double, but the quality of our leads improved by 500%. We're now attracting enterprise clients who found us through organic search. The ROI has been phenomenal - over 800% return on our investment.",
      services: ["SEO", "Content Marketing", "LinkedIn Ads"]
    },
    {
      name: "Lisa Martinez",
      company: "Healthcare Solutions",
      role: "Marketing Manager",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "November 2023",
      industry: "Healthcare",
      companySize: "250+ employees",
      results: {
        metric1: "600% Appointment Bookings",
        metric2: "400% Online Visibility",
        metric3: "300% Patient Referrals"
      },
      testimonial: "Healthcare marketing has unique challenges and compliance requirements. Digital Marketing Pro understood this from day one and created strategies that were both effective and compliant. Their local SEO work helped us rank for healthcare services in our area, and their social media management built trust with our community. We've seen a 600% increase in online appointment bookings and our patient referrals have tripled. They're true professionals who deliver exceptional results.",
      services: ["Local SEO", "Social Media", "Reputation Management"]
    },
    {
      name: "Robert Kim",
      company: "Manufacturing Direct",
      role: "Sales Director",
      image: "/api/placeholder/80/80",
      rating: 5,
      date: "October 2023",
      industry: "Manufacturing",
      companySize: "500+ employees",
      results: {
        metric1: "750% B2B Leads",
        metric2: "300% Sales Pipeline",
        metric3: "450% Revenue Growth"
      },
      testimonial: "Manufacturing isn't typically thought of as a digital business, but Digital Marketing Pro proved that wrong. They developed a B2B focused strategy that included LinkedIn advertising, industry-specific content marketing, and technical SEO. The results have been staggering - we've generated 750% more qualified B2B leads, our sales pipeline has tripled, and revenue is up 450%. They transformed how we think about marketing and customer acquisition.",
      services: ["B2B Marketing", "LinkedIn Ads", "Technical SEO"]
    }
  ];

  const stats = [
    { number: "99%", label: "Client Retention Rate", icon: Users },
    { number: "500%", label: "Average ROI Increase", icon: TrendingUp },
    { number: "50+", label: "Success Stories", icon: Award },
    { number: "200+", label: "Campaigns Delivered", icon: BarChart3 }
  ];

  const industries = [
    "Technology & SaaS",
    "E-commerce & Retail", 
    "Professional Services",
    "Healthcare & Medical",
    "Fitness & Wellness",
    "Manufacturing & B2B",
    "Real Estate",
    "Financial Services"
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Real Success Stories & Results
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Client Success Stories &
              <span className="text-accent block mt-2">Proven Results</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              See how businesses like yours have achieved extraordinary growth with our proven 
              digital marketing strategies and expert guidance.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl lg:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
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
              Hear directly from our clients about their transformation and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden card-hover bg-gradient-card border-0 shadow-lg group">
                <div className="relative">
                  <div className="h-48 bg-gradient-primary"></div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
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
              Detailed Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              In-depth case studies showing the strategies, implementation, and remarkable results.
            </p>
          </div>

          <div className="space-y-12">
            {detailedTestimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden bg-gradient-card border-0 shadow-lg">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Client Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{testimonial.name}</h3>
                          <p className="text-muted-foreground">{testimonial.role}</p>
                          <p className="text-primary font-medium">{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Building className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.industry}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{testimonial.companySize}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">Services Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {testimonial.services.map((service, idx) => (
                              <Badge key={idx} variant="outline">{service}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="relative">
                        <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                        <p className="text-muted-foreground leading-relaxed text-lg italic pl-6">
                          {testimonial.testimonial}
                        </p>
                      </div>

                      {/* Results */}
                      <div className="bg-primary/5 rounded-lg p-6">
                        <h4 className="font-semibold text-foreground mb-4">Key Results Achieved:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{testimonial.results.metric1.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.results.metric1.split(' ').slice(1).join(' ')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{testimonial.results.metric2.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.results.metric2.split(' ').slice(1).join(' ')}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{testimonial.results.metric3.split(' ')[0]}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.results.metric3.split(' ').slice(1).join(' ')}</div>
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
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Industries We've Transformed
              </h2>
              <p className="text-xl text-muted-foreground">
                Our proven strategies work across diverse industries and business models.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-4 bg-gradient-card rounded-lg shadow-md">
                  <div className="text-sm font-medium text-foreground">{industry}</div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground mb-6">
                Don't see your industry? We've likely worked with similar businesses and can adapt our strategies to your unique needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="group">
                  Discuss Your Industry
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Become Our Next Success Story?"
        description="Join the 50+ businesses that have transformed their growth with our proven digital marketing strategies. Your success story could be next."
        primaryButtonText="Start Your Success Story"
        secondaryButtonText="View More Case Studies"
        variant="primary"
      />
    </div>
  );
};

export default Testimonials;