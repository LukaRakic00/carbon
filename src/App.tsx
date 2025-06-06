import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Frizideri from "./pages/Frizideri";
import MaliAparati from "./pages/MaliAparati";
import Televizori from "./pages/Televizori";
import Stajleri from "./pages/Stajleri";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/frizideri" element={<PageTransition><Frizideri /></PageTransition>} />
          <Route path="/mali-aparati" element={<PageTransition><MaliAparati /></PageTransition>} />
          <Route path="/televizori" element={<PageTransition><Televizori /></PageTransition>} />
          <Route path="/stajleri" element={<PageTransition><Stajleri /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
