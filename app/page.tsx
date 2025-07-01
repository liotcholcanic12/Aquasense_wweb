"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Leaf, TrendingUp, Calendar, ArrowRight, BarChart3 } from "lucide-react"

const waterNews = [
  {
    title: "Global Water Crisis: 2 Billion People Lack Safe Drinking Water",
    summary: "UN report highlights urgent need for improved water infrastructure worldwide.",
    date: "2024-01-15",
    category: "Global",
  },
  {
    title: "Smart Water Monitoring Systems Reduce Waste by 30%",
    summary: "IoT-enabled monitoring helps cities optimize water distribution and detect leaks early.",
    date: "2024-01-12",
    category: "Technology",
  },
  {
    title: "New Water Treatment Technology Removes 99% of Contaminants",
    summary: "Revolutionary filtration system promises cleaner water for developing regions.",
    date: "2024-01-10",
    category: "Innovation",
  },
  {
    title: "Climate Change Threatens Global Water Security",
    summary: "Rising temperatures and changing precipitation patterns affect water availability worldwide.",
    date: "2024-01-08",
    category: "Climate",
  },
  {
    title: "Microplastics Found in 90% of Bottled Water Samples",
    summary: "New study reveals widespread contamination in popular bottled water brands.",
    date: "2024-01-05",
    category: "Health",
  },
]

const conservationTips = [
  {
    title: "Fix Leaks Immediately",
    description: "A single drip can waste over 3,000 gallons per year",
    impact: "High Impact",
    difficulty: "Easy",
  },
  {
    title: "Install Low-Flow Fixtures",
    description: "Low-flow showerheads and faucets reduce water usage by up to 50%",
    impact: "High Impact",
    difficulty: "Medium",
  },
  {
    title: "Collect Rainwater",
    description: "Use collected rainwater for garden irrigation and outdoor cleaning",
    impact: "Medium Impact",
    difficulty: "Medium",
  },
  {
    title: "Run Full Loads Only",
    description: "Run dishwashers and washing machines only with full loads",
    impact: "Medium Impact",
    difficulty: "Easy",
  },
  {
    title: "Use Drought-Resistant Plants",
    description: "Choose native and drought-resistant plants for landscaping",
    impact: "High Impact",
    difficulty: "Medium",
  },
  {
    title: "Take Shorter Showers",
    description: "Reducing shower time by 2 minutes saves 1,500 gallons annually",
    impact: "Medium Impact",
    difficulty: "Easy",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => (window.location.href = "/")}>
              <Droplets className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">AquaSense</h1>
                <p className="text-sm text-gray-600">Real-time Water Quality Monitoring</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium border-b-2 border-blue-600"
              >
                Home
              </a>
              <a href="/analytics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Analytics
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About Us
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact Us
              </a>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Sign Up</Button>
              </div>
            </nav>
            <div className="md:hidden">
              <Button variant="outline" size="sm">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Protecting Our Most Precious Resource</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay informed about global water quality trends and learn practical ways to conserve water in your daily
            life. Together, we can make a difference for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => (window.location.href = "/analytics")}>
              <BarChart3 className="h-5 w-5 mr-2" />
              View Analytics
            </Button>
            <Button variant="outline" size="lg">
              <Leaf className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Water News */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Water News Today</span>
              </CardTitle>
              <CardDescription>Latest updates on global water quality and conservation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {waterNews.map((news, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 py-3 hover:bg-gray-50 transition-colors rounded-r-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {news.category}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {news.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-2 text-gray-900">{news.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{news.summary}</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-blue-600 hover:text-blue-700">
                    Read more <ArrowRight className="h-3 w-3 ml-1" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Conservation Tips */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Leaf className="h-5 w-5" />
                <span>Water Conservation Tips</span>
              </CardTitle>
              <CardDescription>Simple ways to preserve our precious water resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conservationTips.map((tip, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900">{tip.title}</h4>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {tip.impact}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 ml-8">{tip.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Monitor Water Quality?</h2>
          <p className="text-xl mb-6 opacity-90">
            Get real-time insights into water quality metrics and track environmental changes in your area.
          </p>
          <Button size="lg" variant="secondary" onClick={() => (window.location.href = "/analytics")}>
            <BarChart3 className="h-5 w-5 mr-2" />
            Explore Analytics Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
