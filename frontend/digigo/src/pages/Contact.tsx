import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from "emailjs-com"; // make sure this is installed

import { 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight,
  CheckCircle,
  Zap,
  Calendar,
  MessageCircle,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    businessType: "",
    budget: "",
    projectDetails: "",
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    // 1️⃣ Send to Node.js backend
    const response = await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to send to backend");
    }

    console.log("✅ Sent to backend");

    // 2️⃣ Send email via EmailJS
    await emailjs.send(
      "service_f2pb3ha",   // replace with your EmailJS service ID
      "template_tpsm8ey",
      // e.target as HTMLFormElement,
        // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        website: formData.website,
        businessType: formData.businessType,
        budget: formData.budget,
        projectDetails: formData.projectDetails
      },
      "nxRxF1j0C-CucnBHw", // replace with your EmailJS public key
    );

    console.log("✅ Email sent via EmailJS");

    alert("Thanks! Your details have been submitted.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      businessType: "",
      projectDetails: "",
      budget: "",
      timeline: ""
    });
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    alert("Something went wrong. Please try again later.");
  }
  };


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shivam.gupta14083110@gmail.com",
      description: "Send me a detailed message about your project"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9702845312",
      description: "Call for immediate assistance"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Get instant answers to your questions"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book directly",
      description: "Choose a time that works for you"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you start working on my project?",
      answer: "I can typically begin new projects within 1-2 weeks. For urgent projects, I offer expedited onboarding within 48 hours."
    },
    {
      question: "What's included in a free marketing audit?",
      answer: "A comprehensive analysis of your current digital presence, competitor research, keyword opportunities, and a strategic roadmap for improvement."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "I work with businesses across all industries. My strategies are adaptable and have proven successful in B2B, B2C, e-commerce, and service-based businesses."
    },
    {
      question: "What are your pricing structures?",
      answer: "I offer flexible pricing options including monthly retainers, project-based pricing, and performance-based arrangements. All pricing is customized to your needs and budget."
    },
    {
      question: "How do you measure and report results?",
      answer: "I provide detailed monthly reports showing key metrics, ROI analysis, and recommendations. You'll have 24/7 access to real-time dashboards."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "Personal attention, proven results (500% average ROI), transparent communication, and a 99% client retention rate. You work directly with me, not junior staff."
    }
  ];

  const benefits = [
    "Free 30-minute strategy consultation",
    "Response within 2 hours during business days",
    "Custom proposal within 24 hours",
    "No long-term contracts required",
    "100% satisfaction guarantee"
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg py-2 px-4 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Free Marketing Audit & Consultation
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your
              <span className="text-yellow-300 block mt-2 bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                Digital Presence?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get in touch today for a free marketing audit and discover how we can help you achieve 
              exceptional growth and ROI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <Clock className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">2 Hour Response</div>
                <div className="text-sm text-white/80">During business days</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">Free Consultation</div>
                <div className="text-sm text-white/80">30-minute strategy call</div>
              </div>
              <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                <div className="text-lg font-semibold">Custom Proposal</div>
                <div className="text-sm text-white/80">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/30 to-indigo-50/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  Get Your Free Marketing Audit
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and I'll personally review your digital presence and 
                  send you a custom strategy within 24 hours.
                </p>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="border-gray-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="border-gray-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                          className="border-gray-300 focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="text-gray-700">Website URL</Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange("website", e.target.value)}
                        placeholder="https://yourwebsite.com"
                        className="border-gray-300 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="business-type" className="text-gray-700">Business Type</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 transition-colors text-left">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent className="w-full max-w-[var(--radix-select-trigger-width)] min-w-[8rem]">
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="saas">SaaS/Technology</SelectItem>
                            <SelectItem value="local">Local Business</SelectItem>
                            <SelectItem value="b2b">B2B Services</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-gray-700">Monthly Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 transition-colors text-left">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent className="w-full max-w-[var(--radix-select-trigger-width)] min-w-[8rem]">
                            <SelectItem value="under-1k">Under 5,000</SelectItem>
                            <SelectItem value="1k-3k">5,000 - 10,000</SelectItem>
                            <SelectItem value="3k-5k">10,000 - 20,000</SelectItem>
                            <SelectItem value="5k-10k">20,000 - 30,000</SelectItem>
                            <SelectItem value="10k-plus">30,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-details" className="text-gray-700">Project Details *</Label>
                      <Textarea
                        id="project-details"
                        value={formData.projectDetails}
                        onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                        placeholder="Tell me about your goals, challenges, and what you'd like to achieve with digital marketing..."
                        rows={5}
                        required
                        className="border-gray-300 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 group shadow-lg">
                      Get My Free Marketing Audit
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to receive marketing communications. 
                      You can unsubscribe at any time.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & FAQ */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Other Ways to Reach Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                      <CardContent className="p-6 text-center space-y-3">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <method.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{method.title}</h4>
                          <p className="text-sm font-medium text-blue-600">{method.value}</p>
                          <p className="text-xs text-gray-600">{method.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <Card className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-900">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span>Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    I provide 100% remote digital marketing services to businesses worldwide. 
                    No matter where you're located, you'll receive the same high-quality service and results.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">Primary Markets:</div>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          United States
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          Canada
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          United Kingdom
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          Australia
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <div className="font-medium text-gray-900">Also Serving:</div>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                          European Union
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                          New Zealand
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                          Singapore
                        </li>
                        <li className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
                          Other English-speaking markets
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Promise */}
              <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <CardContent className="p-6 text-center space-y-4 relative z-10">
                  <Clock className="w-12 h-12 mx-auto text-yellow-300" />
                  <div>
                    <h4 className="text-lg font-semibold">My Response Promise</h4>
                    <p className="text-white/90">
                      I personally respond to every inquiry within 2 hours during business days 
                      (9 AM - 8 PM EST, Monday - Saturday).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-indigo-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about my services and process.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center pt-12">
              <p className="text-gray-600 mb-4">
                Have a different question? I'm here to help.
              </p>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 backdrop-blur-sm">
                Ask Your Question
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;