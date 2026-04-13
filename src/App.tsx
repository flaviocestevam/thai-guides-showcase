import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FestivalDasLanternas from "./pages/FestivalDasLanternas.tsx";
import SantuariosDeElefantes from "./pages/SantuariosDeElefantes.tsx";
import LanternFestival from "./pages/LanternFestival.tsx";
import MuayThai from "./pages/MuayThai.tsx";
import MuayThai5645 from "./pages/MuayThai5645.tsx";
import Festas from "./pages/Festas.tsx";
import CityPage from "./pages/CityPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/festivaldaslanternas" element={<FestivalDasLanternas />} />
          <Route path="/santuariosdeelefantes" element={<SantuariosDeElefantes />} />
          <Route path="/lanternfestival" element={<LanternFestival />} />
          <Route path="/muaythai" element={<MuayThai />} />
          <Route path="/muaythai5645" element={<MuayThai5645 />} />
          <Route path="/festas" element={<Festas />} />
          <Route path="/festas/:cityId" element={<CityPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
