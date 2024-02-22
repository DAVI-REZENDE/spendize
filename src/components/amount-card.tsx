'use client'
import { Plus } from 'lucide-react'
import { EnterAnimatedWrapper } from './enter-animated-wrapper'

export function AmountCard() {
  return (
    <EnterAnimatedWrapper className="p-4 rounded-md flex flex-col gap-4 bg-zinc-800 items-start h-min min-w-80">
      <span className="text-zinc-200">Balance</span>
      <strong className="text-3xl font-semibold text-zinc-200">
        R$ 1.800,00
      </strong>
      <span className="bg-emerald-800/50 px-2 py-1 rounded-full text-white text-xs flex gap-0.5 items-center">
        <Plus size={12} />
        6%
      </span>
    </EnterAnimatedWrapper>
  )
}
