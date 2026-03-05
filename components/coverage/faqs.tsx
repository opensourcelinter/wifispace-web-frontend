import coverageFaq from "@/app/data/faqs/coverage.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function CoverageFAQS() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Coverage FAQs
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {coverageFaq.map((faq, index) => (
            <AccordionItem value={`${index}`} key={index}>
              <AccordionTrigger>{faq.request}</AccordionTrigger>
              <AccordionContent>{faq.reply}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
