import studentTracker from "../assets/student-tracker.png";
import school from "../assets/school.webp";
import farming from "../assets/farming.jpg";
import portfolio from "../assets/portfolio.png";
import notes from "../assets/notes.png";

export const projectFilters = [
  "All",
  "Full Stack",
  "Frontend",
  "AI",
];

export const projects = [
  {
    id: 1,
    title: "College Student Tracking System",
    category: "Full Stack",
    image: studentTracker,
    description:
      "A role-based student management system for Admin, Instructor, and Students with attendance, marks, courses, and authentication.",
    features: [
      "Role-Based Authentication",
      "Student Management",
      "Attendance & Marks",
      "Responsive Dashboard",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
    ],
    github: "https://github.com/Moseskazmi/College_Student_Tracking",
    demo: "https://your-demo-link.vercel.app",
  },

  {
    id: 2,
    title: "School Management Website",
    category: "Frontend",
    image: school,
    description:
      "A modern and responsive school website with multiple pages and clean UI.",
    features: [
      "Responsive Design",
      "Hero Section",
      "Admissions",
      "Contact Form",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/Moseskazmi",
    demo: "https://your-demo-link.vercel.app",
  },

  {
    id: 3,
    title: "Smart Farming Assistant",
    category: "AI",
    image: farming,
    description:
      "AI-powered crop recommendation system using soil data, weather information, and machine learning.",
    features: [
      "Crop Prediction",
      "Weather Integration",
      "Soil Analysis",
      "Recommendation Report",
    ],
    tech: [
      "Python",
      "Django",
      "Machine Learning",
      "MySQL",
    ],
    github: "https://github.com/Moseskazmi",
    demo: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    category: "Frontend",
    image: portfolio,
    description:
      "Personal portfolio showcasing projects, skills, experience, and contact information.",
    features: [
      "Dark Mode",
      "Animations",
      "Responsive Design",
      "Modern UI",
    ],
    tech: [
      "React.js",
      "Framer Motion",
      "Tailwind CSS",
    ],
    github: "https://github.com/Moseskazmi",
    demo: "#",
  },

  {
    id: 6,
    title: "Notes Sharing System",
    category: "Full Stack",
    image: notes,
    description:
      "A platform where students can upload, download, and manage study notes securely.",
    features: [
      "Authentication",
      "Upload Notes",
      "Download PDFs",
      "Search Notes",
    ],
    tech: [
      "Django",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    github: "https://github.com/Moseskazmi",
    demo: "#",
  },
];