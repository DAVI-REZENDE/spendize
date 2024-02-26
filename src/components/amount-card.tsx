'use client'
import { EnterAnimatedWrapper } from './enter-animated-wrapper'
import { ComponentProps, ReactNode } from 'react'

type ChildrenType = {
  children: ReactNode
}

type AmountCardProps = ChildrenType &
  ComponentProps<typeof EnterAnimatedWrapper>

export function AmountCard({ children, ...props }: AmountCardProps) {
  return (
    <EnterAnimatedWrapper
      className="flex flex-col items-start gap-4 rounded-md border border-muted bg-background p-4"
      {...props}
    >
      {children}
    </EnterAnimatedWrapper>
  )
}

export function AmountCardTitle({ children }: ChildrenType) {
  return <span className="text-muted-foreground">{children}</span>
}

export function AmountCardValue({ children }: ChildrenType) {
  return (
    <strong className="text-3xl font-semibold text-muted-foreground">
      {children}
    </strong>
  )
}

export function AmountCardTag({ children }: ChildrenType) {
  return (
    <span className="flex items-center gap-0.5 rounded-full bg-destructive/50 px-2 py-1 text-xs text-destructive-foreground">
      {children}
    </span>
  )
}
