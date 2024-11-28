import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogCardProps {
    title: string
    excerpt: string
    slug: string
    date: string
}

export function BlogCard({ title, excerpt, slug, date }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`}>
            <Card className="hover:bg-accent transition-colors">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{date}</p>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{excerpt}</p>
                </CardContent>
            </Card>
        </Link>
    )
}
