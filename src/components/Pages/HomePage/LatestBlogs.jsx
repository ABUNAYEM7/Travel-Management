import React from "react";
import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "creative-outdoor-ads",
    title: "Creative Outdoor Ads",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    tags: ["Travel", "Life Style"],
    excerpt:
      "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer...",
  },
  {
    id: "classified-how-to-utilize-free",
    title: "It’s Classified How To Utilize Free",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop",
    tags: ["Travel", "Life Style"],
    excerpt:
      "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer...",
  },
  {
    id: "low-cost-advertising",
    title: "Low Cost Advertising",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop",
    tags: ["Travel", "Life Style"],
    excerpt:
      "Acres of Diamonds… you’ve read the famous story, or at least had it related to you. A farmer...",
  },
];

const LatestBlogs = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Latest from Our Blog
          </h2>
          <p className="mt-3 text-gray-500 max-w-3xl mx-auto">
            With the exception of Nietzsche, no other madman has contributed so much to human sanity as has.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id} className="group">
              {/* Image */}
              <Link to={`/blog/${post.id}`} className="block overflow-hidden rounded-md">
                <img
                  src={post.img}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-xl font-extrabold text-gray-900">
                <Link to={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="mt-3 text-[15px] leading-7 text-gray-600">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
