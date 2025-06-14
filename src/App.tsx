import './components/carbon-glow-btn.css';
import './components/carbon-call-btn.css';
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
import PolitikaPrivatnosti from './pages/PolitikaPrivatnosti';
import CookieConsent from 'react-cookie-consent';
import { useEffect } from 'react';
import PolitikaKolacica from './pages/PolitikaKolacica';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const queryClient = new QueryClient();
const GA_MEASUREMENT_ID = 'G-XXXXXXX'; // <-- OVDE unesi svoj Measurement ID

function loadGAScript() {
  if (window.gtag) return; // već je učitan
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);
  const script2 = document.createElement('script');
  script2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`;
  document.head.appendChild(script2);
}

const App = () => {
  useEffect(() => {
    // Ako je korisnik već prihvatio kolačiće ranije
    if (document.cookie.includes('CookieConsent=true')) {
      loadGAScript();
    }
  }, []);

  return (
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
            <Route path="/politika-privatnosti" element={<PageTransition><PolitikaPrivatnosti /></PageTransition>} />
            <Route path="/politika-kolacica" element={<PageTransition><PolitikaKolacica /></PageTransition>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
          <CookieConsent
            location="bottom"
            buttonText="Prihvati sve kolačiće"
            style={{ background: "#fff", color: "#222", fontSize: "1.05rem", borderTop: "1px solid #e5e7eb", boxShadow: "0 2px 16px 0 rgba(37,99,235,0.07)", padding: "1.2rem 2vw", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 9999 }}
            buttonStyle={{ color: "#fff", background: "#60a5fa", fontWeight: "bold", borderRadius: "2rem", fontSize: "1.1rem", padding: "0.7rem 2.2rem", boxShadow: "0 2px 8px #60a5fa33", border: "none", marginLeft: "2rem" }}
            expires={150}
            onAccept={loadGAScript}
            contentStyle={{ flex: 1, marginRight: 24 }}
          >
            Dobro došli na carbon.co.rs! Ovo obaveštenje je važno za vašu privatnost. Kako bismo pratili posete sajta, personalizovali reklame i poboljšali korisničko iskustvo, potrebna nam je vaša saglasnost za korišćenje kolačića (cookies) i sličnih tehnologija. Klikom na "Prihvati sve kolačiće" prihvatate sve kolačiće, a klikom na <a href="/politika-kolacica" style={{ color: "#222", textDecoration: "underline", fontWeight: 500, marginLeft: 8 }}>Više informacija</a> otvarate detaljnije objašnjenje i možete sami da podesite koje kolačiće prihvatate. Hvala što koristite carbon.co.rs!
          </CookieConsent>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
