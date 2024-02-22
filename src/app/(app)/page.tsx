import { AmountCard } from '@/components/amount-card'
import { OverviewChart } from './overview-chart'

export default function Page() {
  return (
    <div className="flex flex-col gap-4 h-full overflow-auto">
      <h1 className="text-zinc-200 font-bold text-2xl">Dashbaord</h1>
      <div className="flex gap-4">
        <OverviewChart />
        <AmountCard />
      </div>
    </div>
  )
}
