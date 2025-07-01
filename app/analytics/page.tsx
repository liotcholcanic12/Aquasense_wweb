"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"
import { Droplets, Thermometer, Beaker, Eye, AlertTriangle, Download, RefreshCw } from "lucide-react"

// Simulated real-time data
const generateWaterData = () => ({
  ph: (6.5 + Math.random() * 2).toFixed(1),
  turbidity: (0.5 + Math.random() * 2).toFixed(2),
  tds: Math.floor(150 + Math.random() * 100),
  temperature: (20 + Math.random() * 10).toFixed(1),
  timestamp: new Date().toLocaleTimeString(),
})

// Historical data for charts
const historicalData = Array.from({ length: 24 }, (_, i) => ({
  time: `${String(i).padStart(2, "0")}:00`,
  ph: 6.5 + Math.random() * 2,
  turbidity: 0.5 + Math.random() * 2,
  tds: 150 + Math.random() * 100,
  temperature: 20 + Math.random() * 10,
}))

export default function AnalyticsPage() {
  const [currentData, setCurrentData] = useState(generateWaterData())
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentData(generateWaterData())
      setLastUpdated(new Date())
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (metric: string, value: number) => {
    switch (metric) {
      case "ph":
        if (value >= 6.5 && value <= 8.5) return "bg-green-500"
        if (value >= 6.0 && value <= 9.0) return "bg-yellow-500"
        return "bg-red-500"
      case "turbidity":
        if (value <= 1) return "bg-green-500"
        if (value <= 4) return "bg-yellow-500"
        return "bg-red-500"
      case "tds":
        if (value <= 300) return "bg-green-500"
        if (value <= 600) return "bg-yellow-500"
        return "bg-red-500"
      case "temperature":
        if (value >= 15 && value <= 25) return "bg-green-500"
        if (value >= 10 && value <= 30) return "bg-yellow-500"
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (metric: string, value: number) => {
    switch (metric) {
      case "ph":
        if (value >= 6.5 && value <= 8.5) return "Optimal"
        if (value >= 6.0 && value <= 9.0) return "Acceptable"
        return "Critical"
      case "turbidity":
        if (value <= 1) return "Excellent"
        if (value <= 4) return "Good"
        return "Poor"
      case "tds":
        if (value <= 300) return "Good"
        if (value <= 600) return "Fair"
        return "Poor"
      case "temperature":
        if (value >= 15 && value <= 25) return "Optimal"
        if (value >= 10 && value <= 30) return "Acceptable"
        return "Extreme"
      default:
        return "Unknown"
    }
  }

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
              <a
                href="/analytics"
                className="text-blue-600 hover:text-blue-700 transition-colors font-medium border-b-2 border-blue-600"
              >
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
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Water Quality Analytics</h1>
            <p className="text-gray-600 mt-2">Real-time monitoring and historical data analysis</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Real-time Metrics */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Current Water Quality</h2>
            <div className="text-sm text-gray-500">Last updated: {lastUpdated.toLocaleTimeString()}</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">pH Level</CardTitle>
                <Beaker className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.ph}</div>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge className={`${getStatusColor("ph", Number.parseFloat(currentData.ph))} text-white`}>
                    {getStatusText("ph", Number.parseFloat(currentData.ph))}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Normal range: 6.5-8.5</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Turbidity</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.turbidity} NTU</div>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge
                    className={`${getStatusColor("turbidity", Number.parseFloat(currentData.turbidity))} text-white`}
                  >
                    {getStatusText("turbidity", Number.parseFloat(currentData.turbidity))}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Excellent: {"<"}1 NTU</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">TDS</CardTitle>
                <Droplets className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.tds} ppm</div>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge className={`${getStatusColor("tds", Number.parseInt(currentData.tds))} text-white`}>
                    {getStatusText("tds", Number.parseInt(currentData.tds))}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Good: {"<"}300 ppm</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{currentData.temperature}°C</div>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge
                    className={`${getStatusColor("temperature", Number.parseFloat(currentData.temperature))} text-white`}
                  >
                    {getStatusText("temperature", Number.parseFloat(currentData.temperature))}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Optimal: 15-25°C</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">24-Hour Trends</h2>

          <Tabs defaultValue="ph" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="ph">pH Level</TabsTrigger>
              <TabsTrigger value="turbidity">Turbidity</TabsTrigger>
              <TabsTrigger value="tds">TDS</TabsTrigger>
              <TabsTrigger value="temperature">Temperature</TabsTrigger>
            </TabsList>

            <TabsContent value="ph" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>pH Level Trend</CardTitle>
                  <CardDescription>24-hour pH monitoring data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      ph: {
                        label: "pH Level",
                        color: "hsl(var(--chart-1))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[6, 9]} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="ph" stroke="var(--color-ph)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="turbidity" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Turbidity Trend</CardTitle>
                  <CardDescription>24-hour turbidity monitoring data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      turbidity: {
                        label: "Turbidity (NTU)",
                        color: "hsl(var(--chart-2))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          type="monotone"
                          dataKey="turbidity"
                          stroke="var(--color-turbidity)"
                          fill="var(--color-turbidity)"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tds" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>TDS Trend</CardTitle>
                  <CardDescription>24-hour TDS monitoring data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      tds: {
                        label: "TDS (ppm)",
                        color: "hsl(var(--chart-3))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="tds" fill="var(--color-tds)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="temperature" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Temperature Trend</CardTitle>
                  <CardDescription>24-hour temperature monitoring data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      temperature: {
                        label: "Temperature (°C)",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="temperature" stroke="var(--color-temperature)" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Alert Section */}
        <div className="mt-8">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>System Status</AlertTitle>
            <AlertDescription>
              All monitoring sensors are operational. Data is being collected every 5 seconds and synchronized with the
              mobile application. Next maintenance scheduled for next week.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}
