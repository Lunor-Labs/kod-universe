import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import type { Project, ProjectPillar } from "@/types/project";
import { ProjectHeroShowcase } from "@/features/work/ProjectHeroShowcase";
import { ProjectCaseStudy } from "@/features/work/ProjectCaseStudy";
import { ProjectNavigation } from "@/features/work/ProjectNavigation";
import { RelatedProjectsSection } from "@/features/work/RelatedProjectsSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client}`,
    description: project.shortDescription,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

function getPillarsForProject(project: Project): ProjectPillar[] {
  if (project.pillars && project.pillars.length > 0) {
    return project.pillars;
  }
  if (project.category === "SOCIAL MEDIA") {
    return [
      {
        title: "Growth",
        description:
          "Built a stronger digital presence with consistent branded content.",
        icon: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Icon/Growth.png",
      },
      {
        title: "Awareness",
        description:
          "Created memorable campaigns, product education and seasonal storytelling.",
        icon: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Icon/Awareness.png",
      },
      {
        title: "Engagement",
        description:
          "Designed conversation-driven posts and community-first content.",
        icon: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Icon/Engagement.png",
      },
      {
        title: "Lead Conversion",
        description:
          "Supported promotions, inquiries and product-driven action.",
        icon: "/projects/Social-Media/Bio Oil Social Media Content Highlights/Icon/Lead Conversion.png",
      },
    ];
  }
  if (project.category === "PACKAGE DESIGN") {
    return [
      {
        title: "Structural Craft",
        description:
          "Custom engineered box dies, tactile debossing, and protective architecture.",
      },
      {
        title: "Visual Harmony",
        description:
          "Curated harmonious color palettes and refined typographic balance.",
      },
      {
        title: "Shelf Impact",
        description:
          "Distinguished boutique presence commanding attention across retail shelves.",
      },
      {
        title: "Sustainability",
        description:
          "Ethically sourced paper stocks, eco inks, and sustainable finishing.",
      },
    ];
  }
  return [
    {
      title: "Brand Strategy",
      description:
        "Uncovered market white-space and established core positioning.",
    },
    {
      title: "Visual Identity",
      description:
        "Engineered iconic logomark, typographic system, and color hierarchy.",
    },
    {
      title: "Touchpoint System",
      description:
        "Applied identity seamlessly across physical, spatial, and digital media.",
    },
    {
      title: "System Guidelines",
      description:
        "Comprehensive asset kits, vector libraries, and production-ready rules.",
    },
  ];
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedSlugs).slice(0, 3);
  const pillars = getPillarsForProject(project);

  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <ProjectHeroShowcase project={project} pillars={pillars} />
      <ProjectCaseStudy project={project} />
      <ProjectNavigation prev={prev} next={next} />
      <RelatedProjectsSection projects={related} />
    </>
  );
}
