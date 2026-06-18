import SalesPage from "@/components/sales/SalesPage";
import { goGoBars } from "@/data/sales/goGoBars";
import heroImg from "@/assets/sales/go-go-bars.webp";
const GoGoBars = () => <SalesPage c={{ ...goGoBars, heroImage: heroImg }} />;
export default GoGoBars;
