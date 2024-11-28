import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../../media/Kelib/Data/Work/Nodejs/Tutorials/nextjsblog/src/lib/dummyData";

interface BlogPostProps {
    params: {
        slug: string;
    };
}


export default function BlogPost({ params }: BlogPostProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Header />
            <main className="container py-12">
                <article className="prose lg:prose-xl mx-auto">
                    <h1>{post.title}</h1>
                    <p className="text-muted-foreground">{post.date}</p>
                    <div className="mt-8">
                        {post.content}
                    </div>
                </article>
            </main>
        </div>
    );
}
