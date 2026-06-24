import SalesPage from "@/components/sales/SalesPage";
import { aventureiros } from "@/data/sales/aventureiros";
import heroImg from "@/assets/generated/aventureiros-hero.png.asset.json";

const Aventureiros = () => (
  <SalesPage c={{ ...aventureiros, heroImage: heroImg.url }} />
);

export default Aventureiros;
