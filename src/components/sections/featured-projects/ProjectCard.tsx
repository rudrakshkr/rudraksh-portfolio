import type { Project } from "./projects"

export default function ProjectCard({
    project,
}: {
    project: Project;
}) {
    return (
        <div>
            <article
                className="
                    group grid grid-flow-col overflow-hidden rounded-3xl
                    border border-[#E8EAEE] bg-white
                    shadow-(--shadow-card)
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-(--shadow-lift)
                "
            >
                <div className="flex flex-col justify-between p-7 sm:p-9">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[11px] tracking-widest text-[#8A919E]">
                                <span>{String(project.id).padStart(2, "0")}</span>
                                <span className="text-blue-400"> · </span>
                                <span>{project.year}</span>
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        </div>
                        <h3 className="mt-4 font-display text-[26px] font-medium tracking-tight text-[#08090B] sm:text-3xl">
                            {project.title}
                        </h3>
                        <p className="mt-3 max-w-md text-lg leading-relaxed text-[#343A45]">
                            {project.description}
                        </p>

                        <div className="mt-5">
                            <p className="font-mono text-[0.85em] tracking-widest text-[#8A919E] uppercase">
                                Highlights
                            </p>

                            <div className="mt-2 space-y-1.5">
                                {project.highlights.map((highlight) => (
                                    <div
                                        key={highlight}
                                        className="flex items-center gap-2 text-[0.90em] text-[#343A45] font-display"
                                    >
                                        <span className="h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ul className="mt-6 flex flex-wrap gap-1.5">
                            {project.techStack.map((stack) => (
                                <li 
                                    key={stack}
                                    className="rounded-lg bg-[#F4F5F7] px-2.5 py-1 font-mono text-[11px] text-[#343A45] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:bg-[#EEF0F3]"
                                >
                                    {stack}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-2">
                        <button 
                            className="inline-flex items-center gap-2 rounded-xl bg-[#08090B] px-4 py-2.5 text-[13.5px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#11141A] cursor-pointer focus:outline-none"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-id="element-235" data-mp="nacymwxoilxe"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>

                            View Architecture
                        </button>

                        <a 
                            href=""
                            className="inline-flex items-center gap-1.5 rounded-xl border border-[#E8EAEE] px-4 py-2.5 text-[13.5px] font-medium text-[#171B22] transition-colors hover:bg-[#f1efef] focus:outline-none"
                        >
                            Live Demo 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-id="element-237" data-mp="1tzaier3okl7u"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </a>

                        <a 
                            href=""
                            className="grid h-10 w-10 place-items-center rounded-xl border border-[#E8EAEE] text-[#171B22] transition-colors hover:bg-[#FAFAFA] focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-id="element-239" data-mp="16b9c7otz5gvl"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="relative overflow-hidden bg-[#08090B] p-5 sm:p-7 lg:p-8">
                    <div className="
                        relative overflow-hidden rounded-2xl
                        border border-white/10
                        shadow-(--shadow-card)
                        transition-transform duration-500 ease-out
                        group-hover:scale-[1.02]
                    ">
                        <img 
                            src={project.image} 
                            alt="Nexus Messaging interface preview" 
                            className="block h-full w-full object-cover" 
                            loading="lazy">
                        </img>

                        <div
                            className="
                                pointer-events-none absolute inset-x-0 bottom-0 h-28
                                bg-linear-to-t from-black/70 via-black/25 to-transparent
                                opacity-0 transition-opacity duration-500
                                group-hover:opacity-100
                            "
                        />
                    </div>

                    <div className="relative mt-4 flex items-center justify-between font-mono text-[11px] text-[#8A919E]">
                        <span>Full Stack</span>

                        <span className="flex items-center gap-1.5 text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            <span>deployed</span>
                        </span>
                    </div>
                </div>
            </article>
        </div>
    )
}