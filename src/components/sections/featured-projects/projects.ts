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
            "Cursor-based infinite scrolling",
            "RBAC-secured group chat environments",
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
            "/nexus-messaging-app/nexus-main.png",

        screenshots: [
            {
                src: "/nexus-messaging-app/nexus-main.png",
                caption: "Real-Time Messaging",
            },
            {
                src: "/nexus-messaging-app/nexus-add-members.png",
                caption: "Group Member Management",
            },
            {
                src: "/nexus-messaging-app/nexus-ai-function.png",
                caption: "AI Powered Chat Assistance",
            },
            {
                src: "/nexus-messaging-app/nexus-profile.png",
                caption: "Profile Management",
            },
            {
                src: "/nexus-messaging-app/nexus-sign-up.png",
                caption: "Account Creation",
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
            "JWT-protected admin dashboard for catalog and order management",
            "Multi-step return and reverse logistics workflow",
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
            "/pahari-knits/pahari-knits-main.png",

        screenshots: [
            {
                src: "/pahari-knits/pahari-knits-login.png",
                caption: "Customer Authentication",
            },
            {
                src: "/pahari-knits/pahari-knits-main.png",
                caption: "E-Commerce Storefront",
            },
            {
                src: "/pahari-knits/pahari-knits-contact.png",
                caption: "Customer Support",
            },
            {
                src: "/pahari-knits/pahari-knits-shop.png",
                caption: "Product Catalog",
            },
            {
                src: "/pahari-knits/pahari-knits-product-detail.png",
                caption: "Product Details",
            },
            {
                src: "/pahari-knits/pahari-knits-checkout.png",
                caption: "Secure Checkout",
            },
            {
                src: "/pahari-knits/pahari-knits-admin-login.png",
                caption: "Admin Authentication",
            },
            {
                src: "/pahari-knits/pahari-knits-admin-main.png",
                caption: "Admin Management",
            },
            {
                src: "/pahari-knits/pahari-knits-admin-add-product.png",
                caption: "Catalog Management",
            },
            {
                src: "/pahari-knits/pahari-knits-admin-returns.png",
                caption: "Returns Management",
            },
        ],

        github:
            "https://github.com/rudrakshkr/pahari-knits",

        liveDemo:
            "https://pahariknits.in",

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
            "Server-side post filtering (published vs. draft) and tag-based categorization",
            "TinyMCE-powered rich-text editor",
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
            "/my-dev-blog/home-page.png",

        screenshots: [
            {
                src: "/my-dev-blog/login-page.png",
                caption: "Admin Authentication",
            },

            {
                src: "/my-dev-blog/home-page.png",
                caption: "Public Blog Homepage",
            },

            {
                src: "/my-dev-blog/post-example1.png",
                caption: "Blog Post View",
            },

            {
                src: "/my-dev-blog/post-example2.png",
                caption: "Content Reading Experience",
            },

            {
                src: "/my-dev-blog/comment-section.png",
                caption: "Post Comments",
            },

            {
                src: "/my-dev-blog/about-page.png",
                caption: "About the Platform",
            },

            {
                src: "/my-dev-blog/new-post-ai-prompt.png",
                caption: "AI-Assisted Post Generation",
            },

            {
                src: "/my-dev-blog/example-new-post.png",
                caption: "AI-Powered Content Editing",
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