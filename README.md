# Rudraksh Kumar — Portfolio

A personal portfolio built to showcase my work, technical capabilities, projects, and software engineering experience.

The portfolio focuses on a clean, systems-oriented interface with interactive project case studies, responsive layouts, animations, and detailed architecture breakdowns.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Animated navigation with active-section tracking
- Hero section with interactive call-to-action buttons
- Featured project cards with real project screenshots
- Detailed project architecture modals
- Core capabilities and technology sections
- Interactive interface showcase with:
  - Automatic horizontal scrolling
  - Mouse dragging
  - Trackpad horizontal scrolling
  - Touch interaction
  - Fullscreen image viewer
  - Previous / next image navigation
- Responsive navigation menu for smaller screens
- Contact section with GitHub, LinkedIn, email, and resume links
- Smooth scrolling between sections
- Scroll-triggered animations and reveal effects

## Featured Projects

### Nexus Messaging App

A real-time full-stack messaging platform featuring:

- AI Copilot with summaries, task extraction, and Magic Compose
- Live presence, typing indicators, and read receipts
- Role-based group management
- Media uploads
- Cursor-based infinite scrolling
- RBAC-secured group chat environments

### MyDevBlog

A decoupled blog platform consisting of:

- Public React client
- Separate React admin panel
- Express REST API
- PostgreSQL with Prisma
- JWT authentication
- BcryptJS password protection
- Role-based access control
- Post and content management
- AI-assisted content creation

### PahariKnits

A full-stack D2C e-commerce platform featuring:

- React / Vite storefront
- React Router
- Tailwind CSS
- Express backend
- Prisma
- PostgreSQL / Neon
- Customer authentication
- Razorpay checkout and payment verification
- Customer order tracking
- Cart-aware inventory
- JWT-protected admin operations
- Catalog and order management
- Returns workflow
- Transactional email functionality

## Project Architecture

Each featured project includes an architecture case study covering:

- Client-side applications
- Backend services
- Databases
- Authentication
- APIs
- Core capabilities
- Interface screenshots

The architecture modal is designed to make the technical decisions behind each project easier to understand rather than presenting the projects as simple screenshots.

## Getting Started

Clone the repository:

    git clone https://github.com/rudrakshkr/rudraksh-portfolio.git

Navigate into the project:

    cd rudraksh-portfolio

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open:

    http://localhost:3000

## Project Structure

    src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    │
    └── components/
        ├── layout/
        │   └── Navbar.tsx
        │
        └── sections/
            ├── featured-projects/
            │   ├── FeaturedProjects.tsx
            │   ├── ProjectCard.tsx
            │   └── projects.ts
            │
            ├── hero/
            │   ├── Hero.tsx
            │   ├── HeroContent.tsx
            │   ├── HeroTerminal.tsx
            │   ├── HeroButtons.tsx
            │   └── HeroStats.tsx
            │
            ├── ArchitectureModal.tsx
            ├── Capabilities.tsx
            ├── Skills.tsx
            └── Contact.tsx

    public/
    ├── my-dev-blog/
    ├── nexus-messaging-app/
    ├── pahari-knits/
    └── rudraksh-resume.pdf

## Deployment

The portfolio is built with Next.js and can be deployed using platforms that support Next.js applications, including Vercel.

## Author

**Rudraksh Kumar**

Full Stack Software Engineer

- GitHub: https://github.com/rudrakshkr
- LinkedIn: https://www.linkedin.com/in/rudraksh-kumar2908
- Email: rudrakshkumar2908@gmail.com