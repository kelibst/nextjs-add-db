import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">MyBlog</Link>
        <nav className="flex gap-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost">Blog</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
