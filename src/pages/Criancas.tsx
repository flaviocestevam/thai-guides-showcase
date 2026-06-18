import SalesPage from "@/components/sales/SalesPage";
import { criancas } from "@/data/sales/criancas";
import heroImg from "@/assets/generated/criancas-hero.png.asset.json";
const Criancas = () => <SalesPage c={{ ...criancas, heroImage: heroImg.url }} />;
export default Criancas;
