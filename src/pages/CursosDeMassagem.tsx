import SalesPage from "@/components/sales/SalesPage";
import { cursosDeMassagem } from "@/data/sales/cursosDeMassagem";
import heroImg from "@/assets/generated/cursos-massagem-hero.png.asset.json";
const CursosDeMassagem = () => <SalesPage c={{ ...cursosDeMassagem, heroImage: heroImg.url }} />;
export default CursosDeMassagem;
