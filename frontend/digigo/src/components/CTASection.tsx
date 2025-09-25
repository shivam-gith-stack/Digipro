import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: "default" | "primary" | "accent";
  onPrimaryClick?: () => void;   // <-- added
  onSecondaryClick?: () => void; // <-- added
}

const CTASection = ({ 
  title = "Ready to Grow Your Business Online?",
  description = "Join 200+ successful businesses that have transformed their online presence with our proven digital marketing strategies.",
  primaryButtonText = "Get Free Marketing Audit",
  secondaryButtonText = "Schedule Strategy Call",
  variant = "primary",
  onPrimaryClick,
  onSecondaryClick
}: CTASectionProps) => {
  const getBackgroundClass = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-hero";
      case "accent":
        return "bg-accent";
      default:
        return "bg-gradient-card";
    }
  };

  const getTextClass = () => {
    return variant === "default" ? "text-foreground" : "text-white";
  };

  return (
    <section className={`py-16 lg:py-24 ${getBackgroundClass()}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                variant === "default" ? "bg-primary/10" : "bg-white/20"
              }`}
            >
              <TrendingUp
                className={`w-8 h-8 ${
                  variant === "default" ? "text-primary" : "text-white"
                }`}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold ${getTextClass()}`}
            >
              {title}
            </h2>
            <p
              className={`text-lg md:text-xl ${
                variant === "default"
                  ? "text-muted-foreground"
                  : "text-white/90"
              } max-w-2xl mx-auto`}
            >
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={onPrimaryClick}   // ✅ added
              className={`group ${
                variant === "default"
                  ? "bg-accent hover:bg-accent/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              {primaryButtonText}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            {secondaryButtonText && (
              <Button
                variant="outline"
                size="lg"
                onClick={onSecondaryClick} // ✅ added
                className={
                  variant === "default"
                    ? ""
                    : "border-white/30 text-white hover:bg-white/10 hover:text-white"
                }
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div
                className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
              >
                500%
              </div>
              <div
                className={`text-sm ${
                  variant === "default" ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Average ROI
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
              >
                200+
              </div>
              <div
                className={`text-sm ${
                  variant === "default" ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Campaigns
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
              >
                50+
              </div>
              <div
                className={`text-sm ${
                  variant === "default" ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div
                className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
              >
                99%
              </div>
              <div
                className={`text-sm ${
                  variant === "default" ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Retention Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
