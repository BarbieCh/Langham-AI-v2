"use client"

import { useEffect, useState } from "react"
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const data = [
  { year: "2020", growth: 62 },
  { year: "2021", growth: 68 },
  { year: "2022", growth: 75 },
  { year: "2023", growth: 82 },
  { year: "2024", growth: 88 },
  { year: "2025", growth: 95 },
]

export function MarketGrowthChart() {
  const [animatedData, setAnimatedData] = useState(data.map(item => ({ ...item, growth: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-[#C5B358] font-serif">Luxury Hotel Market Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={animatedData}>
            <XAxis dataKey="year" stroke="#888888" />
            <YAxis stroke="#888888" tickFormatter={(value) => `$${value}B`} />
            <Tooltip
              contentStyle={{ background: "#fff", border: "1px solid #C5B358" }}
              labelStyle={{ color: "#C5B358" }}
            />
            <Line
              type="monotone"
              dataKey="growth"
              stroke="#C5B358"
              strokeWidth={2}
              dot={{ fill: "#C5B358", r: 4 }}
              activeDot={{ r: 6, fill: "#C5B358" }}
            >
              <motion.animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="1.5s"
                fill="freeze"
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

