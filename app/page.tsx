import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Ishan Vaghasiya — Lead Frontend Architect",
  description: "Lead Frontend Architect building scalable frontend systems, AI-augmented delivery, and measurable outcomes.",
};

export default function Page() {
  return <HomePageClient />;
}