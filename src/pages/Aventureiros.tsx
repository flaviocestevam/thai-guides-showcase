import SalesPage from "@/components/sales/SalesPage";
import { aventureiros } from "@/data/sales/aventureiros";
import heroImg from "@/assets/generated/aventureiros-hero.png.asset.json";
import { RelatedAdventureGuides } from "@/components/RelatedAdventureGuides";

const Aventureiros = () => (
  <SalesPage
    c={{ ...aventureiros, heroImage: heroImg.url }}
    extraSection={<RelatedAdventureGuides currentPath="/tailandia-para-aventureiros" />}
  />
);

export default Aventureiros;
