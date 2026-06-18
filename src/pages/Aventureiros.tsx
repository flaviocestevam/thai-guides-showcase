import SalesPage from "@/components/sales/SalesPage";
import { aventureiros } from "@/data/sales/aventureiros";
import heroImg from "@/assets/sales/aventureiros.jpg";
const Aventureiros = () => <SalesPage c={{ ...aventureiros, heroImage: heroImg }} />;
export default Aventureiros;
