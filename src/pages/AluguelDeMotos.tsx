import SalesPage from "@/components/sales/SalesPage";
import { aluguelDeMotos } from "@/data/sales/aluguelDeMotos";
import heroImg from "@/assets/generated/aluguel-motos-hero.png.asset.json";
const AluguelDeMotos = () => <SalesPage c={{ ...aluguelDeMotos, heroImage: heroImg.url }} />;
export default AluguelDeMotos;
