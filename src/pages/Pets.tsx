import SalesPage from "@/components/sales/SalesPage";
import { pets } from "@/data/sales/pets";
import heroImg from "@/assets/generated/pets-hero.png.asset.json";
const Pets = () => <SalesPage c={{ ...pets, heroImage: heroImg.url }} />;
export default Pets;
