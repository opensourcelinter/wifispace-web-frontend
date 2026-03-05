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
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_HOTLINE } from "@/constants";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-light">
      <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-32 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-dark"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
        >
          We're a Lagos team — reach us fast on WhatsApp, call, or fill the form
          below. We're here to help.
        </motion.p>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full">
                  <MessageSquare className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-2xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Fastest way to reach us</p>
                <Button
                  asChild
                  size="lg"
                  className="w-full rounded-full bg-green-600 hover:bg-green-700"
                >
                  <a
                    href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20I%20need%20help%20with...`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full">
                  <Phone className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-2">+234 XXX XXX XXXX</p>
                <p className="text-lg mb-4">Lagos lines</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer"
                >
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-red-100 rounded-full">
                  <Mail className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium mb-4">
                  support@WifiSpace.com
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full cursor-pointer"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full">
                  <MapPin className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2">[Your Office Address]</p>
                <p className="text-sm text-gray-600 mb-4">Lagos, Nigeria</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full cursor-pointer"
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <p className="text-gray-600 mt-2">
                  We'll get back to you as soon as possible (WhatsApp is
                  fastest!)
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder="Your name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email (optional)
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Choose enquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">
                          New Connection / Coverage
                        </SelectItem>
                        <SelectItem value="billing">
                          Billing / Payment
                        </SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="business">
                          Business / Estate Enquiry
                        </SelectItem>
                        <SelectItem value="general">
                          General Question
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us how we can help..."
                      className="min-h-30"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formStatus === "submitting"}
                    className="w-full rounded-full text-lg cursor-pointer"
                  >
                    {formStatus === "submitting"
                      ? "Sending..."
                      : "Send Message"}
                  </Button>

                  {formStatus === "success" && (
                    <p className="text-center text-green-600 font-medium mt-4">
                      Thank you! We'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div>
              <Clock className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600">Monday - Saturday: 8 AM - 8 PM</p>
              <p className="text-gray-600">
                Emergency support: 24/7 via WhatsApp
              </p>
            </div>
            <div>
              <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-gray-600 font-medium">
                Usually within 30 minutes during business hours
              </p>
              <p className="text-gray-600">
                We'll reply even faster on WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center px-6 bg-primary/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          We're Just a Message Away
        </h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-700">
          Whether it's a quick question or a full setup enquiry — drop us a
          line. Lagos style: fast and friendly.
        </p>
        <Button asChild size="lg" className="rounded-full px-12">
          <a
            href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20I'm%20reaching%20out%20from%20your%20contact%20page`}
          >
            Open WhatsApp Now
          </a>
        </Button>
      </section>
    </main>
  );
}
