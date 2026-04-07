export const personalInfo = {
  name: "Vishal Singh",
  title: "React Developer",
  tagline: "Lightning-fast React UIs that convert",
  bio: "I'm a dedicated React developer with 2+ years of experience building high-performance web applications that enhance user engagement and deliver measurable business results. Starting with a 10-month internship, I've mastered TypeScript, modern React patterns, and accessible designs that create seamless user experiences.",
  shortBio: "React specialist creating fast, accessible UIs with proven results. 2+ years building production apps users love.",
  email: "thevishingh@gmail.com",
  phone: "+919175506236",
  whatsapp: "+919175506236",
  location: "Mumbai, India",
  resumeLink: "https://thevishingh-resume.vercel.app",
  social: {
    github: "https://github.com/thevishingh",
    linkedin: "https://linkedin.com/in/thevishingh",
    twitter: "https://twitter.com/thevishingh"
  },
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects", value: "15+" },
    { label: "Satisfied Clients", value: "10+" },
    { label: "GitHub Stars", value: "50+" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 78, color: "#61DAFB" },
      { name: "JavaScript", level: 80, color: "#F7DF1E" },
      { name: "TypeScript", level: 68, color: "#3178C6" },
      { name: "Next.js", level: 70, color: "#ffffff" },

      { name: "HTML5", level: 88, color: "#E34F26" },
      { name: "CSS3", level: 85, color: "#1572B6" },
      { name: "Tailwind CSS", level: 88, color: "#06B6D4" },

      { name: "Material UI", level: 75, color: "#007FFF" },
      { name: "Ant Design", level: 70, color: "#0170FE" },
      { name: "Bootstrap", level: 80, color: "#7952B3" },
      { name: "DaisyUI", level: 75, color: "#1AD1A5" },

      { name: "Framer Motion", level: 65, color: "#FF0055" },
      { name: "Redux", level: 66, color: "#764ABC" }
    ]
  },

  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 30, color: "#339933" },
      { name: "Express", level: 28, color: "#ffffff" },
      { name: "Python", level: 35, color: "#3776AB" },
      { name: "FastAPI", level: 5, color: "#009688" },
      { name: "GraphQL", level: 25, color: "#E10098" },
      { name: "REST APIs", level: 65, color: "#00e5ff" }
    ]
  },

  {
    category: "Database & Cloud",
    items: [
      { name: "MongoDB", level: 30, color: "#47A248" },
      { name: "PostgreSQL", level: 25, color: "#4169E1" },
      { name: "Firebase", level: 20, color: "#FFCA28" },
      { name: "AWS", level: 20, color: "#FF9900" },
      { name: "Docker", level: 25, color: "#2496ED" },
      { name: "Vercel", level: 70, color: "#ffffff" }
    ]
  },

  {
    category: "Tools & Testing",
    items: [
      { name: "Git", level: 75, color: "#F05032" },
      { name: "Jest", level: 40, color: "#C21325" },
      { name: "Cypress", level: 30, color: "#17202C" },
      { name: "Figma", level: 40, color: "#F24E1E" },
      { name: "VS Code", level: 85, color: "#007ACC" },
      { name: "Webpack", level: 45, color: "#8DD6F9" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "BhojPal Pro",
    subtitle: "Restaurant Management System",
    description: "A restaurant management platform developed as part of a team to handle orders, billing, kitchen workflows, and back-office operations. I worked primarily as a frontend React engineer, building responsive and efficient user interfaces integrated with backend services and a MySQL database.",
    techStack: ["React", "Redux", "DaisyUI", "Node.js", "Express.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { module: "Operations", role: "Frontend" }
  },
  {
    id: 2,
    title: "Vishal.dev",
    subtitle: "Interactive 3D Portfolio",
    description: "A personal portfolio designed to showcase my frontend skills, creativity, and visual design approach. It combines interactive 3D elements, smooth animations, and modern UI components to create an engaging developer portfolio experience.",
    techStack: ["React", "Three.js", "React Three Fiber", "Framer Motion", "shadcn/ui", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { focus: "Creative UI", type: "Portfolio" }
  },
  {
    id: 3,
    title: "TemplateVault",
    subtitle: "Frontend Template Library",
    description: "A growing library of reusable frontend templates built for landing pages, dashboards, and business websites. The project highlights my ability to create flexible, well-structured UI layouts using multiple frontend technologies and styling approaches.",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: true,
    stats: { templates: "20+", stack: "Multi-tech" }
  },
  {
    id: 4,
    title: "WeatherSync",
    subtitle: "Weather Intelligence App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, severe weather alerts, and historical data visualization. Supports offline mode.",
    techStack: ["React", "TypeScript", "OpenWeather API", "Mapbox", "PWA", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
    liveLink: "#",
    githubLink: "#",
    featured: false,
    stats: { api: "OpenWeather", ui: "Animated UI" }
  }
];

export const timeline = [
{
  id: 1,
  date: "Mar 2024 - Present",
  title: "React Developer", 
  organization: "Mentation Solutions Pvt Ltd",
  description: "Started as React fresher and learned core concepts like props, state, API fetching, REST APIs, form handling with React Hook Form. Now building beautiful responsive UIs with Tailwind CSS, Next.js basics, Redux/Context API, and custom hooks for client projects.",
  type: "work",
  highlights: ["React fundamentals", "Next.js basics", "REST APIs & forms"]
},
{
  id: 2,
  date: "Jul 2023 - Mar 2024", 
  title: "Frontend Web Development Intern",
  organization: "Mentation Solutions Pvt Ltd",
  description: "Started with HTML/CSS creating static web pages, then learned JavaScript frameworks. Progressed to building beautiful UIs with React components and responsive design. Gained hands-on experience with real client projects.",
  type: "work",
  highlights: ["HTML/CSS → React", "Responsive UIs", "Client projects"]
},
  {
    id: 3,
    date: "Jan 2023 - Jun 2023",
    title: "MERN Stack Developer",
    organization: "Ducat Academy, Gurugram",
    description: "6-month intensive MERN stack course. Learned React, Node.js, MongoDB, and full-stack development fundamentals.",
    type: "education",
    highlights: ["MERN Stack", "6 months intensive", "Hands-on projects"]
  },
  {
    id: 4,
    date: "2017 - 2020",
    title: "B.Sc. Information Technology",
    organization: "Mumbai University",
    description: "Graduated with B.Sc. IT focusing on web development, programming, and database management.",
    type: "education",
    highlights: ["Web development", "Programming", "Databases"]
  },
  {
    id: 5,
    date: "2017",
    title: "12th HSC",
    organization: "Maharashtra State Board",
    description: "Completed Higher Secondary Certificate with focus on Science/Commerce stream.",
    type: "education",
    highlights: ["HSC Maharashtra Board", "2017"]
  },
  {
    id: 6,
    date: "2015",
    title: "10th SSC",
    organization: "Maharashtra State Board",
    description: "Secondary School Certificate completion.",
    type: "education",
    highlights: ["SSC Maharashtra Board", "2015"]
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
    title: "Best React Copy-Paste UI Libraries for Fast Development",
    description: "A curated collection of React UI libraries and websites that provide ready-to-use, copy-paste Tailwind CSS components to speed up development and improve design quality.",
    link: "",
    date: "Feb 18, 2026",
    readTime: "6 min read",
    tags: ["React", "Tailwind CSS", "UI Libraries"]
  },
  {
    id: 2,
    title: "TypeScript Concepts Every React Developer Should Know",
    description: "A practical guide to essential TypeScript concepts for React developers, including props typing, interfaces, generics, utility types, and safer component patterns.",
    link: "",
    date: "Jan 27, 2026",
    readTime: "7 min read",
    tags: ["TypeScript", "React", "Frontend"]
  },
  {
    id: 3,
    title: "How to Use React Router v7 in Modern Applications",
    description: "A beginner-friendly guide to setting up and using React Router v7, covering route configuration, nested routes, layouts, loaders, and navigation patterns.",
    link: "",
    date: "Mar 09, 2026",
    readTime: "6 min read",
    tags: ["React Router", "React", "Routing"]
  },
  {
    id: 4,
    title: "Why Use Next.js Instead of React for Certain Projects",
    description: "An explanation of when Next.js is a better choice than plain React, with examples covering routing, SEO, server-side rendering, API routes, and performance benefits.",
    link: "",
    date: "Dec 14, 2025",
    readTime: "7 min read",
    tags: ["Next.js", "React", "Architecture"]
  },
  {
    id: 5,
    title: "How I Build Responsive UIs with React and Tailwind CSS",
    description: "A walkthrough of my approach to building responsive, reusable, and clean user interfaces using React, Tailwind CSS, and component-based design patterns.",
    link: "",
    date: "Nov 22, 2025",
    readTime: "5 min read",
    tags: ["React", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: 6,
    title: "Framer Motion Tips for Smoother React Interfaces",
    description: "A practical article on using Framer Motion to add meaningful animations to React apps without hurting performance, with patterns for page transitions, hover effects, and micro-interactions.",
    link: "",
    date: "Feb 03, 2026",
    readTime: "5 min read",
    tags: ["Framer Motion", "React", "UI Animation"]
  },
  {
    id: 7,
    title: "Redux vs Context API: What I Use and When",
    description: "A clear comparison of Redux and Context API based on real project use cases, including when each one makes sense for state management in React applications.",
    link: "",
    date: "Oct 11, 2025",
    readTime: "6 min read",
    tags: ["Redux", "React", "State Management"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Hardik Poojari",
    role: "Sales Manager",
    text: "Vishal works hard and delivers on time. His UIs always impress clients. Great guy to work with.",
    avatar: "HP",
    rating: 4.5
  },
  {
    id: 2,
    name: "Ajay Wagri",
    role: "Graphic Designer",
    text: "Vishal nails my Figma designs in React. Super easy to work with, gets everything right.",
    avatar: "AW",
    rating: 4.8
  },
  {
    id: 3,
    name: "Kunal Ranjan",
    role: "CTO",
    text: "Vishal picks up requirements fast and writes clean code. Solid React developer.",
    avatar: "KR",
    rating: 4.7
  },
  {
    id: 4,
    name: "Anand Murari",
    role: "CMO",
    text: "Vishal gets what we need for customers. Good team player, communicates well.",
    avatar: "AM",
    rating: 4.3
  },
  {
    id: 5,
    name: "Rahul Patel",
    role: "Restaurant Owner",
    text: "Our ordering app works great. Customers like it and it's fast. Delivered when promised.",
    avatar: "RP",
    rating: 4.2
  },
  {
    id: 6,
    name: "Anita Sharma",
    role: "Boutique Owner",
    text: "Website looks good and loads fast. Vishal explained everything simply.",
    avatar: "AS",
    rating: 4.4
  }
];