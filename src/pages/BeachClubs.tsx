import SalesPage from "@/components/sales/SalesPage";
import { beachClubs } from "@/data/sales/beachClubs";
import heroImg from "@/assets/generated/beach-clubs-hero.png.asset.json";
const BeachClubs = () => <SalesPage c={{ ...beachClubs, heroImage: heroImg.url }} />;
export default BeachClubs;
