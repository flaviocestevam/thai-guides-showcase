import SalesPage from "@/components/sales/SalesPage";
import { ilhas } from "@/data/sales/ilhas";
import NotFound from "./NotFound";

const IlhaPage = ({ slug }: { slug: string }) => {
  const c = ilhas[slug];
  if (!c) return <NotFound />;
  return <SalesPage c={c} />;
};

export default IlhaPage;
