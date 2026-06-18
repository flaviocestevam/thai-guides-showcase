import SalesPage from "@/components/sales/SalesPage";
import { mergulho } from "@/data/sales/mergulho";
import heroImg from "@/assets/generated/mergulho-hero.png.asset.json";
const Mergulho = () => <SalesPage c={{ ...mergulho, heroImage: heroImg.url }} />;
export default Mergulho;
