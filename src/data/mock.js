export const personalInfo = {
  name: "Alex Chen",
  title: "React Developer",
  tagline: "Building performant, pixel-perfect interfaces",
  bio: "I'm a passionate React developer with 2+ years of professional experience and a 10-month internship that ignited my love for frontend engineering. I specialize in crafting fast, accessible, and visually stunning web applications using modern React patterns, TypeScript, and cutting-edge tooling.",
  shortBio: "React developer focused on performance, accessibility, and beautiful UI. 2+ years building production apps that users love.",
  email: "alex.chen.dev@email.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "15551234567",
  location: "San Francisco, CA",
  resumeLink: "#",
  social: {
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchendev"
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Happy Clients", value: "10+" },
    { label: "GitHub Stars", value: "500+" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 88, color: "#3178C6" },
      { name: "Next.js", level: 85, color: "#ffffff" },
      { name: "JavaScript", level: 92, color: "#F7DF1E" },
      { name: "Tailwind CSS", level: 90, color: "#06B6D4" },
      { name: "Framer Motion", level: 82, color: "#FF0055" },
      { name: "Redux", level: 80, color: "#764ABC" },
      { name: "HTML5/CSS3", level: 95, color: "#E34F26" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 78, color: "#339933" },
      { name: "Express", level: 75, color: "#ffffff" },
      { name: "Python", level: 70, color: "#3776AB" },
      { name: "FastAPI", level: 65, color: "#009688" },
      { name: "GraphQL", level: 72, color: "#E10098" },
      { name: "REST APIs", level: 88, color: "#00e5ff" }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 80, color: "#47A248" },
      { name: "PostgreSQL", level: 72, color: "#4169E1" },
      { name: "Firebase", level: 78, color: "#FFCA28" },
      { name: "AWS", level: 65, color: "#FF9900" },
      { name: "Docker", level: 68, color: "#2496ED" },
      { name: "Vercel", level: 85, color: "#ffffff" }
    ]
  },
  {
    category: "Tools & Testing",
    items: [
      { name: "Git", level: 90, color: "#F05032" },
      { name: "Jest", level: 78, color: "#C21325" },
      { name: "Cypress", level: 70, color: "#17202C" },
      { name: "Figma", level: 82, color: "#F24E1E" },
      { name: "VS Code", level: 95, color: "#007ACC" },
      { name: "Webpack", level: 72, color: "#8DD6F9" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "TaskFlow Pro",
    subtitle: "Project Management SaaS",
    description: "A comprehensive project management platform with real-time collaboration, Kanban boards, sprint planning, and team analytics. Built with React 18 and Server-Side Rendering for optimal performance.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { users: "2.5K+", uptime: "99.9%" }
  },
  {
    id: 2,
    title: "CryptoTracker",
    subtitle: "Real-time Crypto Dashboard",
    description: "Live cryptocurrency tracking dashboard with interactive charts, portfolio management, price alerts, and news aggregation. Features WebSocket connections for real-time data streaming.",
    techStack: ["React", "Redux", "D3.js", "WebSocket", "CoinGecko API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { users: "1.8K+", uptime: "99.5%" }
  },
  {
    id: 3,
    title: "DevConnect",
    subtitle: "Developer Social Platform",
    description: "A social networking platform designed for developers to share projects, collaborate on code, and build professional connections. Features real-time messaging and code sharing.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { users: "800+", uptime: "99.7%" }
  },
  {
    id: 4,
    title: "ShopEase",
    subtitle: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with product search, cart management, secure checkout via Stripe, order tracking, and admin dashboard with analytics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { users: "500+", uptime: "99.8%" }
  },
  {
    id: 5,
    title: "WeatherSync",
    subtitle: "Weather Intelligence App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, severe weather alerts, and historical data visualization. Supports offline mode.",
    techStack: ["React", "TypeScript", "OpenWeather API", "Mapbox", "PWA", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { users: "3K+", uptime: "99.6%" }
  }
];

export const timeline = [
  {
    id: 1,
    date: "Jan 2023 - Present",
    title: "React Developer",
    organization: "TechNova Solutions",
    description: "Leading frontend development for enterprise SaaS products. Built reusable component libraries, implemented CI/CD pipelines, and improved app performance by 40%. Mentoring junior developers and conducting code reviews.",
    type: "work",
    highlights: ["Led team of 4 developers", "40% performance improvement", "Built design system"]
  },
  {
    id: 2,
    date: "Mar 2022 - Dec 2022",
    title: "Frontend Intern",
    organization: "InnovateLab Inc.",
    description: "10-month intensive internship where I built production React components, learned agile methodologies, and contributed to a product serving 50K+ users. Received full-time offer upon completion.",
    type: "work",
    highlights: ["50K+ user product", "Built 20+ components", "Received full-time offer"]
  },
  {
    id: 3,
    date: "Sep 2019 - May 2023",
    title: "B.S. Computer Science",
    organization: "University of California",
    description: "Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering. Active member of the Coding Club and hackathon organizer.",
    type: "education",
    highlights: ["3.8 GPA", "Dean's List", "Hackathon Winner"]
  },
  {
    id: 4,
    date: "Jun 2022",
    title: "HackBay 2022 Winner",
    organization: "Bay Area Hackathon",
    description: "Won first place among 200+ teams by building a real-time collaboration tool for remote teams in 48 hours using React, WebSockets, and Firebase.",
    type: "achievement",
    highlights: ["1st Place", "200+ teams", "48-hour build"]
  },
  {
    id: 5,
    date: "2024",
    title: "Open Source Contributor",
    organization: "Various Projects",
    description: "Active contributor to popular React ecosystem projects. Submitted PRs to major UI libraries, created custom hooks library with 500+ GitHub stars.",
    type: "achievement",
    highlights: ["500+ stars", "Multiple PRs merged", "Custom hooks library"]
  }
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const blogs = [
  {
    id: 1,
    title: "Building Scalable React Apps with Server Components",
    description: "A deep dive into React Server Components, when to use them, and how they change the way we think about data fetching and rendering in modern React applications.",
    link: "https://hashnode.com",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    tags: ["React", "Performance", "Architecture"]
  },
  {
    id: 2,
    title: "Mastering TypeScript Generics for React Developers",
    description: "Learn how to leverage TypeScript generics to create type-safe, reusable React components that your team will love. Real-world patterns and examples included.",
    link: "https://hashnode.com",
    date: "Feb 20, 2025",
    readTime: "6 min read",
    tags: ["TypeScript", "React", "DX"]
  },
  {
    id: 3,
    title: "The Art of Micro-Animations in Web Interfaces",
    description: "How subtle animations can dramatically improve user experience. Practical guide using Framer Motion with before/after comparisons and performance tips.",
    link: "https://hashnode.com",
    date: "Jan 10, 2025",
    readTime: "5 min read",
    tags: ["Animation", "UX", "Framer Motion"]
  },
  {
    id: 4,
    title: "State Management in 2025: Beyond Redux",
    description: "Exploring modern state management solutions—Zustand, Jotai, and Signals—and when each makes sense for your React project's architecture.",
    link: "https://hashnode.com",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    tags: ["React", "State Management", "Architecture"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Product Manager at TechNova",
    text: "Alex delivered an outstanding frontend that exceeded all expectations. The attention to detail and performance optimization were remarkable.",
    avatar: "SM"
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "CTO at StartupXYZ",
    text: "Working with Alex was a game-changer. The React codebase is clean, well-documented, and incredibly maintainable. Highly recommend!",
    avatar: "JR"
  },
  {
    id: 3,
    name: "Emily Zhang",
    role: "Lead Designer at CreativeHub",
    text: "Alex has a rare combination of technical skill and design sensibility. Every pixel-perfect implementation matched our Figma designs flawlessly.",
    avatar: "EZ"
  },
  {
    id: 4,
    name: "Michael Foster",
    role: "Engineering Manager at DataFlow",
    text: "The components Alex built are beautifully architected. Clean separation of concerns, great TypeScript types, and excellent test coverage.",
    avatar: "MF"
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Founder at AppLaunch",
    text: "Alex transformed our MVP idea into a polished product in record time. The frontend performance and user experience are stellar.",
    avatar: "PS"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Senior Developer at CloudScale",
    text: "Best React developer I've worked with. Alex brought innovative solutions to complex UI challenges and mentored our junior team effectively.",
    avatar: "DK"
  }
];
