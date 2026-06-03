// export const Skill_data = [
//     {
//       skill_name: "Html 5",
//       Image: "/html.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Css",
//       Image: "/css.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Java Script",
//       Image: "/js.png",
//       width: 65,
//       height: 65,
//     },
//     {
//       skill_name: "Tailwind Css",
//       Image: "/tailwind.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "React",
//       Image: "/react.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Redux",
//       Image: "/redux.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "React Query",
//       Image: "/reactquery.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Type Script",
//       Image: "/ts.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Next js 13",
//       Image: "/next.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Framer Motion",
//       Image: "/framer.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Stripe Payment",
//       Image: "/stripe.webp",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Node js",
//       Image: "/node-js.png",
//       width: 80,
//       height: 80,
//     },
//     {
//       skill_name: "Mongo db",
//       Image: "/mongodb.png",
//       width: 40,
//       height: 40,
//     },
  
//   ];
  
export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    href: 'https://www.linkedin.com/in/harshlogic/',
  },
  {
    name: "Github",
    src: "/github.svg",
    href:'https://github.com/HarshLogic',

  },
  {
    name: "Leetcode",
    src: "/leetcode.svg",
    href:"https://leetcode.com/u/HarshLogic/"
  },
  {
    name: "HackerRank",
    src: "/hackerrank.svg",
    href: "https://www.hackerrank.com/profile/harshlogic"
  },
  {
    name: "CodeChef",
    src: "/codechef_logo.png",
    href: "https://www.codechef.com/users/harshlogic"
  },
  {
    name: "Codolio",
    src: "/codolio.svg",
    href: "https://codolio.com/profile/Harshpiyush"
  },
];



export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: "/mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "RESTful APIs",
    Image: "/api interface.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "BootStrap",
    Image: "/bootstrap.png",
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: "/express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: "/Firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Pandas",
    Image: "/pandas.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Numpy",
    Image: "/numpy.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Linux",
    Image: "/linux.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Data Visualization",
    Image: "/Data Visualization.png",
    width: 70,
    height: 70,
  }
];

export const Full_stack = [
  {
    skill_name: "React Native",
    Image: "/ReactNative .png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Python",
    Image: "/python.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    Image: "/docker.webp",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    Image: "/figma.png",
    width: 50,
    height: 50,
  },

  {
    skill_name: "Git",
    Image: "/github.svg",
    width: 70,     
    height: 70,
  }
];



export const Other_skill = [
  {
    skill_name: "java",
    Image: "/java.svg",
    width: 60,
    height: 60,
  },
];

// -------------------- Resume / Experience Data --------------------
export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
  // technologies?: string[]; // Commented out - not displayed in UI for now
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Digital Marketing & Web Development Intern",
    company: "Kabhi Tech",
    period: "Jan 2024 - Mar 2024",
    summary: "Patna, Bihar, India · On-site",
    highlights: [
      "Built an Online Auction System with a focus on responsive UI and user experience. Contributed to frontend development using HTML, CSS, and JavaScript, improved accessibility, and optimized navigation. Increased SEO rankings by 30% through targeted content strategies. Also designed and delivered digital marketing creatives while collaborating with cross-functional teams to meet deadlines.",
    ],
    // technologies: ["FastAPI", "Azure", "React Native", "FinFactor", "MFCentral"]
  },
  {
    role: "AI/ML Summer Internship",
    company: "WinnoVation",
    period: "Jun 2025 - Aug 2025",
    summary: "Delhi, New Delhi, India · On-site",
    highlights: [
      "Completed an intensive industry-level training program focused on Artificial Intelligence and Machine Learning.",
      "Built strong proficiency in Python, applying advanced data structures, object-oriented programming (OOP), and optimizing algorithms for time and space complexity.",
      "Performed Exploratory Data Analysis (EDA) and data preprocessing using Pandas, NumPy, and visualization libraries.",
      "Developed and deployed multiple machine learning models across:",
      "1. Regression",
      "2. Classification",
      "3. Clustering",
    ],
    // technologies: ["TypeScript", "Next.js", "MobX", "Nx", "Apache ECharts", "MongoDB"]
  },
  {
    role: "Artificial Inteligence",
    company: "SAMSUNG INNOVATION CAMPUS - SIC",
    period: "Dec 2025 - Mar 2026",
    summary: "Online / Offline",
    highlights: [
      "Successfully completed the Artificial Intelligence program offered by Samsung Innovation Campus (SIC), focused on real-world AI applications",
      "Gained hands-on experience in Python programming, data analysis, and machine learning workflows.",
      "Applied theoretical knowledge through practical assignments and real-world datasets.",
      "Strengthened problem-solving skills and understanding of AI-driven solutions."
    ],
  }
];

export interface AchievementItem {
  title: string;
  description: string;
}

export const achievementData: AchievementItem[] = [
  {
    title: "Rating on LeetCode",
    description: "Top 40% in LeetCode contests."
  },
  // {
  //   title: "2★ on CodeChef",
  //   description: "Achieved 2-star on CodeChef."
  // },
  {
    title: "650+ Problems Solved",
    description: "Solved 650+ algorithmic problems across LeetCode, CodeChef, and GeeksforGeeks."
  },
  {
    title: "SIH 2025 Semi-Finalist",
    description: "Secured a position in the semi-finals of Smart India Hackathon 2025, showcasing innovative problem-solving skills."
  },
  {
    title: "Harkirat Cohort 4.0",
    description: "OnGoing the intensive 0-100 web development bootcamp focusing on full-stack development practices."
  }
];

// -------------------- Education Data --------------------
export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology - BTech, Information Technology",
    institution: "Bhagwan Parshuram Institute Of Technology - (GGSIPU Delhi)",
    period: "Aug 2024 - May 2027",
    description: "Top 1% student in Information Technology department, With CGPA of 9.25"
  },
  {
    degree: "Diploma, Computer Science",
    institution: "Amity University, Uttar Pradesh",
    period: "Jul 2021 - May 2024"
  }
];

// -------------------- Leadership & Volunteering Data --------------------
export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
}

export const leadershipData: LeadershipItem[] = [
  {
    role: "Social Media Head - Optic Click ",
    organization: "Optic Click - Photography Club of BPIT",
    period: "Jan 2025 - Present",
  },
  {
    role: "Team Leader - Smart India Hackathon 2025",
    organization: "SIH 2025, Ministry of Education, Government of India",
    period: "Nov 2024",
  },
  {
    role: "Member",
    organization: "Drishti - Rotarct Club of BPIT",
    period: "Oct 2025 - Present",
  },
  {
    role: "Member",
    organization: "Fusion Tech Club - Amity University",
    period: "Sep 2021 - Mar 2023",
  },
  {
    role: "Volunteer - Training and Placement Cell",
    organization: "BPIT Training and Placement Cell",
    period: "Jan 2026 - Present",
  },
  {
    role: "Project Chair",
    organization: "Research and Development Cell (Machine Learning) - BPIT",
    period: "Mar 2025 - Present",
  }
];
