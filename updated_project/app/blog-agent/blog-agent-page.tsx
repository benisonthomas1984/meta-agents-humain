"use client"
import { useState, useEffect } from "react"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Search,
  FileText,
  Bell,
  UserPlus,
  TrendingUp,
  X,
  Check,
  ChevronDown,
  ArrowLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

// Card Component
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

// Select Components
const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

// RealtimeUpdates Component
const RealtimeUpdates = () => {
  const [totalUsers, setTotalUsers] = useState(10000)
  const [totalArticles, setTotalArticles] = useState(50000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalUsers((prev) => prev + Math.floor(Math.random() * 5))
      setTotalArticles((prev) => prev + Math.floor(Math.random() * 10))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-6 bg-white shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">Real-time AI Blogging Activity</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-bold text-[#4285f4]">{totalUsers.toLocaleString()}</p>
          <p className="text-sm text-gray-600">Total Users</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-[#00c39a]">{totalArticles.toLocaleString()}</p>
          <p className="text-sm text-gray-600">AI-Generated Articles</p>
        </div>
      </div>
    </Card>
  )
}

// Notifications Component
const names = [
  "Emma Johnson",
  "Liam Smith",
  "Olivia Brown",
  "Noah Davis",
  "Ava Wilson",
  "Ethan Taylor",
  "Sophia Anderson",
  "Mason Thompson",
  "Isabella Clark",
  "William Martinez",
  "Mia Rodriguez",
  "James Lee",
  "Charlotte White",
  "Benjamin Harris",
  "Amelia Lewis",
  "Elijah Walker",
  "Harper Green",
  "Lucas Hall",
  "Evelyn Young",
  "Alexander King",
]

const actions = [
  { text: "signed up for AI Blogging Agent", icon: UserPlus },
  { text: "created their first AI-generated article", icon: FileText },
  { text: "increased their website traffic by 200%", icon: TrendingUp },
  { text: "generated 50 new leads with AI content", icon: TrendingUp },
  { text: "improved their search rankings with AI-optimized posts", icon: TrendingUp },
]

interface Notification {
  id: number
  name: string
  action: (typeof actions)[number]
  timestamp: Date
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification: Notification = {
        id: Date.now(),
        name: names[Math.floor(Math.random() * names.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        timestamp: new Date(),
      }
      setNotifications((prev) => [newNotification, ...prev.slice(0, 2)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 500, damping: 40 }}
            className="bg-white shadow-lg rounded-lg p-4 max-w-sm w-full flex items-start space-x-4"
          >
            <div className="flex-shrink-0">
              <Bell className="h-6 w-6 text-blue-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{notification.name}</p>
              <p className="text-sm text-gray-500 flex items-center space-x-1">
                <notification.action.icon className="h-4 w-4" />
                <span>{notification.action.text}</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">{notification.timestamp.toLocaleTimeString()}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Main content constants and component
const sampleArticles = {
  "Financial Technology": {
    title: "The Future of FinTech: How AI is Revolutionizing Personal Finance",
    content: `In the realm of **financial technology**, a revolution is underway.

**Artificial intelligence** is reshaping how we manage our money.

Gone are the days of static budgeting apps and generic financial advice.

Today's **FinTech** solutions offer personalized insights powered by **machine learning**.

Imagine an AI that predicts your spending patterns before you do.

Or a **robo-advisor** that rebalances your portfolio in real-time, responding to global events.

**Blockchain** technology is making transactions more secure and transparent than ever.

**Cryptocurrency** is challenging traditional notions of currency and value.

The future of finance is here, and it's smarter, faster, and more accessible than ever before.

Are you ready to embrace the **FinTech** revolution?`,
  },
  Startup: {
    title: "10 Essential Steps to Launch Your Tech Startup in 2025",
    content: `Launching a **tech startup** in 2025? Buckle up for an exhilarating ride!

First, identify a problem that needs solving. Your **startup** should fill a gap in the market.

Next, assemble a dream team. Look for diverse skills and shared passion.

Develop a **minimum viable product** (MVP) to test your concept.

Embrace **agile methodology** for rapid iteration and improvement.

Secure funding through **angel investors**, **venture capital**, or crowdfunding.

Build a strong online presence. Your digital footprint is crucial in the tech world.

Network relentlessly. Attend **startup** events, join incubators, and connect with mentors.

Focus on **user experience**. In 2025, seamless UX will be more critical than ever.

Stay ahead of **emerging technologies**. AI, VR, and quantum computing could be game-changers.

Finally, be prepared to pivot. The most successful **startups** adapt to change.

Ready to disrupt the status quo? Your **tech startup** journey begins now!`,
  },
  B2B: {
    title: "Maximizing ROI: B2B Marketing Strategies for the Digital Age",
    content: `In the **B2B** landscape, return on investment is king.

Digital transformation has revolutionized **business-to-business** marketing.

Content is still crucial, but now it's all about personalization at scale.

Harness the power of **AI** to tailor your message to each potential client.

**Account-based marketing** (ABM) is no longer optional—it's essential.

Leverage **predictive analytics** to identify your most promising leads.

**Social selling** has transformed LinkedIn into a B2B goldmine.

Don't neglect the power of **video marketing** in your B2B strategy.

**Chatbots** and **AI assistants** are revolutionizing customer service and lead qualification.

Remember, in **B2B**, relationships are everything. Use tech to enhance, not replace, the human touch.

By embracing these digital strategies, your **B2B** marketing can achieve unprecedented ROI.`,
  },
  Transport: {
    title: "The Evolution of Smart Cities: Transforming Urban Transportation",
    content: `**Smart cities** are redefining urban living, with transportation at the forefront.

**Autonomous vehicles** are no longer science fiction—they're becoming reality.

**Internet of Things** (IoT) sensors are optimizing traffic flow in real-time.

**Artificial intelligence** is predicting and preventing traffic jams before they occur.

**Electric vehicles** and charging stations are becoming ubiquitous, reducing carbon footprints.

**Bike-sharing** and **e-scooter** programs offer last-mile solutions for commuters.

**Hyperloop** technology promises to revolutionize inter-city travel.

**Smart parking** systems are eliminating the frustration of finding a spot.

**Predictive maintenance** is keeping public transport running smoothly and on time.

**5G networks** are enabling vehicle-to-everything (V2X) communication for safer roads.

The future of urban **transport** is connected, efficient, and sustainable. Welcome to the smart city!`,
  },
  Logistics: {
    title: "Blockchain in Supply Chain: Enhancing Transparency and Efficiency",
    content: `**Blockchain** technology is revolutionizing the world of **logistics**.

In supply chains, transparency is paramount. **Blockchain** delivers it in spades.

Every transaction, every movement, every handoff—all

 **Blockchain** delivers it in spades.

Every transaction, every movement, every handoff—all recorded immutably.

**Smart contracts** are automating processes, reducing delays and disputes.

**Traceability** has never been easier. Track products from source to consumer instantly.

**Blockchain** is tackling the age-old problem of counterfeit goods.

In food **logistics**, it's ensuring safety by tracking produce from farm to table.

**Decentralized ledgers** are making documentation and customs clearance a breeze.

**IoT** devices paired with **blockchain** provide real-time tracking and condition monitoring.

The result? A more efficient, transparent, and trustworthy **supply chain**.

Welcome to the future of **logistics**, where **blockchain** is the new standard.`,
  },
  "E-commerce": {
    title: "The Rise of Social Commerce: Integrating Shopping with Social Media",
    content: `**Social commerce** is blurring the lines between scrolling and shopping.

Platforms like Instagram and Facebook are becoming virtual malls.

**Shoppable posts** turn likes into purchases with a single tap.

**Influencer marketing** is evolving, with direct product links in posts and stories.

**Livestream shopping** events are bringing the thrill of TV shopping to social media.

**Augmented reality** try-ons are revolutionizing fashion and beauty e-commerce.

**Chatbots** are providing instant customer service, right in your favorite social app.

**User-generated content** is becoming the most trusted form of product review.

**Social listening** tools help brands tap into real-time trends and customer needs.

**AI-powered personalization** ensures each user sees products they'll love.

The future of **e-commerce** is social, interactive, and always just a click away.`,
  },
  Marketing: {
    title: "Personalization at Scale: Using AI to Craft Compelling Marketing Campaigns",
    content: `In modern **marketing**, personalization is no longer a luxury—it's an expectation.

**Artificial Intelligence** is making personalization at scale a reality.

**Machine learning** algorithms analyze vast amounts of customer data in seconds.

The result? Hyper-targeted campaigns that speak directly to individual needs and preferences.

**Predictive analytics** anticipate customer behavior, allowing for proactive marketing.

**Natural Language Processing** is revolutionizing chatbots and virtual assistants.

**Computer vision** is transforming image and video-based marketing.

**Dynamic content** adapts in real-time based on user behavior and preferences.

**AI-powered copywriting** tools are crafting compelling, personalized ad copy.

The future of **marketing** is intelligent, adaptive, and deeply personal.

With AI, every customer interaction becomes an opportunity for meaningful engagement.`,
  },
}

const businessTypeKeywords = {
  "marketing-agency": ["digital marketing", "SEO strategies", "social media campaigns", "content marketing"],
  "tech-startup": ["startup funding", "product development", "scaling tech businesses", "startup pitch"],
  "retail-product": ["e-commerce trends", "product marketing", "customer retention", "retail analytics"],
  "b2b-service": ["B2B sales strategies", "lead generation", "customer acquisition", "service optimization"],
}

export default function BlogAgentPage({ params }) {
  const [selectedTag, setSelectedTag] = useState("")
  const [sampleArticle, setSampleArticle] = useState<any>("")
  const [companyName, setCompanyName] = useState("")
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [generatedContent, setGeneratedContent] = useState<null | {
    keywords: string[]
    selectedKeyword: string
    competition: string
    searchVolume: string
    articleTitle: string
    articleContent: string
  }>(null)
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setData({
        /* your data structure */
      })
    }
    fetchData()
  }, [])

  if (!data) {
    return <div>Loading...</div>
  }

  const navigateToPptAgent = () => {
    window.scrollTo(0, 0)
    router.push("/ppt-agent")
  }

  const navigateToMarketingAgent = () => {
    window.scrollTo(0, 0)
    router.push("/marketing-agent")
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    setSampleArticle(sampleArticles[tag as keyof typeof sampleArticles])
  }

  const generateSampleContent = () => {
    if (!businessType) return

    const keywords = businessTypeKeywords[businessType as keyof typeof businessTypeKeywords]
    const selectedKeyword = keywords[Math.floor(Math.random() * keywords.length)]
    const competition = ["Low", "Medium", "High"][Math.floor(Math.random() * 3)]
    const searchVolume = `${Math.floor(Math.random() * 10000)} monthly searches`
    const articleTitle = `How to Master ${selectedKeyword.charAt(0).toUpperCase() + selectedKeyword.slice(1)} in 2025`
    const articleContent = `In today's rapidly evolving business landscape, ${selectedKeyword} has become an essential component for success. Companies that effectively leverage ${selectedKeyword} are seeing unprecedented growth and customer engagement. This article will explore the best practices, latest trends, and actionable strategies to help your business excel in ${selectedKeyword}. Whether you're a seasoned professional or just starting out, these insights will provide valuable guidance for navigating the complexities of ${selectedKeyword} in the modern market.`

    setGeneratedContent({
      keywords,
      selectedKeyword,
      competition,
      searchVolume,
      articleTitle,
      articleContent,
    })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Floating back arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToPptAgent}
      >
        <ArrowLeft size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>
      {/* Floating forward arrow */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 cursor-pointer bg-white rounded-full p-2 shadow-md"
        onClick={navigateToMarketingAgent}
      >
        <ArrowRight size={24} className="text-gray-800 hover:text-gray-600 transition-colors" />
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#2d3c4e] to-[#1c2834]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Revolutionize Your Content Strategy with AI-Powered Blogging
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Harness the power of AI to create SEO-optimized, engaging content that drives organic growth and boosts
              your online presence.
            </p>
            <Button className="bg-[#00c39a] hover:bg-[#00b38d] text-white px-6 py-3 rounded-md">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
          <div className="lg:w-1/2">
            <Card className="p-6 bg-white shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">Try It Now</h2>
              <Input
                type="text"
                placeholder="Your Company Name"
                className="mb-4"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <Input
                type="url"
                placeholder="Your Website URL"
                className="mb-4"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
              <Select onValueChange={(value) => setBusinessType(value)}>
                <SelectTrigger className="w-full mb-4">
                  <SelectValue placeholder="Select Business Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketing-agency">Marketing Agency</SelectItem>
                  <SelectItem value="tech-startup">Tech Startup</SelectItem>
                  <SelectItem value="retail-product">Retail Product</SelectItem>
                  <SelectItem value="b2b-service">B2B Service</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full bg-[#2d3c4e] hover:bg-[#1c2834] text-white" onClick={generateSampleContent}>
                Generate Sample Content
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Realtime Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <RealtimeUpdates />
        </div>
      </section>

      {/* AI Process Visualization */}
      {generatedContent && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Blogging Agent Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Search className="mr-2" /> Keyword Research
                </h3>
                <p className="mb-4">
                  Based on your business type: <strong>{businessType.replace("-", " ")}</strong>
                </p>
                <ul className="list-disc pl-5">
                  {generatedContent.keywords.map((keyword, index) => (
                    <li key={index} className={keyword === generatedContent.selectedKeyword ? "font-bold" : ""}>
                      {keyword}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="mr-2" /> Keyword Analysis
                </h3>
                <p className="mb-2">
                  Selected Keyword: <strong>{generatedContent.selectedKeyword}</strong>
                </p>
                <p className="mb-2">
                  Competition: <strong>{generatedContent.competition}</strong>
                </p>
                <p>
                  Search Volume: <strong>{generatedContent.searchVolume}</strong>
                </p>
              </Card>
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-2" /> Generated Article
                </h3>
                <h4 className="text-lg font-semibold mb-2">{generatedContent.articleTitle}</h4>
                <p className="text-sm">{generatedContent.articleContent.slice(0, 200)}...</p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Tag Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our AI-Generated Content</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(sampleArticles).map((tag) => (
              <Badge
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer text-lg py-2 px-4"
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
          {sampleArticle && (
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{sampleArticle.title}</h3>
              <div
                className="text-lg"
                dangerouslySetInnerHTML={{
                  __html: sampleArticle.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            </Card>
          )}
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Blogging Agent?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-[#00c39a] border-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" />
                What You Gain
              </h3>
              <ul className="space-y-2">
                <li>✓ SEO-optimized content tailored to your industry</li>
                <li>✓ Consistent, high-quality articles that engage your audience</li>
                <li>✓ Time saved on content creation and research</li>
                <li>✓ Increased organic traffic and improved search rankings</li>
                <li>✓ Competitive edge in your market</li>
              </ul>
            </Card>
            <Card className="p-6 border-[#ff4d4d] border-2">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <XCircle className="text-red-500 mr-2" />
                What You're Missing Out On
              </h3>
              <ul className="space-y-2">
                <li>✗ Potential customers lost to competitors with better content</li>
                <li>✗ Missed opportunities for higher search engine rankings</li>
                <li>✗ Stagnant website growth due to inconsistent content</li>
                <li>✗ Time wasted on manual content creation and research</li>
                <li>✗ Falling behind in the rapidly evolving digital landscape</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Dopamine and FOMO Effect Section */}
      <section className="py-16 bg-gradient-to-b from-[#2d3c4e] to-[#1c2834] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Don't Miss Out on the AI Content Revolution</h2>
          <p className="text-xl mb-8">
            Join thousands of businesses already leveraging our AI Blogging Agent to dominate their markets. Every
            minute you wait, your competitors are getting ahead.
          </p>
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4">What Our Users Are Achieving:</h3>
            <ul className="text-lg space-y-2">
              <li>• 300% increase in organic traffic within 3 months</li>
              <li>• 5x more high-quality leads from AI-generated content</li>
              <li>• 70% reduction in content creation time and costs</li>
            </ul>
          </div>
          <Button
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=18605404520", "_blank", "noopener,noreferrer")
            }
            className="bg-[#00c39a] hover:bg-[#00b38d] text-white text-xl py-3 px-8 rounded-md"
          >
            Join the AI Content Revolution Now
          </Button>
        </div>
      </section>

      {/* Notifications */}
      <Notifications />
    </div>
  )
}

export {
  Card,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}

