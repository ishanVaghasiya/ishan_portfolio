import type { Metadata } from "next";
import ContactPageClient from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Ishan Vaghasiya",
  description: "Get in touch with Ishan Vaghasiya for frontend architecture, remote engagement, and AI-assisted delivery.",
};

export default function Page() {
  return <ContactPageClient />;
}
