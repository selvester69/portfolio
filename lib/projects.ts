export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    "id": 1,
    "slug": "distributed-rate-limiter",
    "title": "Distributed Rate Limiter - In Progress",
    "category": "Backend System",
    "shortDescription": "A high-performance distributed rate limiter designed to protect APIs from abuse and ensure fair usage.",
    "description": [
      "This project is a distributed rate limiter built to handle high-throughput environments. It's designed to be deployed as a microservice or integrated as a library to enforce API usage policies across a distributed system.",
      "The core of the system uses a sliding window algorithm implemented over a centralized data store like Redis. This approach ensures accurate rate limiting across multiple server instances without sacrificing performance.",
      "It provides flexible rule configuration, allowing administrators to define different limits for various API endpoints, user tiers, or IP addresses."
    ],
    "features": [
      "Sliding window algorithm for accurate, time-based request counting",
      "Centralized state management using Redis for distributed consistency",
      "Low-latency checks (under 10ms) to minimize performance overhead",
      "Flexible rule engine to define granular rate limits per route or user",
      "Real-time monitoring and analytics dashboard integration",
      "Atomic operations to prevent race conditions in a concurrent environment"
    ],
    "technologies": ["Java", "Spring Boot", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana", "gRPC"],
    "coverImage": "/rate-limiter-architecture.png",
    "thumbnailImage": "/rate-limiter-thumb.png",
    "gallery": [
      { "url": "/ratelimiter/architecture.png", "caption": "System Architecture Diagram" },
      { "url": "/ratelimiter/distributed.png", "caption": "Distributed Architecture" },
      { "url": "/ratelimiter/leakyBucket.png", "caption": "Algorithm - Leaky Bucket" },
      { "url": "/ratelimiter/tokenBucket.png", "caption": "Algorithm Token Bucket" },
      { "url": "/ratelimiter/raceCondition.png", "caption": "Race Condition" }
    ],
    "timeline": "2025 Personal projects",
    "role": "Backend Software Engineer",
    "liveUrl": "https://github.com/selvester69/rate-limiting-server",
    "githubUrl": "https://github.com/selvester69/rate-limiting-server",
    // "relatedProjects": [
    //   // {
    //   //   "slug": "api-gateway",
    //   //   "title": "API Gateway",
    //   //   "category": "Backend System",
    //   //   "image": "/ratelimiter/apiGateway.png"
    //   // }
    //   //add more related projects
    // ]
  },
  // {
  //   id: 2,
  //   slug: "finance-dashboard",
  //   title: "Finance Dashboard",
  //   category: "Web Application",
  //   shortDescription:
  //     "A comprehensive financial management dashboard for tracking investments, expenses, and financial goals.",
  //   description: [
  //     "The Finance Dashboard is a powerful web application designed to help users manage their personal finances in one centralized location. It provides real-time insights into spending patterns, investment performance, and progress toward financial goals.",
  //     "The dashboard features interactive charts and visualizations that make complex financial data easy to understand at a glance. Users can connect multiple accounts, categorize transactions automatically, and receive personalized recommendations to improve their financial health.",
  //     "The application was designed with a focus on security, using bank-level encryption and authentication protocols to protect sensitive financial information.",
  //   ],
  //   features: [
  //     "Account aggregation from multiple financial institutions",
  //     "Automated transaction categorization and tagging",
  //     "Budget creation and expense tracking",
  //     "Investment portfolio analysis and performance metrics",
  //     "Goal setting with progress tracking",
  //     "Customizable reports and data exports",
  //     "Financial insights and recommendations",
  //   ],
  //   technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Plaid API", "PostgreSQL", "Vercel"],
  //   coverImage: "/finance-dashboard-cover.png",
  //   thumbnailImage: "/modern-finance-overview.png",
  //   gallery: [
  //     { url: "/finance-dashboard-screen1.png", caption: "Main Dashboard Overview" },
  //     { url: "/finance-dashboard-screen2.png", caption: "Expense Analysis" },
  //     { url: "/finance-dashboard-screen3.png", caption: "Investment Portfolio" },
  //     { url: "/finance-dashboard-screen4.png", caption: "Financial Goals Tracker" },
  //   ],
  //   timeline: "4 months (Q3-Q4 2022)",
  //   role: "UX/UI Designer & Frontend Developer",
  //   liveUrl: "https://example.com/finance-dashboard",
  //   githubUrl: "https://github.com/example/finance-dashboard",
  //   relatedProjects: [
  //     {
  //       slug: "job-finder-app",
  //       title: "Job Finder App",
  //       category: "Mobile App",
  //       image: "/modern-finance-app.png",
  //     },
  //     {
  //       slug: "ecommerce-redesign",
  //       title: "E-Commerce Redesign",
  //       category: "UX Case Study",
  //       image: "/modern-apparel-storefront.png",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   slug: "ecommerce-redesign",
  //   title: "E-Commerce Redesign",
  //   category: "UX Case Study",
  //   shortDescription:
  //     "A complete redesign of an e-commerce platform focused on improving user experience and conversion rates.",
  //   description: [
  //     "This project involved a comprehensive redesign of an established e-commerce platform that was struggling with user engagement and conversion rates. The goal was to create a more intuitive, visually appealing shopping experience that would drive sales and customer satisfaction.",
  //     "The redesign process began with extensive user research, including interviews, surveys, and usability testing of the existing platform. This research revealed key pain points in the customer journey, such as a complicated checkout process and difficulty finding products.",
  //     "Based on these insights, I developed a new information architecture and user flow that simplified navigation and streamlined the purchase process. The visual design was updated with a clean, modern aesthetic that highlighted product imagery and created a consistent brand experience across all touchpoints.",
  //   ],
  //   features: [
  //     "Simplified product navigation and filtering system",
  //     "Redesigned product detail pages with enhanced imagery and information",
  //     "Streamlined checkout process reducing steps by 40%",
  //     "Personalized product recommendations based on browsing history",
  //     "Mobile-first responsive design",
  //     "Improved search functionality with predictive suggestions",
  //     "Enhanced wishlist and saved items functionality",
  //   ],
  //   technologies: ["Figma", "Adobe XD", "HTML/CSS", "JavaScript", "Shopify", "Hotjar", "Google Analytics"],
  //   coverImage: "/ecommerce-redesign-cover.png",
  //   thumbnailImage: "/modern-apparel-storefront.png",
  //   gallery: [
  //     { url: "/ecommerce-redesign-screen1.png", caption: "Homepage Design" },
  //     { url: "/ecommerce-redesign-screen2.png", caption: "Product Category Page" },
  //     { url: "/ecommerce-redesign-screen3.png", caption: "Product Detail Page" },
  //     { url: "/ecommerce-redesign-screen4.png", caption: "Checkout Process" },
  //   ],
  //   client: "Fashion Retailer Inc.",
  //   timeline: "6 months (Q1-Q2 2022)",
  //   role: "Lead UX Designer",
  //   liveUrl: "https://example.com/fashion-retailer",
  //   relatedProjects: [
  //     {
  //       slug: "job-finder-app",
  //       title: "Job Finder App",
  //       category: "Mobile App",
  //       image: "/modern-finance-app.png",
  //     },
  //     {
  //       slug: "finance-dashboard",
  //       title: "Finance Dashboard",
  //       category: "Web Application",
  //       image: "/modern-finance-overview.png",
  //     },
  //   ],
  // },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project?.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project?.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
