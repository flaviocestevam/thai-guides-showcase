import SalesPage from "@/components/sales/SalesPage";
import { pets } from "@/data/sales/pets";
import heroImg from "@/assets/sales/pets.jpg";
const Pets = () => <SalesPage c={{ ...pets, heroImage: heroImg }} />;
export default Pets;
