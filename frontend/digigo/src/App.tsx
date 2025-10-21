import { HelmetProvider } from "react-helmet-async";
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";

// Import all service pages directly
import WebDevelopmentPage from "./pages/WebDevelopment";
import SEOServicesPage from "./pages/SEOPage";
import PPCServicesPage from "./pages/PPCPage";
import SocialMediaPage from "./pages/SocialMediaPage";
import ContentMarketingPage from "./pages/ContentMarketingPage";
import EmailMarketingPage from "./pages/EmailMarketingPage";
import EcommerceMarketing from "./pages/EcommerceMarketing"

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* <Sonner /> */}
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/web-development" element={<WebDevelopmentPage />} />
              <Route path="/seo" element={<SEOServicesPage />} />
              <Route path="/ppc" element={<PPCServicesPage />} />
              <Route path="/social-media" element={<SocialMediaPage />} />
              <Route path="/content-marketing" element={<ContentMarketingPage />} />
              <Route path="/email-marketing" element={<EmailMarketingPage />} />
              <Route path="/ecommerce-marketing" element={<EcommerceMarketing />} />
              <Route path="/portfolio" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
        {/* <Toaster /> */}
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;