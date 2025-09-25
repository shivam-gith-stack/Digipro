import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

interface ContactPopupProps {
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
}

const ContactPopup = ({ 
  trigger, 
  title = "Get Your Free Digital Marketing Consultation",
  description = "Ready to grow your business? Let's discuss your goals and create a custom strategy."
}: ContactPopupProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: ""
  });
  // const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 hours during business days.",
    });
    setOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="group">
            Get Free Consultation
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">{title}</DialogTitle>
          <p className="text-muted-foreground text-center">{description}</p>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4 text-primary" />
            <span>Quick Response</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="w-4 h-4 text-primary" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span>Custom Strategy</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name *</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Company</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Project Type *</label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service needed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO Optimization</SelectItem>
                  <SelectItem value="ppc">Google Ads & PPC</SelectItem>
                  <SelectItem value="social">Social Media Marketing</SelectItem>
                  <SelectItem value="content">Content Marketing</SelectItem>
                  <SelectItem value="email">Email Marketing</SelectItem>
                  <SelectItem value="website">Website Development</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="consultation">Strategy Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Monthly Budget</label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                  <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000+">$10,000+</SelectItem>
                  <SelectItem value="discuss">Let's Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Project Details</label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your business goals, current challenges, and what you'd like to achieve..."
              rows={4}
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Badge variant="secondary">Free Audit Included</Badge>
            <Badge variant="secondary">No Long-term Contracts</Badge>
            <Badge variant="secondary">Custom Strategy</Badge>
            <Badge variant="secondary">Proven Results</Badge>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Send Message & Get Free Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respond within 2 hours during business days. Your information is secure and never shared.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;