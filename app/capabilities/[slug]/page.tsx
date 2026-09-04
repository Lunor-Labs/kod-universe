import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { capabilities } from "@/data/capabilities";
import {
  getServiceDetailConfig,
  selectedWorkProjects,
} from "@/data/serviceDetails";
import {
  ServiceHero,
  ServicePhilosophy,
  ServiceDeliverables,
  ServiceCaseStudy,
  ServiceProcess,
  ServiceSystemMosaic,
  ServiceSelectedWork,
  ServiceSuitability,
  ServiceNav,
} from "@/components/services";

export async function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) return {};
  return {
    title: `${cap.title} | KOD Universe`,
    description: cap.longDescription,
    alternates: { canonical: `/capabilities/${slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = capabilities.find((c) => c.slug === slug);
  if (!cap) notFound();

  const config = getServiceDetailConfig(slug, cap.title, cap.description);

  const currentIndex = capabilities.findIndex((c) => c.slug === slug);
  const prevCap = currentIndex > 0 ? capabilities[currentIndex - 1] : null;
  const nextCap =
    currentIndex < capabilities.length - 1
      ? capabilities[currentIndex + 1]
      : null;

  return (
    <main className="bg-kod-canvas text-kod-earth min-h-screen overflow-hidden selection:bg-kod-orange selection:text-white">
      <ServiceHero
        eyebrow={config.eyebrow}
        titlePrefix={config.heroTitlePrefix}
        titleItalic={config.heroTitleItalic}
        description={config.heroDescription}
      />

      <ServicePhilosophy
        number={config.philosophyNumber}
        titlePrefix={config.philosophyTitlePrefix}
        titleItalic={config.philosophyTitleItalic}
        col1={config.philosophyCol1}
        col2={config.philosophyCol2}
      />
      <ServiceDeliverables
        serviceNumber={config.serviceNumber}
        items={config.deliverables}
      />
      <ServiceCaseStudy caseStudy={config.featuredCaseStudy} />

      <ServiceProcess steps={config.process} />
      <ServiceSystemMosaic />
      <ServiceSelectedWork projects={selectedWorkProjects} />

      <ServiceSuitability
        points={config.qualificationPoints}
        faqs={config.faqs}
      />
      <ServiceNav prevCap={prevCap} nextCap={nextCap} />
    </main>
  );
}
