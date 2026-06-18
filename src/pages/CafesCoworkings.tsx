import SalesPage from "@/components/sales/SalesPage";
import { cafesCoworkings } from "@/data/sales/cafesCoworkings";
import heroImg from "@/assets/generated/cafes-coworkings-hero.png.asset.json";
const CafesCoworkings = () => <SalesPage c={{ ...cafesCoworkings, heroImage: heroImg.url }} />;
export default CafesCoworkings;
