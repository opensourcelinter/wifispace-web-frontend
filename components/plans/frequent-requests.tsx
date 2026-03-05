import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentRequests() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-dark">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="unlimited">
            <AccordionTrigger>Are the plans truly unlimited?</AccordionTrigger>
            <AccordionContent>
              Yes — no hard data caps or throttling on normal usage. We apply a
              fair usage policy only for extreme/abusive consumption to keep the
              network fair for everyone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="installation">
            <AccordionTrigger>
              What is the installation process and cost?
            </AccordionTrigger>
            <AccordionContent>
              Survey + setup in 48-72 hours for covered areas. Free on
              Standard/Pro plans; ₦20,000 on Starter (waived on annual billing).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="switch">
            <AccordionTrigger>
              Can I switch plans or billing anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes — upgrades are immediate; downgrades at next cycle. No lock-in
              contracts.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
