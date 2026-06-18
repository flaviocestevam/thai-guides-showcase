import SalesPage from "@/components/sales/SalesPage";
import { criancas } from "@/data/sales/criancas";
import heroImg from "@/assets/sales/criancas.jpg";
const Criancas = () => <SalesPage c={{ ...criancas, heroImage: heroImg }} />;
export default Criancas;
