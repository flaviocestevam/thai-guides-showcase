import SalesPage from "@/components/sales/SalesPage";
import { clubesStrip } from "@/data/sales/clubesStrip";
import heroImg from "@/assets/generated/clubes-strip-hero.png.asset.json";
const ClubesStrip = () => <SalesPage c={{ ...clubesStrip, heroImage: heroImg.url }} />;
export default ClubesStrip;
