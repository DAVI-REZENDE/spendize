import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { OverviewChart } from "./overview-chart";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-auto">
      <h1 className="text-zinc-200 font-bold text-2xl">Dashbaord</h1>
      <div className="flex gap-4 max-h-full">
        <OverviewChart />
      </div>
    </div>
  )
}