"use client";
import Banner from "@/components/Banner";
import PostBox from "@/components/Blog/PostBox";
import { blogs } from "@/data/Blog";
import { useState } from "react";

const pageInfo = {
    title: "Blog Insights",
    desc: "We provide you the best packaging solutions with customized printed box service, which matches your industry and product specific needs. Get high-quality custom boxes with logo with a flexible and simple packaging process.",
}
const POSTS_PER_PAGE = 2;
export default function BlogPage() {
    const [currentPage, setCurrentPage] = useState(1);

    // Split posts
    const featuredPosts = blogs.slice(0, 3);
    const remainingPosts = blogs.slice(3);

    // Pagination logic
    const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = remainingPosts.slice(
        startIndex,
        startIndex + POSTS_PER_PAGE
    );

    return (
        <main className="bg-background">
            <Banner data={pageInfo} />
            <section className='py-16'>
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-10">
                        {featuredPosts.map((post: any, idx: number) => (
                            <PostBox key={idx} data={post} />
                        ))}
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-10">
                        {currentPosts.map((post: any, idx: number) => (
                            <PostBox key={idx} data={post} />
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 gap-2 py-3 px-4.5 rounded-[50px] bg-white w-fit mx-auto shadow-[-4px_7px_15px_rgb(0,0,0,0.08)]">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`text-sm font-medium w-10 h-10 flex items-center justify-center rounded-full text-white
                                ${currentPage === i + 1
                                        ? "bg-[linear-gradient(135deg,#383882_0%,#006039_100%)] shadow-[0_4px_10px_rgb(0,0,0,0.2) "
                                        : "bg-primary text-title hover:bg-Wp_Green hover:text-white"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}