import { StaticImageData } from "next/image";
import Budget from "@/assets/FinTrack Showcase/Budget.jpg"
import Landing from "@/assets/FinTrack Showcase/Landing.jpg"
import Dashboard from "@/assets/FinTrack Showcase/Dashboard.png"
import Goal from "@/assets/FinTrack Showcase/Goal.jpg"
import Chatbot from "@/assets/FinTrack Showcase/Chatbot.jpg"
import Setting from "@/assets/FinTrack Showcase/Setting.jpg"
import Stats from "@/assets/FinTrack Showcase/Stats.jpg"
import Transactions from "@/assets/FinTrack Showcase/Transactions.jpg"
import EcoLanding from "@/assets/EcoConnect Showcase/Landing.jpg"
import EcoCheckin from "@/assets/EcoConnect Showcase/Checkin.jpg"
import EcoEventDetail from "@/assets/EcoConnect Showcase/EventDetail.jpg"
import EcoEventManagement from "@/assets/EcoConnect Showcase/EventManagement.jpg"
import EcoGamification from "@/assets/EcoConnect Showcase/Gamification.jpg"
import EcoUserProfile from "@/assets/EcoConnect Showcase/UserProfile.jpg"
import JobLanding from "@/assets/JobTracker Showcase/Landing.jpg"
import JobLogin from "@/assets/JobTracker Showcase/Login.jpg"
import JobDashboard from "@/assets/JobTracker Showcase/Dashboard.jpg"
import JumpyBirdGif from "@/assets/JumpyBird Showcase/JumpyBirdGif.gif"

const fintrackGallery: StaticImageData[] = [
  Landing, Dashboard, Chatbot, Transactions, Budget, Goal, Stats, Setting
]

const ecoconnectGallery: StaticImageData[] = [
  EcoLanding, EcoEventDetail, EcoEventManagement, EcoCheckin, EcoUserProfile, EcoGamification
]

const jobtrackerGallery: StaticImageData[] = [
  JobLanding, JobLogin, JobDashboard
]

export interface ProjectData {
  id: string;
  title: string;
  shortDesc: string; 
  description: string; 
  techStack: string[];
  images: StaticImageData[]; 
  links: {
    github?: string;
    demo?: string;
  };
  themeColor: string; 
  color: string;
  type?: string;
}

export const projectsData: ProjectData[] = [
    {
    id: "profile",
    title: "MY_PROFILE_DATA", 
    shortDesc: "Experience & Skills Log",
    description: "", 
    techStack: [],
    images: [],
    links: {},
    themeColor: "#F59E0B",
    color: "#F59E0B",
    type: "system" 
  },
  {
    id: "fintrack",
    title: "FinTrack",
    shortDesc: "Personal Finance Management System",
    description: "FinTrack is a comprehensive financial management platform designed to help users track expenses, plan budgets, and receive personalized financial advice through an AI-powered Chatbot.",
    techStack: ["ReactJS", "TypeScript", "JavaScript", "Node.js", "MongoDB", "Tailwind", "Chart.js"],
    images: fintrackGallery,
    links: {
      github: "https://github.com/datle04/fintrack-frontend",
      demo: "https://fintrack-frontend-pg3r.onrender.com/"
    },
    themeColor: "#A78BFA",
    color: "#A78BFA"
  },
  {
    id: "ecoconnect",
    title: "EcoConnect",
    shortDesc: "Zalo Mini App for Volunteers",
    description: "EcoConnect is a comprehensive ecosystem designed to connect Volunteers through comunity events via Zalo Mini App.",
    techStack: ["ReactJS", "JavaScript", "Zalo Mini App SDK", "Tailwind", "Node.js", "MongoDB"],
    images: ecoconnectGallery,
    links: {
      github: "https://github.com/datle04/ecoconnect-showcase" 
    },
    themeColor: "#34D399",
    color: "#34D399"
  },
  {
    id: "jobtracker",
    title: "Job Tracker",
    shortDesc: "Job Application Tracking Website",
    description: "Job Tracker is a platform for people of working age to track the status of their job applications.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    images: jobtrackerGallery,
    links: {
      github: "https://github.com/datle04/job-application-tracker",
      demo: "https://job-tracker-mu-sooty.vercel.app/" 
    },
    themeColor: "#F472B6",
    color: "#F472B6"
  },
  {
    id: "jumpybird",
    title: "Jumpy Bird",
    shortDesc: "A Flappy Bird clone Web game",
    description: "Jumpy Bird is a clone of the famous game built with Cocos Creator to fulfill my passion for games.",
    techStack: ["Cocos Creator, TypeScript"],
    images: [JumpyBirdGif],
    links: {
      github: "https://github.com/datle04/jumpy-bird",
    },
    themeColor: "#a3e635",
    color: "#a3e635"
  },
];

export const getProjectById = (id: string) => projectsData.find(p => p.id === id);