import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import SectionTag from "./SectionTag";
import gb from '../public/images/gb.png'
import ul from '../public/images/ul.png'
import sc from '../public/images/sc.png'
import ip from '../public/images/ip.png'

const projects = [
  {
    code: "PRJ-01",
    title: "Ultima Lifestyle",
    description:
      "E-commerce platform for Ultima, an electronics accessories brand revolutionizing Nepal's market with a mission to make quality tech affordable and accessible to everyone.",
    image: ul,
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://ultima.com.np/",
    repo: "#",
  },
  {
    code: "PRJ-02",
    title: "Gadgetbyte Nepal",
    description:
      "E-commerce and content platform offering honest, in-depth gadget reviews alongside a user-friendly shopping experience — helping readers make informed digital lifestyle decisions.",
    image: gb,
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://www.gadgetbytenepal.com/",
    repo: "#",
  },
  {
    code: "PRJ-03",
    title: "IPPAN",
    description:
      "Official website for the Independent Power Producers' Association of Nepal (IPPAN), established in 2001 to promote the growth of Nepal's energy sector through private sector participation.",
    image: ip,
    stack: ["React", "JavaScript","CSS"],
    href: "https://www.ippan.org.np/",
    repo: "#",
  },
  {
    code: "PRJ-04",
    title: "Siddhartha Cablecar",
    description:
      "Website for Siddhartha Cable Car, built by visionary entrepreneurs on a mission to revive the historical grandeur of the Nuwakot region through sustainable tourism.",
    image: sc,
    stack: ["HTML", "JavaScript", "CSS"],
    href: "https://siddharthacablecar.com.np/",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionTag index="C" label="Selected Work" />

        <h2 className="max-w-xl font-display text-3xl font-bold text-ink sm:text-4xl">
          A few builds worth a closer look.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.code}
              className="group flex flex-col overflow-hidden border border-line bg-white transition-shadow duration-300 hover:shadow-[6px_6px_0_0_rgba(27,42,74,0.08)]"
            >
              {/* image preview */}
              <a
                href={project.href}
                className="relative block aspect-[3/2] w-full overflow-hidden border-b border-line bg-ink-900"
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                  {/* <span className="absolute left-3 top-3 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
                    {project.code}
                  </span> */}
              </a>

              {/* content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-3 pt-1 text-ink/50">
                    <a
                      href={project.repo}
                      aria-label={`${project.title} source code`}
                      className="transition-colors hover:text-ink"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.href}
                      aria-label={`${project.title} live site`}
                      className="transition-colors hover:text-ink"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </div>

                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-charcoal/75">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-ink/20 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink/70"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
