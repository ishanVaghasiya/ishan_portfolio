import type { Metadata } from "next";
import ProjectsPageClient from "@/components/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects — Ishan Vaghasiya",
  description: "Selected frontend and AI-powered product work with measurable business outcomes in SaaS, geospatial, and document workflows.",
};

export default function Page() {
  return <ProjectsPageClient />;
}
