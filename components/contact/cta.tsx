import { Button } from "@/components/ui/button";
import { WHATSAPP_HOTLINE } from "@/constants";

export default function ContactCTA() {
  return (
    <section className="py-20 text-center px-6 bg-primary/5">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        We're Just a Message Away
      </h2>
      <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-700">
        Whether it's a quick question or a full setup enquiry — drop us a line.
        Lagos style: fast and friendly.
      </p>
      <Button asChild size="lg" className="rounded-full px-12">
        <a
          href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20I'm%20reaching%20out%20from%20your%20contact%20page`}
        >
          Open WhatsApp Now
        </a>
      </Button>
    </section>
  );
}
