import { AgentCard } from "./agent-card"
import {
  Zap,
  Globe,
  Search,
  Mail,
  Phone,
  MessageCircle,
  PresentationIcon as PresentationChart,
  PenTool,
  TrendingUp,
  Target,
} from "lucide-react"

const agents = [
  {
    id: "lead",
    name: "Lead Generation",
    description: "Automates lead generation processes to find potential customers.",
    icon: <Zap />,
  },
  {
    id: "web",
    name: "Web Listening",
    description:
      "Monitors online conversations in groups, forums, and platforms like Quora to identify potential customers and automatically engage with them.",
    icon: <Globe />,
  },
  {
    id: "research",
    name: "Research",
    description:
      "Analyzes potential clients' social media profiles and shared information to gather insights on their background, emotional values, and budget.",
    icon: <Search />,
  },
  {
    id: "email",
    name: "Email",
    description:
      "Sends automated, personalized sales emails and follow-up messages to potential clients to nurture leads and drive conversions.",
    icon: <Mail />,
  },
  {
    id: "call",
    name: "Call",
    description:
      "Generates tailored sales scripts and schedules calls with clients to facilitate effective sales conversations.",
    icon: <Phone />,
  },
  {
    id: "chat",
    name: "Chat",
    description:
      "Engages in sales conversations via website, social media, or WhatsApp, identifying customer needs and promoting products or services.",
    icon: <MessageCircle />,
  },
  {
    id: "presentation",
    name: "Presentation",
    description:
      "Creates dynamic, customized presentations for clients based on your products and services to enhance sales pitches.",
    icon: <PresentationChart />,
  },
  {
    id: "blog",
    name: "Blog",
    description:
      "Generates and automatically posts keyword-optimized blogs and articles for your website or LinkedIn to boost online presence.",
    icon: <PenTool />,
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Identifies social media trends and competitor strategies to create and post relevant images or videos, enhancing your marketing efforts.",
    icon: <TrendingUp />,
  },
  {
    id: "direct",
    name: "Direct",
    description:
      "Executes specific, goal-oriented tasks such as responding to customer requests or finding influencers within a certain follower range.",
    icon: <Target />,
  },
]

export function AgentGrid({ selectedAgents, onToggle }: { selectedAgents: string[]; onToggle: (id: string) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentCard key={agent.id} {...agent} onToggle={onToggle} isSelected={selectedAgents.includes(agent.id)} />
      ))}
    </div>
  )
}

