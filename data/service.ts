import { Building2, Home, Network, Wifi } from "lucide-react";

export const services = [
  {
    icon: Home,
    title: "Residential Internet",
    description:
      "Unlimited high-speed plans designed for Lagos homes. Perfect for streaming, remote work, online learning, and family use.",
    features: [
      "25-100 Mbps+ speeds",
      "Free router on select plans",
      "Installation in 48-72 hours",
      "24/7 local support",
    ],
    cta: "Check Residential Coverage",
  },
  {
    icon: Building2,
    title: "Business / SME Broadband",
    description:
      "Reliable, high-upload connections for offices, shops, clinics, and co-working spaces with priority support.",
    features: [
      "Static IP available",
      "Business-grade reliability",
      "VoIP & CCTV ready",
      "Dedicated account manager",
    ],
    cta: "Request Business Quote",
  },
  {
    icon: Wifi,
    title: "WiFi Installation & Optimization",
    description:
      "Professional setup and troubleshooting for homes and small offices — eliminate dead zones and boost performance.",
    features: [
      "Site survey & custom design",
      "Mesh systems for large spaces",
      "One-time or maintenance packages",
      "Interference & congestion fixes",
    ],
    cta: "Book Site Survey",
  },
  {
    icon: Network,
    title: "Managed WiFi for Estates & Apartments",
    description:
      "Scalable shared connectivity solutions for gated communities, apartment blocks, and small hotels.",
    features: [
      "Centralized management",
      "Guest WiFi portals",
      "Bandwidth monitoring",
      "Billing & user management",
    ],
    cta: "Get Estate Proposal",
  },
];
