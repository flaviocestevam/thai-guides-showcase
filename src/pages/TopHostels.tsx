import SalesPage from "@/components/sales/SalesPage";
import { topHostels } from "@/data/sales/topHostels";
import heroImg from "@/assets/sales/top-hostels.webp";
const TopHostels = () => <SalesPage c={{ ...topHostels, heroImage: heroImg }} />;
export default TopHostels;
