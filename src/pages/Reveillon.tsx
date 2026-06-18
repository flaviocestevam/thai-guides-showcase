import SalesPage from "@/components/sales/SalesPage";
import { reveillon } from "@/data/sales/reveillon";
import heroImg from "@/assets/sales/reveillon.jpg";
const Reveillon = () => <SalesPage c={{ ...reveillon, heroImage: heroImg }} />;
export default Reveillon;
