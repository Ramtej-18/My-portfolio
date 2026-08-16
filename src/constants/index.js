export const PERSONAL_INFO = {
  name: "Ramtej",
  fullName: "Ramtej Tandel",
  title: "Full-Stack Developer",
  roles: [
    "Full-Stack Web Developer",
    "MERN Stack Specialist",
    "React & Node.js Engineer"

  ],
  bio: "Passionate Full-Stack Developer dedicated to building immersive, lightning-fast, and responsive digital experiences. Combining cutting-edge 3D technologies, modern React architectures, and robust backend engineering.",
  tagline: "Crafting Interactive Web Experiences with MERN & 3D Magic",
  location: "Pune, India",
  email: "tandelramtej6@gmail.com",
  phone: "+91 9767866152",
  availableForHire: true,
  socials: {
    github: "https://github.com/Ramtej-08",
    linkedin: "https://www.linkedin.com/in/ramtej-tandel-471b70245/",
    twitter: "https://twitter.com",
    instagram: "TejTandel_007"
  }
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "qualifications", label: "Qualifications" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const STATS = [
  { value: "3+", label: "Years Experience", suffix: "Y+" },
  { value: "25+", label: "Projects Built", suffix: "+" },
  { value: "15+", label: "Tech Stacks Mastered", suffix: "+" },
  { value: "99%", label: "Client Satisfaction", suffix: "%" }
];

export const SERVICES = [
  {
    title: "Full-Stack Web Apps",
    description: "End-to-end web applications with performant React/Next.js frontends, scalable Node.js/Express backends, and robust databases.",
    icon: "Code2",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "3D & Interactive Web",
    description: "Immersive 3D web experiences using Three.js, React Three Fiber, GLSL shaders, and WebGL physics.",
    icon: "Cuboid",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "MERN Stack Specialist",
    description: "High-throughput RESTful APIs and GraphQL services backed by MongoDB, Express, React, and Node.js.",
    icon: "Layers",
    gradient: "from-emerald-400 to-cyan-500"
  },
  {
    title: "Frontend Developer",
    description: "Frontend Developer skilled in building responsive, modern, and user-friendly web applications using HTML, CSS, JavaScript, React.js, and Tailwind CSS. Focused on creating clean UI and smooth user experiences.",
    icon: "Sparkles",
    gradient: "from-yellow-400 to-orange-500"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend & 3D",
    skills: [
      { name: "React.js", level: 95, color: "#00f2fe" },
      { name: "JavaScript / ES6+", level: 95, color: "#f7df1e" },
      { name: "TypeScript", level: 85, color: "#3178c6" },
      { name: "Tailwind / CSS3", level: 95, color: "#38bdf8" },
      { name: "Framer Motion", level: 90, color: "#f72585" },
      { name: "HTML5 / Canvas", level: 98, color: "#ff6b6b" }
    ]
  },
  {
    category: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: 92, color: "#22c55e" },
      { name: "Express.js", level: 90, color: "#94a3b8" },
      { name: "MongoDB", level: 88, color: "#10b981" },
      { name: "REST API", level: 90, color: "#e11d48" },
      { name: "Firebase", level: 85, color: "#f59e0b" },
      { name: "Git / GitHub", level: 92, color: "#f97316" }
    ]
  }
];

export const FLOATING_3D_SKILLS = [
  { name: "React", icon: "⚛️", color: "#00f2fe" },
  { name: "Node.js", icon: "🟢", color: "#22c55e" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e" },
  { name: "MongoDB", icon: "🍃", color: "#10b981" },
  { name: "TypeScript", icon: "🔷", color: "#3178c6" },
  { name: "Tailwind", icon: "🌊", color: "#38bdf8" }
];

export const QUALIFICATIONS = {
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Felix Its",
      duration: "Dec-2023 - Apr-2024",
      location: "Pune, India",
      description: "Built production-grade full-stack web application modules using MERN Stack. Implemented JWT authentication, Bcrypt password hashing, and reusable React component libraries. Optimized MongoDB queries and API performance, improving server response time by 30%. Followed MVC architecture and modular development practices for scalable applications.",
      highlights: ["React.js", "Node.js", "Exress.Js", "MongoDB", "JWT Authentication", "RESTful APIs"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Electronics & Telecommunication",
      institution: "Smt. Kashibai Navale College of Engineering",
      duration: "2023 - 2026",
      location: "Maharashtra, India",
      description: "Bachelor of Engineering in Electronics & Telecommunication with CGPA of 7.3. Gained strong foundations in programming, data structures, algorithms, and software engineering principles alongside core electronics coursework.",
      grade: "First Class (7.3 CGPA)"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Yashwantrao Bhonsale Information Technology",
      duration: "2021 - 2023",
      location: "Maharashtra, India",
      description: "Completed a Diploma in Computer Engineering with a strong foundation in programming, web development, databases, and software engineering concepts. Developed practical knowledge through academic projects and hands-on experience with technologies such as HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB. This diploma helped me build problem-solving skills and prepared me to develop responsive, user-friendly, and full-stack web applications.",
      grade: "First Class with Distinction (76.23%)"
    },
    {
      degree: "SSC",
      institution: "New English School, Ubhadanda",
      duration: "2020",
      location: "Maharashtra, India",
      description: "Successfully completed my Secondary School Certificate (SSC), building a strong foundation in mathematics, science, communication, and problem-solving. My school education helped me develop discipline, analytical thinking, and a strong interest in technology, which motivated me to pursue further studies in Computer Engineering.",
      grade: "First Class with Distinction (76.80%)"
    }
  ]
};

export const PROJECTS = [
  {
    id: "Interview-AI",
    title: "Interview-AI - Smart Interview Prep",
    category: "Full Stack",
    shortDesc: "Developed an AI-powered interview preparation platform that generates personalized interview questions and answers based on a candidate’s resume and target company. Built using React.js, Node.js, Express.js, MongoDB, and AI technologies to provide an interactive and effective interview preparation experience.",
    image: "/Interview-ai-thumbnail.png",
    tags: ["React", "Node.Js", "Exress.Js", "MongoDB"],
    liveDemo: "interview-ai-preparation.vercel.app",
    github: "https://github.com/Ramtej-18/Interview-AI",
    features: [
      "AI-Powered Interview Questions – Generates relevant questions using AI.",
      "Resume-Based Questions – Creates questions based on the candidate’s uploaded resume.",
      "Company-Specific Preparation – Tailors interview preparation according to the target company.",
      "AI-Generated Answers – Provides suggested answers and guidance for interview questions."
    ]
  },
  {
    id: "Todo-Application",
    title: "Todo Application - Task Management",
    category: "Full Stack",
    shortDesc: "A task management application that helps users efficiently create, update, delete, and organize their daily tasks. Built with a simple and responsive interface to make task tracking easy and productive.",
    image: "/Todo-application-thumbnail.png",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Ramtej-18/Todo-Application",
    features: [
      "Add Tasks – Create and add new tasks easily.",
      "Edit Tasks – Update task details whenever needed.",
      "Delete Tasks – Remove completed or unwanted tasks.",
      "Responsive UI – Simple and user-friendly interface."
    ]
  },
  {
    id: "Food place Landing Page",
    title: "Food place Landing Page",
    category: "Frontend",
    shortDesc: "Food Place is a responsive restaurant landing page designed with a modern and attractive UI. It showcases food items, restaurant information, and call-to-action sections to provide users with an engaging browsing experience.",
    image: "/Food-place-thumbnail.png",
    tags: [ "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ramtej-18/Food-Place-Landing-Page-",
    features: [
      "Responsive Design – Works smoothly across desktop, tablet, and mobile devices.",
      "Modern UI – Clean and attractive food-themed interface.",
      "Hero Section – Eye-catching food visuals with clear call-to-action buttons.",
      "User-Friendly Interface – Simple layout designed for easy browsing and engagement."
    ]
  },
   {
    id: "Bank Loan Application",
    title: "Bank Loan Application",
    category: "Frontend",
    shortDesc: "A user-friendly web application that allows users to explore loan options and submit loan applications online. The project provides a simple interface for entering applicant details and managing loan application information efficiently.",
    image: "/Bank-loan-thumbnail.png",
    tags: [ "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ramtej-18/Bank-Loan-Application",
    features: [
      "Loan Application Form – Allows users to submit personal and financial details.",
      "Applicant Details Management – Captures and manages applicant information.",
      "Loan Amount & Tenure – Allows users to enter desired loan amount and repayment period.",
      "Application Status – Displays the current status of the loan application."
    ]
  },
  {
    id: "Dealista-Landing-Page ",
    title: "Dealista-Landing-Page ",
    category: "Frontend",
    shortDesc: "A modern and responsive shopping website landing page designed to showcase products, offers, and key services through an attractive and user-friendly interface. The page focuses on clean design, easy navigation, and an engaging shopping experience.",
    image: "/Dealista-thumbnail.png",
    tags: [ "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ramtej-18/Dealista-Landing-Page",
    features: [
      "Modern UI Design – Clean and attractive interface for showcasing products.",
      "Responsive Layout – Optimized for desktop, tablet, and mobile devices.",
      "Product Showcase – Displays products with images, names, prices, and details.",
      "Category Navigation – Helps users easily explore different product categories."
    ]
  },


];

export const CODE_SNIPPET = `// Ramtej - Full Stack 3D Developer
const developer = {
  name: "Ramtej",
  role: "Full-Stack (MERN) Developer",
  coreSkills: ["React", "Node", "Exress.js", "MongoDB"],
  passion: "Creating next-gen interactive web apps",
  hireable: true,
  status: "Ready to innovate 🚀"
};

function buildFuture() {
  return developer.skills.map(tech => innovate(tech));
}

console.log("Welcome to my digital universe!");`;
