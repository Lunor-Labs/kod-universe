import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  capabilities,
  serviceGroups,
  getServiceDetailConfig,
  selectedWorkProjects,
} from "@/data/services";
import {
  ServiceHero,
  ServicePhilosophy,
  ServiceDisciplines,
  ServiceDeliverables,
  ServiceCaseStudy,
  ServiceProcess,
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
    alternates: { canonical: `/services/${slug}` },
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

  const currentGroupIndex = serviceGroups.findIndex(
    (g) => g.id === slug || g.services.some((s) => s.slug === slug),
  );
  const prevCap =
    currentGroupIndex > 0
      ? serviceGroups[currentGroupIndex - 1].services[0]
      : null;
  const nextCap =
    currentGroupIndex >= 0 && currentGroupIndex < serviceGroups.length - 1
      ? serviceGroups[currentGroupIndex + 1].services[0]
      : null;

  return (
    <main className="relative text-kod-earth min-h-screen overflow-hidden selection:bg-kod-orange selection:text-white">
      <div
        className="absolute top-0 left-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/main/services-page-hero.jpeg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-[#F7F3F1]" />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-kod-canvas/90 via-kod-canvas/90 to-transparent md:w-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-canvas via-canvas/60 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10">
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

        <ServiceDisciplines
          serviceTitle={cap.title}
          disciplines={config.disciplines}
        />

        <ServiceDeliverables
          serviceNumber={config.serviceNumber}
          items={config.deliverables}
        />

        {/* <ServiceProcess steps={config.process} /> */}

        {/* <ServiceCaseStudy caseStudy={config.featuredCaseStudy} /> */}

        <ServiceSelectedWork
          projects={config.selectedWorkProjects || selectedWorkProjects}
          title={config.selectedWorkTitle}
          subtitle={config.selectedWorkSubtitle}
          filterCategory={cap.title}
        />

        <ServiceSuitability
          points={config.qualificationPoints}
          faqs={config.faqs}
        />
        <ServiceNav prevCap={prevCap} nextCap={nextCap} />
      </div>
    </main>
  );
}
