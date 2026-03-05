import plans from "@/app/data/plans.json";
import CoverageCheck from "./coverage";
import FeaturedPlans from "./featured-plans";
import FinalCTA from "./final-cta";
import Hero from "./hero";
import Testimonials from "./testimonials";
import WhyChoose from "./why-choose-us";

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoverageCheck />
      <FeaturedPlans plans={plans} />
      <WhyChoose />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
