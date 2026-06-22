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
import Festas7733 from "./pages/Festas7733.tsx";
import GoGoBars8855 from "./pages/GoGoBars8855.tsx";
import Pets9922 from "./pages/Pets9922.tsx";
import Criancas7811 from "./pages/Criancas7811.tsx";

import GuiaTrilhasThai44 from "./pages/GuiaTrilhasThai44.tsx";
import GuiaTrilhasThai from "./pages/GuiaTrilhasThai.tsx";
import GuiaVoluntariado from "./pages/GuiaVoluntariado.tsx";
import Voluntariado4827 from "./pages/Voluntariado4827.tsx";
import GuiaGays from "./pages/GuiaGays.tsx";
import TailandiaParaGays0325257 from "./pages/TailandiaParaGays0325257.tsx";
import GuiaSongkran from "./pages/GuiaSongkran.tsx";
import Songkran9482 from "./pages/Songkran9482.tsx";

import GuiaLuaDeMel from "./pages/GuiaLuaDeMel.tsx";
import LuaDeMel8272524 from "./pages/LuaDeMel8272524.tsx";
import CursosDeMassagem from "./pages/CursosDeMassagem.tsx";
import CursosMassagem3367 from "./pages/CursosMassagem3367.tsx";
import AluguelDeMotos from "./pages/AluguelDeMotos.tsx";
import AluguelDeMotos827252 from "./pages/AluguelDeMotos827252.tsx";
import Mergulho from "./pages/Mergulho.tsx";
import MergulhoTailandia465355 from "./pages/MergulhoTailandia465355.tsx";
import CafesCoworkings from "./pages/CafesCoworkings.tsx";
import CafesCoworkings7391 from "./pages/CafesCoworkings7391.tsx";
import ClubesStrip from "./pages/ClubesStrip.tsx";
import ClubesStrip6644 from "./pages/ClubesStrip6644.tsx";
import GoGoBars from "./pages/GoGoBars.tsx";
import Reveillon from "./pages/Reveillon.tsx";
import Reveillon67729 from "./pages/Reveillon67729.tsx";
import TopHostels from "./pages/TopHostels.tsx";
import Aventureiros from "./pages/Aventureiros.tsx";
import BeachClubs from "./pages/BeachClubs.tsx";
import BeachClubs8821 from "./pages/BeachClubs8821.tsx";
import Pets from "./pages/Pets.tsx";
import Criancas from "./pages/Criancas.tsx";
import CasasDeMassagem from "./pages/CasasDeMassagem.tsx";
import Retiros from "./pages/Retiros.tsx";
import Ilhas from "./pages/Ilhas.tsx";
import IlhaPage from "./pages/IlhaPage.tsx";
import { ilhasMeta } from "./data/sales/ilhas";
import ExportCopyAuditoria from "./pages/ExportCopyAuditoria.tsx";
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
          <Route path="/festas7733" element={<Festas7733 />} />
          
          <Route path="/guiatrilhasthai44" element={<GuiaTrilhasThai44 />} />
          <Route path="/guiatrilhasthai" element={<GuiaTrilhasThai />} />
          <Route path="/voluntariado-tailandia" element={<GuiaVoluntariado />} />
          <Route path="/voluntariado4827" element={<Voluntariado4827 />} />
          <Route path="/tailandia-para-gays" element={<GuiaGays />} />
          <Route path="/tailandia-para-gays0325257" element={<TailandiaParaGays0325257 />} />
          <Route path="/songkran-ano-novo-tailandes" element={<GuiaSongkran />} />
          <Route path="/songkran9482" element={<Songkran9482 />} />

          <Route path="/lua-de-mel-tailandia" element={<GuiaLuaDeMel />} />
          <Route path="/lua-de-mel-tailandia8272524" element={<LuaDeMel8272524 />} />
          <Route path="/cursos-de-massagem" element={<CursosDeMassagem />} />
          <Route path="/cursosmassagem3367" element={<CursosMassagem3367 />} />
          <Route path="/aluguel-de-motos-tailandia" element={<AluguelDeMotos />} />
          <Route path="/aluguel-de-motos-tailandia827252" element={<AluguelDeMotos827252 />} />
          <Route path="/mergulho-tailandia" element={<Mergulho />} />
          <Route path="/mergulho-tailandia465355" element={<MergulhoTailandia465355 />} />
          <Route path="/cafes-e-coworkings-tailandia" element={<CafesCoworkings />} />
          <Route path="/cafescoworkings7391" element={<CafesCoworkings7391 />} />
          <Route path="/clubes-de-strip-tailandia" element={<ClubesStrip />} />
          <Route path="/clubesstrip6644" element={<ClubesStrip6644 />} />
          <Route path="/go-go-bars-tailandia" element={<GoGoBars />} />
          <Route path="/gogobars8855" element={<GoGoBars8855 />} />
          <Route path="/reveillon-tailandia" element={<Reveillon />} />
          <Route path="/reveillon-tailandia67729" element={<Reveillon67729 />} />
          <Route path="/top-hostels-tailandia" element={<TopHostels />} />
          <Route path="/tailandia-para-aventureiros" element={<Aventureiros />} />
          <Route path="/beach-clubs-tailandia" element={<BeachClubs />} />
          <Route path="/beachclubs8821" element={<BeachClubs8821 />} />
          <Route path="/tailandia-para-pets" element={<Pets />} />
          <Route path="/pets9922" element={<Pets9922 />} />
          <Route path="/tailandia-para-criancas" element={<Criancas />} />
          <Route path="/casas-de-massagem-tailandia" element={<CasasDeMassagem />} />
          <Route path="/retiros-tailandia" element={<Retiros />} />

          {/* ===== Categoria Ilhas ===== */}
          <Route path="/ilhas" element={<Ilhas />} />
          {ilhasMeta.map((ilha) => (
            <Route
              key={ilha.slug}
              path={`/${ilha.slug}`}
              element={<IlhaPage slug={ilha.slug} />}
            />
          ))}

          <Route path="/export-copy-auditoria" element={<ExportCopyAuditoria />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
