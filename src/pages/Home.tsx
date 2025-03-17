// src/pages/Home.tsx
import { lazy, Suspense } from "react";

const FundamentalBeliefs = lazy(() => import("../components/FundamentalBeliefs"));
const EGWWritings = lazy(() => import("../components/EGWWritings"));
const BlogSection = lazy(() => import("../components/BlogSection"));
const BibleVerse = lazy(() => import("../components/BibleVerse"));

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[url('/images/church-bg.jpg')] bg-cover bg-center min-h-[70vh] flex items-center justify-center text-white">
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center max-w-2xl">
          <h1 className="text-5xl font-bold">Welcome to Kangemi SDA Church</h1>
          <p className="text-lg mt-4">"Spreading the Gospel through Faith and Service"</p>
          <a href="/about" className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600">Learn More</a>
        </div>
      </section>

      {/* Sections with Lazy Loading */}
      <Suspense fallback={<div>Loading...</div>}>
        <FundamentalBeliefs />
        <EGWWritings />
        <BlogSection />
        <BibleVerse />
      </Suspense>
    </div>
  );
}
