import {
  AmountCard,
  AmountCardTag,
  AmountCardTitle,
  AmountCardValue,
} from '@/components/amount-card'
import { OverviewChart } from './overview-chart'

export default function Page() {
  return (
    <div className="flex h-full flex-col gap-4 overflow-auto p-6">
      <h1 className="text-2xl font-bold text-card-foreground">Dashboard</h1>
      <div className="grid h-full grid-cols-5 grid-rows-4 gap-4">
        <AmountCard transition={{ duration: 0.7, delay: 0.4 }}>
          <AmountCardTitle>Balance</AmountCardTitle>
          <AmountCardValue>R$ 1.800,00</AmountCardValue>
          <AmountCardTag>6%</AmountCardTag>
        </AmountCard>
        <AmountCard transition={{ duration: 0.7, delay: 0.7 }}>
          <AmountCardTitle>Total Income</AmountCardTitle>
          <AmountCardValue>R$ 4.000,00</AmountCardValue>
          <AmountCardTag>6%</AmountCardTag>
        </AmountCard>
        <AmountCard transition={{ duration: 0.7, delay: 1 }}>
          <AmountCardTitle>Total Outcome</AmountCardTitle>
          <AmountCardValue>R$ 1.200,00</AmountCardValue>
          <AmountCardTag>6%</AmountCardTag>
        </AmountCard>
        <AmountCard transition={{ duration: 0.7, delay: 1 }}>
          <AmountCardTitle>Count Income</AmountCardTitle>
          <AmountCardValue>+5</AmountCardValue>
          <AmountCardTag>6%</AmountCardTag>
        </AmountCard>
        <AmountCard transition={{ duration: 0.7, delay: 1 }}>
          <AmountCardTitle>Count Outcome</AmountCardTitle>
          <AmountCardValue>+3</AmountCardValue>
          <AmountCardTag>6%</AmountCardTag>
        </AmountCard>
        <OverviewChart />
      </div>
      {/* <div className="flex flex-col gap-4">
        <div className="flex w-full justify-between">
          <h2 className="text-2xl font-bold text-muted-foreground">
            Transações recentes
          </h2>

          <div className="flex gap-4">
            <Button>
              <Plus size={16} />
              New transaction
            </Button>

            <Button variant="secondary">See more</Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}
