import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import LegalPage from "@/components/PrivacyPolicyPage";
import Seo from "@/components/Seo";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider, localizedPath, useLanguage } from "@/contexts/LanguageContext";
import { normalizeRoute } from "@/lib/siteContent";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DigitalPlatform from "@/pages/DigitalPlatform";
import Global from "@/pages/Global";
import Home from "@/pages/Home";
import Inquiry from "@/pages/Inquiry";
import NotFound from "@/pages/NotFound";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Partners from "@/pages/Partners";
import Services from "@/pages/Services";
import Terms from "@/pages/Terms";
import { useLocation } from "wouter";

function Router() {
  const [location] = useLocation();
  const { lang } = useLanguage();
  const path = normalizeRoute(location);

  switch (path) {
    case "/":
      return <Home />;
    case "/products":
      return <Products />;
    case "/products/down-jackets":
      return <ProductDetail slug="down-jackets" />;
    case "/products/technical-shells":
      return <ProductDetail slug="technical-shells" />;
    case "/products/skiwear":
      return <ProductDetail slug="skiwear" />;
    case "/products/double-faced-coats":
      return <ProductDetail slug="double-faced-coats" />;
    case "/products/fur-shearling":
      return <ProductDetail slug="fur-shearling" />;
    case "/products/down-bedding":
      return <ProductDetail slug="down-bedding" />;
    case "/services":
      return <Services />;
    case "/partners":
      return <Partners />;
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
      return (
        <>
          <Seo pageKey="privacy" />
          <LegalPage type="privacy" onBack={() => window.location.assign(localizedPath("/", lang))} />
        </>
      );
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
