import SalesPage from "@/components/sales/SalesPage";
import { beachClubs } from "@/data/sales/beachClubs";
import heroImg from "@/assets/sales/beach-clubs.webp";
const BeachClubs = () => <SalesPage c={{ ...beachClubs, heroImage: heroImg }} />;
export default BeachClubs;
