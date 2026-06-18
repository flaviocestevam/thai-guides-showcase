import SalesPage from "@/components/sales/SalesPage";
import { cursosDeMassagem } from "@/data/sales/cursosDeMassagem";
import heroImg from "@/assets/sales/cursos-massagem.jpg";
const CursosDeMassagem = () => <SalesPage c={{ ...cursosDeMassagem, heroImage: heroImg }} />;
export default CursosDeMassagem;
