import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="sticky top-0 flex items-center  gap-4 border-b border-muted bg-background/40 p-6 backdrop-blur-lg">
        <Image
          src={{ src: '/logo.svg', width: 280, height: 82 }}
          alt="Spendize"
          className="w-[180px]"
        />
        <nav className="flex gap-4">
          <Button variant="ghost">Overview</Button>
          <Button variant="ghost">Saldo</Button>
          <Button variant="ghost">Planning</Button>
        </nav>

        <div className="ml-auto flex gap-4">
          <ModeToggle />
          <Avatar>
            <AvatarFallback>DR</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {children}
    </div>
  )
}
