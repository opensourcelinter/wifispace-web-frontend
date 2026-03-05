"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const coveredAreas = ["Ikeja", "Lekki", "Yaba", "Gbagada"];

const areaOptions = [
  "Ikeja",
  "Ikeja GRA",
  "Lekki Phase 1",
  "Lekki Phase 2",
  "Yaba",
  "Gbagada",
  "Surulere",
  "Victoria Island",
  "Ikoyi",
  "Other / Specify",
];

export default function CoveragePage() {
  const [selectedArea, setSelectedArea] = useState("");
  const [customArea, setCustomArea] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState<null | {
    status: "available" | "pending" | "unavailable";
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
    <main className="min-h-screen bg-light">
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
          serve Ikeja, Lekki, Yaba, and Gbagada.
        </motion.p>

        <motion.form
          onSubmit={handleCheck}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger className="h-14 text-lg">
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
          </div>

          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number (for faster follow-up – optional)"
            className="h-14 text-lg"
          />

          <Button
            type="submit"
            size="lg"
            disabled={loading || (!selectedArea && !customArea)}
            className="w-full md:w-auto px-12 py-7 text-xl rounded-full shadow-lg"
          >
            {loading ? "Checking..." : "Check Coverage Now"}
          </Button>
        </motion.form>
      </section>

      {/* Result Display */}
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
                      <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20I'm%20in%20${encodeURIComponent(selectedArea || customArea)}">
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
                    <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20please%20update%20me%20when%20coverage%20reaches%20${encodeURIComponent(selectedArea || customArea)}">
                      Join Waitlist / Get Notified
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>
      )}

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Current Coverage in Lagos
          </h2>

          <div className="aspect-4/3 bg-gray-50 rounded-xl overflow-hidden border shadow-inner">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <rect width="800" height="600" fill="#f0f9ff" />

              <g>
                <rect
                  x="100"
                  y="100"
                  width="200"
                  height="150"
                  rx="10"
                  fill={coveredAreas.includes("Ikeja") ? "#10b981" : "#e5e7eb"}
                  opacity="0.7"
                />
                <text
                  x="200"
                  y="175"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Ikeja
                </text>
              </g>

              <g>
                <rect
                  x="500"
                  y="100"
                  width="220"
                  height="180"
                  rx="10"
                  fill={coveredAreas.includes("Lekki") ? "#10b981" : "#e5e7eb"}
                  opacity="0.7"
                />
                <text
                  x="610"
                  y="190"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Lekki
                </text>
              </g>

              <g>
                <rect
                  x="300"
                  y="300"
                  width="180"
                  height="140"
                  rx="10"
                  fill={coveredAreas.includes("Yaba") ? "#10b981" : "#e5e7eb"}
                  opacity="0.7"
                />
                <text
                  x="390"
                  y="370"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Yaba
                </text>
              </g>

              <g>
                <rect
                  x="400"
                  y="450"
                  width="200"
                  height="120"
                  rx="10"
                  fill={
                    coveredAreas.includes("Gbagada") ? "#10b981" : "#e5e7eb"
                  }
                  opacity="0.7"
                />
                <text
                  x="500"
                  y="510"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  Gbagada
                </text>
              </g>
            </svg>
          </div>

          <p className="text-center mt-6 text-gray-600">
            Hover or tap areas to see coverage status (green = currently
            available).
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Currently Covered Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coveredAreas.map((area) => (
              <div
                key={area}
                className="bg-white p-6 rounded-xl shadow-sm border border-green-200"
              >
                <CheckCircle2 className="mx-auto mb-3 text-green-500 h-10 w-10" />
                <p className="font-semibold text-lg">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Coverage FAQs
          </h2>
        </div>
      </section>

      <section className="py-20 bg-primary/10 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Connected?</h2>
        <p className="text-xl mb-10">
          If available in your area, let's get you online fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" asChild className="rounded-full px-10">
            <Link href="/plans">See Plans</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 border-primary text-primary"
          >
            <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20coverage%20question">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
