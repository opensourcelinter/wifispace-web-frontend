import { WHATSAPP_HOTLINE } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTAButton() {
  return (
    <section className="py-20 bg-linear-to-br from-primary/10 to-secondary/5 text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Get Connected?
      </h2>
      <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
        Coverage check is quick — most customers are online within days.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button size="lg" asChild className="text-lg rounded-full px-10">
          <Link href="/coverage">Check Coverage Now</Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="text-lg rounded-full px-10 border-primary text-primary"
        >
          <a
            href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20help%20me%20choose%20a%20plan`}
          >
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
