import Footer from "../footer";
import ComparisonTable from "./comparison-table";
import PlansPage from "./plans-page";
import plans from "@/app/data/plans.json";

export default function Plans() {
  return (
    <>
      <main className="min-h-screen">
        <PlansPage />
      </main>
      <Footer />
    </>
  );
}
