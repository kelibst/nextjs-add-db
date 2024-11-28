import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "../../media/Kelib/Data/Work/Nodejs/Tutorials/nextjsblog/src/lib/dummyData";

export default function Home() {
  return (
    <div className="min-h-screen mx-xl-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-16 sm:py-24">
      <Header />
      <Hero />
      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
}

