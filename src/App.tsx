import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplitLanding from "./pages/SplitLanding";
import NarrativePortfolio from "./pages/NarrativePortfolio";
import CybersecurityPortfolio from "./pages/CybersecurityPortfolio";
import FoquesQuestSystem from "./pages/FoquesQuestSystem";
import TravnikWorldBuilding from "./pages/TravnikWorldBuilding";
import SlaughterhouseProject from "./pages/SlaughterhouseProject";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplitLanding />} />
          <Route path="/narrative" element={<NarrativePortfolio />} />
          <Route path="/narrative/foques-quest-system" element={<FoquesQuestSystem />} />
          <Route path="/narrative/slaughterhouse" element={<SlaughterhouseProject />} />
          <Route path="/cybersecurity" element={<CybersecurityPortfolio />} />
          <Route path="/narrative/travnik-worldbuilding" element={<TravnikWorldBuilding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
