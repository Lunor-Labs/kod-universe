import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, getProjectBySlug, getRelatedProjects } from "@/data/projects";

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

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedSlugs).slice(0, 3);

  // Prev / next
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-24 md:pt-32 pb-0 bg-earth overflow-hidden"
        aria-label={`${project.title} project hero`}
      >
        <div className="container-site relative z-10 pb-12 md:pb-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-dust-rose/70 text-sm font-medium 
                       tracking-wide hover:text-dust-rose transition-colors mb-8"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={13} aria-hidden="true" />
            All work
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-clay mb-3">
                {project.category}
              </p>
              <h1 className="font-metropolis font-semibold text-canvas text-display-xl mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-dust-rose text-base leading-relaxed max-w-md">
                {project.shortDescription}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:justify-end">
              {[
                { label: "Client", value: project.client },
                { label: "Year", value: String(project.year) },
                { label: "Category", value: project.category.split(" & ")[0] },
              ].map((meta) => (
                <div key={meta.label}>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-1">
                    {meta.label}
                  </p>
                  <p className="text-canvas text-sm font-medium">{meta.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative aspect-[16/7] w-full">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(58,47,45,0.6) 0%, transparent 40%)",
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Content */}
      <article className="section-padding bg-canvas" aria-label="Project details">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main body */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <SectionLabel>Project overview</SectionLabel>
                <p className="text-earth text-base leading-relaxed">{project.overview}</p>
              </div>

              <div className="divider-warm" />

              {/* Challenge */}
              <div>
                <SectionLabel>The challenge</SectionLabel>
                <p className="text-secondary text-base leading-relaxed">{project.challenge}</p>
              </div>

              <div className="divider-warm" />

              {/* Approach */}
              <div>
                <SectionLabel>Our approach</SectionLabel>
                <p className="text-secondary text-base leading-relaxed">{project.approach}</p>
              </div>
            </div>

            {/* Sidebar: Deliverables */}
            <aside className="lg:col-span-1" aria-label="Project deliverables">
              <div className="sticky top-28 bg-white border border-border-warm rounded-sm p-6">
                <SectionLabel>Deliverables</SectionLabel>
                <ul className="space-y-2 mt-4" role="list">
                  {project.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-secondary"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-signal-orange flex-shrink-0"
                        aria-hidden="true"
                      />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-border-warm">
                  <p className="text-sm font-semibold tracking-[0.15em] uppercase text-secondary mb-3">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 
                                   bg-mist border border-border-warm rounded-sm text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Gallery */}
          {project.galleryImages.length > 0 && (
            <div className="mt-16" aria-label="Project image gallery">
              <SectionLabel className="mb-6">Project gallery</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="img-zoom rounded-sm overflow-hidden aspect-[4/3] relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Prev / Next navigation */}
      <nav
        className="border-t border-border-warm bg-white"
        aria-label="Project navigation"
      >
        <div className="container-site py-8">
          <div className="grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex items-center gap-3 p-4 rounded-sm hover:bg-canvas transition-colors"
                aria-label={`Previous project: ${prev.title}`}
              >
                <ArrowLeft
                  size={16}
                  className="text-secondary group-hover:text-signal-orange group-hover:-translate-x-1 transition-all"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-0.5">
                    Previous
                  </p>
                  <p className="text-sm font-medium text-earth group-hover:text-signal-orange transition-colors">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next && (
              <Link
                href={`/work/${next.slug}`}
                className="group flex items-center gap-3 p-4 rounded-sm hover:bg-canvas transition-colors text-right justify-end ml-auto"
                aria-label={`Next project: ${next.title}`}
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary mb-0.5">
                    Next
                  </p>
                  <p className="text-sm font-medium text-earth group-hover:text-signal-orange transition-colors">
                    {next.title}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-secondary group-hover:text-signal-orange group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="section-padding-sm border-t border-border-warm" aria-label="Related projects">
          <div className="container-site">
            <SectionLabel className="mb-6">You might also like</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="section-padding-sm bg-earth text-canvas" aria-label="Start a project">
        <div className="container-site text-center">
          <p className="eyebrow text-clay mb-4">Ready to start?</p>
          <h2 className="font-metropolis font-semibold text-canvas text-display-md mb-6 text-balance">
            Let&apos;s build something{" "}
            <em className="font-serif italic font-normal text-dust-rose">extraordinary.</em>
          </h2>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 bg-signal-orange text-white 
                       px-6 py-3 rounded-sm font-medium text-sm tracking-wide
                       hover:bg-deep-crimson transition-all duration-200 group"
          >
            Get in touch
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
