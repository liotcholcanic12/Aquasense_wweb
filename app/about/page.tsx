"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Droplets, Users, Target, Award, Globe, Shield, Zap, Heart } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Executive Officer",
    bio: "Environmental scientist with 15+ years in water quality research and IoT solutions.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Former Google engineer specializing in real-time data systems and mobile applications.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Head of Research",
    bio: "PhD in Environmental Engineering, published researcher in water treatment technologies.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "James Thompson",
    role: "Head of Operations",
    bio: "Operations expert with experience scaling environmental monitoring solutions globally.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const achievements = [
  {
    icon: Globe,
    title: "50+ Countries",
    description: "Monitoring water quality across the globe",
  },
  {
    icon: Users,
    title: "1M+ Users",
    description: "Trusted by individuals and organizations worldwide",
  },
  {
    icon: Shield,
    title: "99.9% Uptime",
    description: "Reliable monitoring you can count on",
  },
  {
    icon: Award,
    title: "ISO Certified",
    description: "Meeting international quality standards",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => (window.location.href = "/")}>
              <Droplets className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">AquaMonitor</h1>
                <p className="text-sm text-gray-600">Real-time Water Quality Monitoring</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </a>
              <a href="/analytics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Analytics
              </a>
              <a
                href="/about"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium border-b-2 border-blue-600"
              >
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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About AquaMonitor</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make clean, safe water accessible to everyone through cutting-edge monitoring
            technology and data-driven insights. Founded in 2020, AquaMonitor has become a trusted partner for
            communities, organizations, and governments worldwide.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To democratize access to water quality data and empower communities to make informed decisions about
                their most precious resource.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                A world where every person has access to real-time water quality information and the tools to protect
                their health and environment.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Transparency, innovation, sustainability, and community-first approach guide everything we do in our
                pursuit of water security.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Technology</CardTitle>
            <CardDescription className="text-center">
              Cutting-edge sensors and AI-powered analytics for accurate water quality monitoring
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">IoT Sensors</h4>
                <p className="text-gray-600 mb-4">
                  Our proprietary sensors measure pH, turbidity, TDS, and temperature with laboratory-grade accuracy.
                  Designed for harsh environments with IP68 waterproof rating and solar-powered operation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time data transmission via 4G/5G and LoRaWAN</li>
                  <li>• Self-calibrating sensors with 99.5% accuracy</li>
                  <li>• 5-year battery life with solar backup</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">AI Analytics</h4>
                <p className="text-gray-600 mb-4">
                  Machine learning algorithms analyze patterns, predict trends, and provide early warning alerts for
                  potential water quality issues before they become critical.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Predictive analytics for contamination events</li>
                  <li>• Automated anomaly detection</li>
                  <li>• Custom alerts and reporting</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-6 opacity-90">
            Whether you're a researcher, community leader, or concerned citizen, we'd love to work with you to improve
            water quality monitoring in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => (window.location.href = "/contact")}>
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              View Careers
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
