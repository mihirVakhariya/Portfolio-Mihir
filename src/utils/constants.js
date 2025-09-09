import {

  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaSearch,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMediumM,
  FaJava,
  FaBullhorn,
  FaShareAlt,
  FaCogs,
  FaHandshake,
  FaChartLine,
  FaBalanceScale,
  FaGlobe,
  FaReact,
  FaHtml5,
  FaCss3,
  FaTable,
  FaWindows,
  FaPalette
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap
} from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { SiTailwindcss } from "react-icons/si";
import { 
  SiVite, 
  SiRabbitmq, 
  SiKeycloak, 
  SiNginx, 
  SiApache, 
  SiLinux,
  SiGitlab,
  SiGithubactions,
  SiMailchimp,
  SiSpringboot,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiMysql,
  SiFastapi,
  SiJest,
  SiSelenium,
  SiPlaywright,
  SiHtmx,
  SiC,
  SiLangchain,
  SiFirebase,
  SiSupabase,
  SiWebpack,
  SiMarkdown
} from "react-icons/si";
import { BsBox } from "react-icons/bs";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
  { text: "Contact", path: "/contact" }
];

export const interestsData = [
  {
    interest: "Digital Marketing Strategy",
    icon: BsCodeSlash,
  },
  {
    interest: "SEO & Content Optimization",
    icon: BsRobot,
  },
  {
    interest: "Business Development",
    icon: AiFillCode,
  },
  {
    interest: "Client Acquisition",
    icon: BsGlobe,
  },
  {
    interest: "Market Research & Analysis",
    icon: GiArchiveResearch,
  },
  {
    interest: "Brand Growth & Visibility",
    icon: FaHashnode,
  },
  {
    interest: "Campaign Performance Analytics",
    icon: BsFileBarGraph,
  },
  {
    interest: "Partnerships & Networking",
    icon: FcElectronics,
  },
];

export const skillsData = [
  {
    category: "Digital Marketing",
    skills: [
      {
        name: "SEO",
        icon: FaSearch,
        color: "#3182CE"
      },
      {
        name: "Content Marketing",
        icon: FaBullhorn,
        color: "#38A169"
      },
      {
        name: "Social Media Growth",
        icon: FaShareAlt,
        color: "#D69E2E"
      },
      {
        name: "Paid Ads Performance",
        icon: FaBullhorn,
        color: "#E53E3E"
      },
      {
        name: "Marketing Automation",
        icon: FaCogs,
        color: "#805AD5"
      }
    ]
  },
  {
    category: "Business Development",
    skills: [
      {
        name: "Client Relations",
        icon: FaHandshake,
        color: "#38B2AC"
      },
      {
        name: "Revenue Growth",
        icon: FaChartLine,
        color: "#ED8936"
      },
      {
        name: "Negotiation & Deals",
        icon: FaBalanceScale,
        color: "#2F855A"
      },
      {
        name: "Market Expansion",
        icon: FaGlobe,
        color: "#DD6B20"
      }
    ]
  },
  {
    category: "Technical Skills",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
        color: "#61DAFB"
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26"
      },
      {
        name: "CSS3",
        icon: FaCss3,
        color: "#1572B6"
      },
      {
        name: "Excel",
        icon: FaTable,
        color: "#2B6CB0"
      },
      {
        name: "Microsoft Tools",
        icon: FaWindows,
        color: "#00A4EF"
      },
      {
        name: "Canva",
        icon: FaPalette,
        color: "#667EEA"
      }
    ]
  }
];

export const workData = [
  {
    company: "Shreeji Digital (Personal Firm)",
    companyImg: "shreeji.png",
    roles: [
      {
        designation: "Developer",
        duration: "2023 – 2025",
        description: (
          <>
            <ul>
              <li>
                Built web applications and digital solutions for clients using modern frontend and backend technologies.
              </li>
              <li>
                Managed deployment pipelines and cloud infrastructure for small-scale projects.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Code Vibes Digital (Partnership)",
    companyImg: "/codevibes.png",
    roles: [
      {
        designation: "Developer",
        duration: "2025 – Present",
        description: (
          <>
            <ul>
              <li>
                Developing full-stack applications for partners with emphasis on UX and performance.
              </li>
              <li>
                Collaborating with designers and stakeholders to deliver client-focused solutions.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Betasys.ai",
    companyImg: "/image.png",
    roles: [
      {
        designation: "IT Pre - Sales Analyst",
        duration: "1 July 2024 – 1 July 2025",
        description: (
          <>
            <ul>
              <li>
                Contributed to development of AI-driven applications and automated systems.
              </li>
              <li>
                Assisted in research, code optimization, and testing of platform features.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
  {
    company: "Researcher Connect",
    companyImg: "/researcher_connect.png",
    roles: [
      {
        designation: "Developer / Research Support",
        duration: "2 July 2025 – Present",
        description: (
          <>
            <ul>
              <li>
                Support research projects with data management, analysis, and software development.
              </li>
              <li>
                Implement features in web and mobile applications to facilitate research collaboration.
              </li>
            </ul>
          </>
        ),
      }
    ]
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Nivara Dental Care",
    image: "dental",
    link: "https://nivaraDentalCare.com",
    source: "", // if you have a GitHub repo, add it here
  },
  {
    type: "WEB-APP",
    title: "Hitlo by Rainbow",
    image: "rainbow",
    link: "https://hitlobyrainbow.com",
    source: "", // add GitHub repo if available
  },
  {
    type: "WEB-APP",
    title: "Travel Hub",
    image: "travel",
    link: "https://travelhub18.netlify.app",
    source: "", // add GitHub repo if available
  },
  {
    type: "WEB-APP",
    title: "Fitness Tracker",
    image: "fitness",
    link: "https://fitnesstracker18.netlify.app",
    source: "", // add GitHub repo if available
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/mihirVakhariya",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://www.instagram.com/vakhariya_mihir?igsh=MTB3MWh5cGYxYWk2bA==",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://www.linkedin.com/in/mihir-vakhariya-/",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;


