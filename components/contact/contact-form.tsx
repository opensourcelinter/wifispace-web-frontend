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
import { Textarea } from "../ui/textarea";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };
  return (
    <div className="max-w-3xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Send Us a Message</CardTitle>
          <p className="text-gray-600 mt-2">
            We'll get back to you as soon as possible (WhatsApp is fastest!)
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input required placeholder="Your name" className="h-12" />
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
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Choose enquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New Connection / Coverage</SelectItem>
                  <SelectItem value="billing">Billing / Payment</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="business">
                    Business / Estate Enquiry
                  </SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
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
              {formStatus === "submitting" ? "Sending..." : "Send Message"}
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
  );
}
