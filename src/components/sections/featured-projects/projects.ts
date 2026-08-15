export type ArchitectureNode = {
    title: string
    description: string
    type: "client" | "server" | "database" | "service"
}

export type ProjectScreenshot = {
    src: string
    caption: string
}

export type Project = {
    id: number
    year: string
    title: string
    description: string
    highlights: string[]
    techStack: string[]
    image: string
    screenshots: ProjectScreenshot[]
    github: string
    liveDemo: string
    architecture: ArchitectureNode[]
    status: "deployed" | "in-progress"
}

export const projects: Project[] = [
    {
        id: 1,
        year: "2025",
        title: "Nexus Messaging App",
        description:
            "Real-time messaging with presence, delivery receipts and offline sync.",

        highlights: [
            "Real-time messaging with Socket.IO",
            "Optimistic message updates",
            "AI-powered chat assistance",
        ],

        techStack: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Socket.IO",
            "PostgreSQL",
        ],

        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

        screenshots: [
            {
                src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
                caption: "Messaging interface",
            },
            {
                src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
                caption: "Conversation and presence",
            },
            {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
                caption: "Real-time interaction",
            },
        ],

        github: "#",
        liveDemo: "#",

        architecture: [
            {
                title: "React Client",
                description:
                    "Owns the messaging interface, application state and real-time UI updates presented to the user.",
                type: "client",
            },
            {
                title: "Node.js + Express",
                description:
                    "Provides the API layer for authentication, users, conversations and persistent message operations.",
                type: "server",
            },
            {
                title: "Socket.IO",
                description:
                    "Provides the real-time communication layer for messaging, presence and delivery events.",
                type: "service",
            },
            {
                title: "PostgreSQL",
                description:
                    "Persists users, conversations, messages and other durable application state.",
                type: "database",
            },
        ],

        status: "deployed",
    },

    {
        id: 2,
        year: "2025",
        title: "PahariKnits",
        description:
            "Full-stack e-commerce platform for handcrafted apparel with secure checkout and inventory management.",

        highlights: [
            "Passwordless OTP authentication",
            "Cart-aware inventory system",
            "JWT-secured admin dashboard",
        ],

        techStack: [
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
            "JWT",
        ],

        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",

        screenshots: [
            {
                src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
                caption: "Storefront",
            },
            {
                src: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&w=1200&q=80",
                caption: "Product browsing",
            },
            {
                src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
                caption: "Shopping experience",
            },
        ],

        github: "#",
        liveDemo: "#",

        architecture: [
            {
                title: "React Storefront",
                description:
                    "Provides product browsing, cart interactions and the customer-facing checkout experience.",
                type: "client",
            },
            {
                title: "Express API",
                description:
                    "Handles authentication, products, orders, inventory and administrative operations.",
                type: "server",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "Provides the structured data layer for products, users, inventory, orders and application state.",
                type: "database",
            },
            {
                title: "Payment Service",
                description:
                    "Handles payment processing as an external service within the checkout flow.",
                type: "service",
            },
        ],

        status: "deployed",
    },

    {
        id: 3,
        year: "2025",
        title: "MyDevBlog",
        description:
            "Decoupled blogging platform with a public client, REST API and private content management system.",

        highlights: [
            "Decoupled monorepo architecture",
            "JWT authentication with RBAC",
            "Rich-text content management",
        ],

        techStack: [
            "React",
            "Vite",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma",
            "Tailwind CSS",
            "JWT",
        ],

        image:
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",

        screenshots: [
            {
                src: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=80",
                caption: "Public blog",
            },
            {
                src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
                caption: "Article experience",
            },
            {
                src: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
                caption: "Content management",
            },
        ],

        github: "#",
        liveDemo: "#",

        architecture: [
            {
                title: "React + Vite",
                description:
                    "The public-facing client handles browsing, navigation and reading published blog content.",
                type: "client",
            },
            {
                title: "Express REST API",
                description:
                    "The central API layer handles posts, users, authentication and content operations.",
                type: "server",
            },
            {
                title: "Admin CMS",
                description:
                    "A private client provides the interface for creating, editing and managing blog content.",
                type: "client",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "The database layer persists users, posts and application data through a typed access layer.",
                type: "database",
            },
        ],

        status: "deployed",
    },
]