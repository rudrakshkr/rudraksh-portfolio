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
        year: "2026",
        title: "Nexus Messaging App",
        description:
            "Real-time full-stack messaging platform with delivery tracking, replies, group management, media sharing and an integrated AI assistant.",

        highlights: [
            "AI Copilot with summaries, task extraction and Magic Compose",
            "Live presence, typing indicators and read receipts",
            "Role-based group management with media uploads",
        ],

        techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "Socket.IO",
            "Prisma",
            "PostgreSQL",
            "JWT",
            "Cloudinary",
            "Google Gemini",
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
                caption: "Conversations and real-time presence",
            },
            {
                src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
                caption: "Real-time collaboration",
            },
        ],

        github:
            "https://github.com/rudrakshkr/nexus-messaging-app",

        liveDemo:
            "https://nexus-messaging-app.vercel.app",

        architecture: [
            {
                title: "React + Vite Client",
                description:
                    "Provides the responsive messaging interface, authentication flows, conversation UI and client-side application state.",
                type: "client",
            },
            {
                title: "Node.js + Express API",
                description:
                    "Handles authentication, users, rooms, participants, messages and persistent application operations.",
                type: "server",
            },
            {
                title: "Socket.IO",
                description:
                    "Provides bidirectional real-time communication for messages, typing indicators, presence and delivery events.",
                type: "service",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "Stores users, rooms, participants and messages, including message editing, deletion and reply relationships.",
                type: "database",
            },
            {
                title: "Google Gemini",
                description:
                    "Powers the AI Copilot features including conversation summaries, task extraction and message rewriting.",
                type: "service",
            },
            {
                title: "Cloudinary",
                description:
                    "Handles uploaded media used within conversations, including image storage and fullscreen previews.",
                type: "service",
            },
        ],

        status: "deployed",
    },

    {
        id: 2,
        year: "2026",
        title: "PahariKnits",
        description:
            "Full-stack D2C e-commerce platform for handcrafted Himalayan apparel with passwordless checkout, inventory-aware orders, admin operations and return management.",

        highlights: [
            "Passwordless email OTP authentication for customers",
            "Razorpay checkout with payment verification and receipts",
            "Cart-aware inventory and order tracking",
        ],

        techStack: [
            "React",
            "React Router",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
            "Neon",
            "JWT",
            "Razorpay",
            "Brevo",
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
                caption: "Customer dashboard",
            },
            {
                src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
                caption: "Admin operations",
            },
        ],

        github:
            "https://github.com/rudrakshkr/pahari-knits",

        liveDemo:
            "https://pahari-knits.vercel.app",

        architecture: [
            {
                title: "React Storefront",
                description:
                    "Responsive customer-facing application with product discovery, category filtering, cart management, checkout and order tracking.",
                type: "client",
            },
            {
                title: "Express API",
                description:
                    "Backend application handling products, authentication, orders, payments, returns, feedback and protected admin operations.",
                type: "server",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "Relational data layer for products, inventory, orders, order items and returns, with PostgreSQL hosted on Neon.",
                type: "database",
            },
            {
                title: "Customer Authentication",
                description:
                    "Passwordless email OTP authentication used for customer access to order history and account functionality.",
                type: "service",
            },
            {
                title: "Admin Authentication",
                description:
                    "JWT-based protected routes restrict access to administrative catalog, order and return management operations.",
                type: "service",
            },
            {
                title: "Razorpay + Brevo",
                description:
                    "Razorpay handles payment creation and verification, while Brevo supports transactional emails including OTPs and receipts.",
                type: "service",
            },
        ],

        status: "deployed",
    },

    {
        id: 3,
        year: "2026",
        title: "MyDevBlog",
        description:
            "Decoupled full-stack blogging platform with a public React client, private administration dashboard and REST API.",

        highlights: [
            "Decoupled frontend, admin and backend architecture",
            "JWT authentication with role-based access control",
            "Post publishing, drafts, categories and tags",
        ],

        techStack: [
            "React",
            "React Router",
            "Tailwind CSS",
            "Shadcn/UI",
            "Node.js",
            "Express",
            "Prisma",
            "PostgreSQL",
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
                caption: "Admin dashboard",
            },
        ],

        github:
            "https://github.com/rudrakshkr/odin-blog-project",

        liveDemo:
            "https://mydevblog-theta.vercel.app",

        architecture: [
            {
                title: "React Blog Client",
                description:
                    "The public-facing application handles navigation, article browsing and reading published content.",
                type: "client",
            },
            {
                title: "React Admin Panel",
                description:
                    "A separate private client provides CRUD functionality for managing posts and administrative content.",
                type: "client",
            },
            {
                title: "Express REST API",
                description:
                    "The backend provides the central API for authentication, posts, users and content management operations.",
                type: "server",
            },
            {
                title: "PostgreSQL + Prisma",
                description:
                    "Stores users, posts and comments through a relational schema managed with Prisma.",
                type: "database",
            },
            {
                title: "JWT + BcryptJS",
                description:
                    "Provides authentication and password protection, with RBAC distinguishing regular users from administrators.",
                type: "service",
            },
        ],

        status: "deployed",
    },
]