import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: "default" | "primary" | "accent";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  // SEO Props
  pageTitle?: string;
  metaDescription?: string;
  schemaData?: any;
}

const CTASection = ({ 
  title = "Ready to Grow Your Business Online?",
  description = "Join 200+ successful businesses that have transformed their online presence with our proven digital marketing strategies.",
  primaryButtonText = "Get Free Marketing Audit",
  secondaryButtonText = "Schedule Strategy Call",
  variant = "primary",
  onPrimaryClick,
  onSecondaryClick,
  // SEO Props with defaults
  pageTitle = "Digital Marketing Services | Get Free Audit & Consultation",
  metaDescription = "Transform your business with expert digital marketing services. Get free audit, 500% average ROI, 200+ successful campaigns. Schedule your strategy call today.",
  schemaData
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

  // Default structured data for CTA section
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Professional digital marketing services including SEO, PPC, social media marketing",
    "offers": {
      "@type": "Offer",
      "description": "Free Marketing Audit and Consultation",
      "availability": "https://schema.org/InStock"
    },
    "areaServed": ["India", "United States", "Canada", "United Kingdom", "Australia"],
    "serviceType": "Digital Marketing"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content="digital marketing, SEO services, PPC management, free audit, marketing consultation, business growth" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData || defaultSchemaData)}
        </script>
      </Helmet>

      {/* CTA Section */}
      <section 
        className={`py-16 lg:py-24 ${getBackgroundClass()}`}
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Icon with semantic meaning */}
            <div className="flex justify-center" aria-hidden="true">
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

            {/* Content with proper heading structure */}
            <div className="space-y-6">
              <h2
                id="cta-heading"
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${getTextClass()}`}
              >
                {title}
              </h2>
              <p
                className={`text-lg md:text-xl ${
                  variant === "default"
                    ? "text-muted-foreground"
                    : "text-white/90"
                } max-w-2xl mx-auto leading-relaxed`}
              >
                {description}
              </p>
            </div>

            {/* Buttons with enhanced accessibility */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={onPrimaryClick}
                className={`group ${
                  variant === "default"
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-white text-primary hover:bg-white/90"
                } font-semibold`}
                aria-label={`${primaryButtonText} - Start your free marketing audit`}
              >
                {primaryButtonText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>

              {secondaryButtonText && (
                <Button
                  variant="outline"
                  size="lg"
                  onClick={onSecondaryClick}
                  className={
                    variant === "default"
                      ? ""
                      : "border-white/30 text-white hover:bg-white/10 hover:text-white"
                  }
                  aria-label={`${secondaryButtonText} - Book a strategy session`}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>

            {/* Stats with semantic markup */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
              role="group"
              aria-label="Business performance statistics"
            >
              <div className="text-center">
                <div
                  className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
                  aria-label="500 percent average return on investment"
                >
                  500%
                </div>
                <div
                  className={`text-sm ${
                    variant === "default" ? "text-muted-foreground" : "text-white/70"
                  } font-medium`}
                >
                  Average ROI
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
                  aria-label="Over 200 successful campaigns"
                >
                  200+
                </div>
                <div
                  className={`text-sm ${
                    variant === "default" ? "text-muted-foreground" : "text-white/70"
                  } font-medium`}
                >
                  Successful Campaigns
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
                  aria-label="Over 50 happy clients"
                >
                  50+
                </div>
                <div
                  className={`text-sm ${
                    variant === "default" ? "text-muted-foreground" : "text-white/70"
                  } font-medium`}
                >
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl lg:text-3xl font-bold ${getTextClass()}`}
                  aria-label="99 percent client retention rate"
                >
                  99%
                </div>
                <div
                  className={`text-sm ${
                    variant === "default" ? "text-muted-foreground" : "text-white/70"
                  } font-medium`}
                >
                  Client Retention
                </div>
              </div>
            </div>

            {/* Additional SEO-rich content */}
            <div className={`pt-8 text-sm ${variant === "default" ? "text-muted-foreground" : "text-white/70"}`}>
              <p>Free consultation • No commitment required • Results-driven strategies</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;