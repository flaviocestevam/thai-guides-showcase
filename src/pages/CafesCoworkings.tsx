import SalesPage from "@/components/sales/SalesPage";
import { cafesCoworkings } from "@/data/sales/cafesCoworkings";
import heroImg from "@/assets/sales/cafes-coworkings.webp";
const CafesCoworkings = () => <SalesPage c={{ ...cafesCoworkings, heroImage: heroImg }} />;
export default CafesCoworkings;
