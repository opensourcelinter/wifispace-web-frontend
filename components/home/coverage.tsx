"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Loader2,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WHATSAPP_HOTLINE } from "@/constants";

interface CoverageResult {
  type: "success" | "pending" | "unavailable";
  message: string;
}

export default function CoverageCheck() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<CoverageResult>();
  const [loading, setLoading] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const q = query.toLowerCase().trim();

      const covered = [
        "lekki",
        "ikoyi",
        "victoria island",
        "ikeja",
        "surulere",
        "yaba",
        "maryland",
        "festac",
        "gbagada",
        "magodo",
        "ajah",
      ];
      const upcoming = ["lekki phase 2", "badore", "abuja", "port harcourt"];

      let newResult: CoverageResult;

      if (covered.some((area) => q.includes(area))) {
        newResult = {
          type: "success",
          message: `Great news! WifiSpace is currently available in ${query.trim()}. Most installations are completed within 48–72 hours.`,
        };
      } else if (upcoming.some((area) => q.includes(area))) {
        newResult = {
          type: "pending",
          message: `We're actively expanding to ${query.trim()}. Join our priority waitlist — we'll notify you as soon as service is live in your area.`,
        };
      } else {
        newResult = {
          type: "unavailable",
          message: `Sorry, WifiSpace isn't available in ${query.trim()} yet. We're growing fast across Lagos — check back soon or reach out to us!`,
        };
      }

      setResult(newResult);
      setLoading(false);
    }, 900);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-5 w-5" />;
      case "pending":
        return <Clock className="h-5 w-5" />;
      case "unavailable":
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-4 text-primary">
            <MapPin className="h-6 w-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Check Coverage in Your Area
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enter your estate, street, or area name — we'll instantly tell you
            if we're live there or when we're coming.
          </p>
        </div>

        <form onSubmit={handleCheck} className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-2">
            <Label htmlFor="location">Your Location / Estate</Label>
            <Input
              id="location"
              placeholder="Lekki Phase 1, Ikeja GRA, Victoria Island, Surulere..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 text-base"
              required
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-12 text-base sm:text-lg font-medium cursor-pointer"
            disabled={loading || !query.trim()}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Checking Coverage...
              </>
            ) : (
              "Check Coverage Now"
            )}
          </Button>
        </form>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
              <div className="shrink-0 mt-1">{getIcon(result.type)}</div>

              <div className="flex-1 space-y-3">
                <AlertTitle className="text-xl font-semibold leading-tight">
                  {result.type === "success" && "We're Live Here!"}
                  {result.type === "pending" && "Coming Soon"}
                  {result.type === "unavailable" && "Not Available Yet"}
                </AlertTitle>

                <AlertDescription className="text-base leading-relaxed text-muted-foreground">
                  {result.message}
                </AlertDescription>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto min-w-45">
                <a href="/plans">View Available Plans</a>
              </Button>

              {(result.type === "pending" || result.type === "unavailable") && (
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto min-w-50 gap-2 bg-[#25D366] hover:bg-[#20bd5f] text-white shadow-sm"
                >
                  <a
                    href={`${WHATSAPP_HOTLINE}?text=Hi%20there%2C%20I%20have%20a%20question%20about%20your%20services`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle />
                    Chat on WhatsApp
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        )}

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <span className="font-medium text-foreground">
            Currently available in:
          </span>{" "}
          Lekki, Ikoyi, Victoria Island, Ikeja, Surulere, Yaba, Gbagada,
          Maryland, Festac, Magodo, Ajah...
          <span className="block mt-1.5 italic">
            More areas across Lagos added every month
          </span>
        </div>
      </div>
    </section>
  );
}
