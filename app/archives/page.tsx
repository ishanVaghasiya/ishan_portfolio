import type { Metadata } from "next";
import ArchivesPageClient from "@/components/ArchivesPageClient";

export const metadata: Metadata = {
  title: "Resume — Ishan Vaghasiya",
  description: "Resume and leadership record for a modern frontend architect delivering scalable production systems with AI-augmented workflows.",
};

export default function Page() {
  return <ArchivesPageClient />;
}
