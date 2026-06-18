import SalesPage from "@/components/sales/SalesPage";
import { pets } from "@/data/sales/pets";
import heroImg from "@/assets/sales/pets.webp";
const Pets = () => <SalesPage c={{ ...pets, heroImage: heroImg }} />;
export default Pets;
