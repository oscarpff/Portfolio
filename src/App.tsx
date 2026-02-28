import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplitLanding from "./pages/SplitLanding";
import NarrativePortfolio from "./pages/narrative/NarrativePortfolio";
import CybersecurityPortfolio from "./pages/cyber/CybersecurityPortfolio";
import FoquesQuestSystem from "./pages/narrative/FoquesQuestSystem";
import TravnikWorldBuilding from "./pages/narrative/TravnikWorldBuilding";
import SlaughterhouseProject from "./pages/narrative/SlaughterhouseProject";
import TheDayAfterProject from "./pages/narrative/TheDayAfterProject";
import Ward404CTF from "./pages/cyber/Ward404CTF";
import SecureWatchProject from "./pages/cyber/SecureWatchProject";
import SherlockBrutus from "./pages/cyber/SherlockBrutus";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/ND_Portfolio">
        <Routes>
          <Route path="/" element={<SplitLanding />} />
          <Route path="/narrative" element={<NarrativePortfolio />} />
          <Route path="/narrative/foques-quest-system" element={<FoquesQuestSystem />} />
          <Route path="/narrative/slaughterhouse" element={<SlaughterhouseProject />} />
          <Route path="/narrative/the-day-after" element={<TheDayAfterProject />} />
          <Route path="/cybersecurity" element={<CybersecurityPortfolio />} />
          <Route path="/cybersecurity/ward404-ctf" element={<Ward404CTF />} />
          <Route path="/cybersecurity/securewatch" element={<SecureWatchProject />} />
          <Route path="/cybersecurity/sherlock-brutus" element={<SherlockBrutus />} />
          <Route path="/narrative/travnik-worldbuilding" element={<TravnikWorldBuilding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
