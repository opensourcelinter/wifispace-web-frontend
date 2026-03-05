import areaOptions from "@/app/data/areas/area-options.json";
import coveredAreas from "@/app/data/areas/covered-areas.json";
import { WHATSAPP_HOTLINE } from "@/constants";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Status } from "./coverage-page";

export default function CoverageHero() {
  const [selectedArea, setSelectedArea] = useState("");
  const [customArea, setCustomArea] = useState("");
  const [result, setResult] = useState<null | {
    status: Status;
    message: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const areaToCheck =
      selectedArea === "Other / Specify" ? customArea.trim() : selectedArea;

    setTimeout(() => {
      if (!areaToCheck) {
        setResult({
          status: "unavailable",
          message: "Please enter or select an area to check.",
        });
      } else if (
        coveredAreas.some((c) =>
          areaToCheck.toLowerCase().includes(c.toLowerCase()),
        )
      ) {
        setResult({
          status: "available",
          message: `Great news! WifiSpace is currently available in ${areaToCheck}. You can get connected in 48-72 hours.`,
        });
      } else {
        setResult({
          status: "unavailable",
          message: `Sorry, WifiSpace is not yet available in ${areaToCheck}. We're focused on expanding in key Lagos areas — check back soon or contact us for updates!`,
        });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-dark"
        >
          Check WifiSpace Coverage in Lagos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-12"
        >
          Enter or select your area below for instant results. We currently
          serve Ikeja, Agege, Ogba, Iyana-Ipaja, and Aboru.
        </motion.p>

        <motion.form
          onSubmit={handleCheck}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div>
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="h-14 text-lg w-full">
                <SelectValue placeholder="Select your area / estate / LGA" />
              </SelectTrigger>
              <SelectContent>
                {areaOptions.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedArea === "Other / Specify" && (
            <Input
              value={customArea}
              onChange={(e) => setCustomArea(e.target.value)}
              placeholder="Type your area / street / estate"
              className="h-14 text-lg"
              required
            />
          )}

          <Button
            type="submit"
            size="lg"
            disabled={loading || (!selectedArea && !customArea)}
            className="w-full md:w-auto px-12 py-7 text-xl rounded-full shadow-lg cursor-pointer"
          >
            {loading ? "Checking..." : "Check Coverage Now"}
          </Button>
        </motion.form>
      </section>

      {result && (
        <section className="py-12 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <Card
              className={`border-l-8 ${
                result.status === "available"
                  ? "border-green-500"
                  : result.status === "pending"
                    ? "border-yellow-500"
                    : "border-red-500"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {result.status === "available" ? (
                    <CheckCircle2 className="text-green-500 h-8 w-8" />
                  ) : result.status === "pending" ? (
                    <Clock className="text-yellow-500 h-8 w-8" />
                  ) : (
                    <AlertCircle className="text-red-500 h-8 w-8" />
                  )}
                  Coverage Result
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">{result.message}</p>

                {result.status === "available" && (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="rounded-full">
                      <Link href="/plans">View Plans & Subscribe</Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-primary text-primary"
                    >
                      <a
                        href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20I'm%20in%20${encodeURIComponent(selectedArea || customArea)}`}
                      >
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                )}

                {result.status !== "available" && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-primary text-primary"
                  >
                    <a
                      href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20please%20update%20me%20when%20coverage%20reaches%20${encodeURIComponent(selectedArea || customArea)}`}
                    >
                      Join Waitlist / Get Notified
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}
    </>
  );
}
