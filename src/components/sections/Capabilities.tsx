import { 
    Blocks,
    Code2,
    Database,
    Globe,
    LayoutDashboard,
    LockKeyhole,
    LucideIcon,
    Server,
    Smartphone,
    Zap,

} from "lucide-react"

type Capability = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

const capabilities: Capability[] = [
    {
        id: 1,
        title: "React Applications",
        description: "Component-driven UIs, state management, responsive layouts",
        icon: Blocks,
    },
    {
        id: 2,
        title: "REST APIs",
        description: "Node.js, Express, routes, controllers, API integration",
        icon: Globe,
    },
    {
        id: 3,
        title: "Database-Backed Apps",
        description: "PostgreSQL, Prisma, schemas, relations, CRUD operations",
        icon: Database,
    },
    {
        id: 4,
        title: "Full-Stack Applications",
        description: "Connecting React frontends with Node.js backends",
        icon: Server,
    },
    {
        id: 5,
        title: "Authentication",
        description: "User accounts, protected routes, sessions and authorization basics",
        icon: LockKeyhole,
    },
    {
        id: 6,
        title: "Responsive Interfaces",
        description: "Mobile-friendly layouts with Tailwind CSS and modern CSS",
        icon: Smartphone,
    },
    {
        id: 7,
        title: "API Integration",
        description: "Working with external APIs, fetching data and handling responses",
        icon: Zap,
    },
    {
        id: 8,
        title: "Interactive UIs",
        description: "Forms, modals, filters, state-driven interactions",
        icon: LayoutDashboard,
    },
    {
        id: 9,
        title: "JavaScript Development",
        description: "Modern JavaScript, DOM, async code and reusable logic",
        icon: Code2,
    },
]

export default function Capabilities() {
    return (
        <section
            id="capabilities"
            className="w-full bg-white py-24 sm:32"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8A919E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#4F7CFF]"></span>
                    WHAT I CAN BUILD
                </div>

                <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.6vw,3.4rem)] font-medium leading-[1.03] tracking-tighter text-[#08090B]">
                    Capabilities, not a list of logos.
                </h2>

                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#343A45]">
                    The things I have already built, shipped and maintained — end to end, from schema to deploy.
                </p>

                <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        capabilities.map((capability) => (
                            <li
                                className="rounded-2xl border border-[#E8EAEE] bg-white p-6 shadow-(--shadow-card) transition-shadow duration-300 hover:shadow-(--shadow-lift)"
                                key={capability.id}
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EEF2FF] text-[#4F7CFF]">
                                    {<capability.icon/>}
                                </span>

                                <h3 className="mt-5 font-display text-[17px] font-medium tracking-tight text-[#08090B]">
                                    {capability.title}
                                </h3>

                                <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-[#8A919E]">
                                    {capability.description}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}