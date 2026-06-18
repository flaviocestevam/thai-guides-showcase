import SalesPage from "@/components/sales/SalesPage";
import { reveillon } from "@/data/sales/reveillon";
import heroImg from "@/assets/generated/reveillon-hero.png.asset.json";
const Reveillon = () => <SalesPage c={{ ...reveillon, heroImage: heroImg.url }} />;
export default Reveillon;
