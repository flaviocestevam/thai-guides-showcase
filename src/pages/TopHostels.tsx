import SalesPage from "@/components/sales/SalesPage";
import { topHostels } from "@/data/sales/topHostels";
import heroImg from "@/assets/generated/top-hostels-hero.png.asset.json";
const TopHostels = () => <SalesPage c={{ ...topHostels, heroImage: heroImg.url }} />;
export default TopHostels;
