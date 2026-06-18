import SalesPage from "@/components/sales/SalesPage";
import { clubesStrip } from "@/data/sales/clubesStrip";
import heroImg from "@/assets/sales/clubes-strip.webp";
const ClubesStrip = () => <SalesPage c={{ ...clubesStrip, heroImage: heroImg }} />;
export default ClubesStrip;
