import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Goal, Home, ReceiptText } from 'lucide-react'

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[80px_1fr] p-5 h-screen gap-6">
      <header className="bg-zinc-800 rounded-2xl px-4 py-5 flex flex-col items-center justify-between">
        <Avatar>
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>

        <nav className="flex flex-col gap-4">
          <Button size="icon">
            <Home size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <ReceiptText size={16} />
          </Button>
          <Button variant="ghost" size="icon">
            <Goal size={16} />
          </Button>
        </nav>

        <span />
      </header>
      {children}
    </div>
  )
}