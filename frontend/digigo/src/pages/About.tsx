import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import { 
  Award, 
  Users, 
  TrendingUp, 
  Clock,
  CheckCircle,
  Target,
  BarChart3,
  Lightbulb,
  Heart,
  Globe
} from "lucide-react";

const About = () => {
  const certifications = [
    "Google Ads Certified",
    "Google Analytics Certified", 
    "Facebook Blueprint Certified",
    "HubSpot Inbound Certified",
    "SEMrush Certified",
    "Hootsuite Certified"
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Focused",
      description: "Every strategy we implement is designed to deliver measurable results and maximize your ROI."
    },
    {
      icon: BarChart3,
      title: "Data-Driven",
      description: "We make decisions based on comprehensive data analysis, not guesswork or assumptions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of digital marketing trends to give our clients a competitive advantage."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to helping your business grow and thrive."
    }
  ];

  const achievements = [
    {
      number: "10+",
      label: "Years Experience",
      description: "Decade of proven expertise in digital marketing"
    },
    {
      number: "500%",
      label: "Average ROI",
      description: "Consistent high returns for our clients"
    },
    {
      number: "200+",
      label: "Campaigns Launched",
      description: "Successful marketing campaigns delivered"
    },
    {
      number: "50+",
      label: "Happy Clients",
      description: "Businesses transformed and growing"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business, goals, and current digital presence through comprehensive analysis."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Based on our findings, we create a customized digital marketing strategy tailored to your specific needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the strategy with precision, launching campaigns and optimizing for maximum performance."
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Continuous monitoring and optimization ensure your campaigns deliver the best possible results."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Certified Digital Marketing Expert
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Meet Your Digital Marketing
              <span className="text-accent block mt-2">Success Partner</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              With over 10 years of experience and multiple certifications, I help businesses achieve 
              extraordinary growth through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Transforming Businesses Through Digital Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in digital marketing began over a decade ago when I discovered the power 
                  of connecting businesses with their ideal customers online. Since then, I've helped 
                  hundreds of companies achieve remarkable growth through strategic digital marketing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What sets me apart is my commitment to results. Every campaign I create is designed 
                  with one goal in mind: delivering measurable ROI that grows your business. I don't 
                  believe in vanity metrics or empty promises – only real, sustainable growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">{achievement.number}</div>
                    <div className="text-sm font-medium text-foreground">{achievement.label}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-primary rounded-2xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                My Mission & Expertise
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To help businesses achieve measurable online growth through data-driven digital 
                marketing strategies that deliver exceptional ROI and long-term success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center card-hover bg-gradient-card border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Certified Expertise You Can Trust
              </h2>
              <p className="text-xl text-muted-foreground">
                Continuous learning and certification ensure I stay at the forefront of digital marketing innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg shadow-md">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                My Proven 4-Step Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A systematic methodology that ensures every campaign delivers maximum results and ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {approach.map((step, index) => (
                <Card key={index} className="relative card-hover bg-gradient-card border-0 shadow-lg">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-primary/20"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Choose Digital Marketing Pro?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">100% Remote Service</h3>
                    <p className="text-muted-foreground">
                      No geographic limitations. I work with businesses worldwide, providing the same 
                      high-quality service regardless of location.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Your success doesn't wait for business hours. I'm available when you need me, 
                      ensuring your campaigns run smoothly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">
                      You work directly with me, not a team of junior staff. Get personalized attention 
                      and expert guidance for your campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Proven Results</h3>
                    <p className="text-muted-foreground">
                      Track record of delivering 500% average ROI increases with 99% client retention rate. 
                      Results speak louder than promises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Industry Recognition</h3>
                    <p className="text-muted-foreground">
                      Google Partner, Facebook Blueprint certified, and recognized industry expert with 
                      multiple platform certifications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Transparent Reporting</h3>
                    <p className="text-muted-foreground">
                      Monthly detailed reports showing exactly how your campaigns are performing and 
                      the ROI you're receiving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Work Together?"
        description="Let's discuss how I can help transform your digital presence and drive the growth your business deserves."
        primaryButtonText="Schedule Free Consultation"
        secondaryButtonText="Get Marketing Audit"
        variant="primary"
      />
    </div>
  );
};

export default About;