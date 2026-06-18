import SalesPage from "@/components/sales/SalesPage";
import { mergulho } from "@/data/sales/mergulho";
import heroImg from "@/assets/sales/mergulho.jpg";
const Mergulho = () => <SalesPage c={{ ...mergulho, heroImage: heroImg }} />;
export default Mergulho;
