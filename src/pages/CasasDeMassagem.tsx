import SalesPage from "@/components/sales/SalesPage";
import { casasDeMassagem } from "@/data/sales/casasDeMassagem";
import heroImg from "@/assets/sales/casas-massagem.jpg";
const CasasDeMassagem = () => <SalesPage c={{ ...casasDeMassagem, heroImage: heroImg }} />;
export default CasasDeMassagem;
