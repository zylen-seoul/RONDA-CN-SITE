import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import LegalPage from "@/components/PrivacyPolicyPage";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { normalizeRoute } from "@/lib/siteContent";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DigitalPlatform from "@/pages/DigitalPlatform";
import Global from "@/pages/Global";
import Home from "@/pages/Home";
import Inquiry from "@/pages/Inquiry";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Products";
import Services from "@/pages/Services";
import Terms from "@/pages/Terms";
import { useLocation } from "wouter";

function Router() {
  const [location] = useLocation();
  const path = normalizeRoute(location);

  switch (path) {
    case "/":
      return <Home />;
    case "/products":
      return <Products />;
    case "/services":
      return <Services />;
    case "/digital-platform":
      return <DigitalPlatform />;
    case "/about":
      return <About />;
    case "/global":
      return <Global />;
    case "/contact":
      return <Contact />;
    case "/inquiry":
      return <Inquiry />;
    case "/privacy":
      return <LegalPage type="privacy" onBack={() => window.location.assign("/")} />;
    case "/terms":
      return <Terms />;
    case "/404":
      return <NotFound />;
    default:
      return <NotFound />;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
