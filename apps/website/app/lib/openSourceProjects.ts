export interface OpenSourceProject {
  name: string;
  title: string;
  description: string;
  topics: string[];
  githubUrl: string;
  imageUrl: string | null;
  status: "in-progress" | "archived";
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    "name": "agent-guard",
    "title": "AgentGuard",
    "description": "A runtime authorization and security gateway for AI agent tool calls.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/agent-guard",
    "imageUrl": "/images/agent-guard.png",
    "status": "in-progress"
  },
  {
    "name": "signal-looper",
    "title": "SignalLooper",
    "description": "A desktop looper and pedalboard workstation for musicians.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/signal-looper",
    "imageUrl": "/images/signal-looper.png",
    "status": "in-progress"
  },
  {
    "name": "sentinel",
    "title": "Sentinel",
    "description": "An agentic security review platform for pull requests.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/sentinel",
    "imageUrl": "/images/sentinel.png",
    "status": "in-progress"
  },
  {
    "name": "glassbox-llms",
    "title": "glassbox-llms",
    "description": "🪟🔎 Glassbox LLMs is a GDG open-source project exploring the inner workings of large language models. We combine hands-on experiments with the latest research to decode the “black box” of modern AI",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/glassbox-llms",
    "imageUrl": null,
    "status": "archived"
  },
  {
    "name": "corkboard",
    "title": "corkboard",
    "description": "Corkboard is a digital hub designed to connect students with on-campus events, clubs, and opportunities. It provides a centralized space to stay updated and engaged with the university community.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/corkboard",
    "imageUrl": "/images/corkboard.png",
    "status": "archived"
  },
  {
    "name": "interface-ai",
    "title": "interface-ai",
    "description": "InterfaceAI is a Chrome extension that turns natural language into action, ask it to “book a flight to New York” or “set up an AWS instance,” and it handles the steps for you. Using intent recognition, vision-based execution, and contextual awareness, it explores webpages and builds digital profiles to make technology work for you.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/interface-ai",
    "imageUrl": "/images/interface-ai.png",
    "status": "archived"
  },
  {
    "name": "Ocular-Disease-Identifier",
    "title": "Ocular-Disease-Identifier",
    "description": "Increasing accessibility of diagnosis with ML detection of ocular diseases",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/Ocular-Disease-Identifier",
    "imageUrl": "https://raw.githubusercontent.com/DSC-McMaster-U/Ocular-Disease-Identifier/main/./Documentation/images/mvp_demo.gif",
    "status": "archived"
  },
  {
    "name": "ai-journal",
    "title": "ai-journal",
    "description": "AI-assisted journaling and mood-tracking application",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/ai-journal",
    "imageUrl": "/images/ai-journal.png",
    "status": "archived"
  },
  {
    "name": "DBAC-Companion-App",
    "title": "DBAC-Companion-App",
    "description": "Your mobile application for everything DBAC. Easily check schedules, book spaces, and access Pulse, Sports, Classes, and more right from your phone.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/DBAC-Companion-App",
    "imageUrl": "/images/dbac-companion.png",
    "status": "archived"
  },
  {
    "name": "Auto-ML",
    "title": "Auto-ML",
    "description": "An automated machine learning model generator built using Google Cloud Services.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/Auto-ML",
    "imageUrl": "/images/auto-ml.png",
    "status": "archived"
  },
  {
    "name": "Gamified-Learning-Platform",
    "title": "Gamified-Learning-Platform",
    "description": "An interactive, level-based platform that makes learning engaging through daily challenges and quizzes. Track your streak, earn XP, and compete on the leaderboards as you master new skills.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/Gamified-Learning-Platform",
    "imageUrl": "/images/gamified.png",
    "status": "archived"
  },
  {
    "name": "mac-FAQ-chatbot",
    "title": "mac-FAQ-chatbot",
    "description": "An intelligent conversational agent built to instantly answer frequently asked questions by McMaster students. It leverages Google Cloud to provide fast, reliable guidance on campus resources.",
    "topics": [],
    "githubUrl": "https://github.com/DSC-McMaster-U/mac-FAQ-chatbot",
    "imageUrl": "/images/mac-chatbot.png",
    "status": "archived"
  }
];
