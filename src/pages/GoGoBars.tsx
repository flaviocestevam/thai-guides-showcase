import SalesPage from "@/components/sales/SalesPage";
import { goGoBars } from "@/data/sales/goGoBars";
import heroImg from "@/assets/generated/go-go-bars-hero.png.asset.json";
const GoGoBars = () => <SalesPage c={{ ...goGoBars, heroImage: heroImg.url }} />;
export default GoGoBars;
