import SalesPage from "@/components/sales/SalesPage";
import { aluguelDeMotos } from "@/data/sales/aluguelDeMotos";
import heroImg from "@/assets/sales/aluguel-motos.webp";
const AluguelDeMotos = () => <SalesPage c={{ ...aluguelDeMotos, heroImage: heroImg }} />;
export default AluguelDeMotos;
