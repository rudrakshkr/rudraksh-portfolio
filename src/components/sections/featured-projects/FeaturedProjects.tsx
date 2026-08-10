import { projects } from "./projects"
import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {
    return (
        <section 
            id="projects"
            className="w-full bg-[#FAFAFA] py-24 sm:py-32 "
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A919E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]"></span>
                    Featured Work
                </div>

                <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.03] tracking-tighter text-[#08090B]">
                    Three systems, built and run in production.
                </h2>

                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#343A45]">
                    Each one shipped with real users, real constraints and real failure modes. Open any case study to see the architecture behind it.
                </p>
            </div>

            <div className="mx-auto mt-14 max-w-7xl space-y-6">
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))
                }
            </div>
        </section>
    )
}