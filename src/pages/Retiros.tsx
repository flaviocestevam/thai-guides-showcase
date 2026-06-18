import SalesPage from "@/components/sales/SalesPage";
import { retiros } from "@/data/sales/retiros";
import heroImg from "@/assets/sales/retiros.webp";
const Retiros = () => <SalesPage c={{ ...retiros, heroImage: heroImg }} />;
export default Retiros;
