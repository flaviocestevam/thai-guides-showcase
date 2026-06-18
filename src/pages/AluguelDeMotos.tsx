import SalesPage from "@/components/sales/SalesPage";
import { aluguelDeMotos } from "@/data/sales/aluguelDeMotos";
import heroImg from "@/assets/sales/aluguel-motos.jpg";
const AluguelDeMotos = () => <SalesPage c={{ ...aluguelDeMotos, heroImage: heroImg }} />;
export default AluguelDeMotos;
