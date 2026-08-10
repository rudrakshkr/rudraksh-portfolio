export type Project = {
    id: number;
    year: string;
    title: string;
    description: string;
    highlights: string[];
    techStack: string[];
    image: string;
    github: string;
    liveDemo: string;
    architecture: string;
    status: "deployed" | "in-progress"
}

export const projects: Project[] = [
    {
        id: 1,
        year: "2025",
        title: "Nexus Messaging App",
        description: "Real-time messaging with presence, delivery receipts and offline sync.",
        highlights: [
            "1st highlight",
            "2nd highlight",
            "3d highlight",
        ],
        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Socket.IO",
            "PostgreSQL",
        ],
        image: "https://cdn.magicpatterns.com/patterns/generated-images/9e01a368-2fac-47c3-88b5-1b33be9aff9d.jpg",
        github: "#",
        liveDemo: "#",
        architecture: "#",
        status: "deployed"
    },

    {
        id: 2,
        year: "2025",
        title: "Nexus Messaging App",
        description: "Real-time messaging with presence, delivery receipts and offline sync.",
        highlights: [
            "1st highlight",
            "2nd highlight",
            "3d highlight",
        ],
        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Socket.IO",
            "PostgreSQL",
        ],
        image: "https://cdn.magicpatterns.com/patterns/generated-images/c7f768b6-b084-402f-84e6-e99f751a7fa6.jpg",
        github: "#",
        liveDemo: "#",
        architecture: "#",
        status: "deployed"
    },

    {
        id: 3,
        year: "2025",
        title: "Nexus Messaging App",
        description: "Real-time messaging with presence, delivery receipts and offline sync.",
        highlights: [
            "1st highlight",
            "2nd highlight",
            "3d highlight",
        ],
        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Socket.IO",
            "PostgreSQL",
        ],
        image: "https://cdn.magicpatterns.com/patterns/generated-images/377b6c7e-712f-4224-8a14-d6683085d4a5.jpg",
        github: "#",
        liveDemo: "#",
        architecture: "#",
        status: "deployed"
    },
]