// src/pages/Home.tsx
import FundamentalBeliefs from "../components/FundamentalBeliefs";
import EGWWritings from "../components/EGWWritings";
import BlogSection from "../components/BlogSection";
import BibleVerse from "../components/BibleVerse";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Kangemi SDA Church</h1>
        <p className="text-lg mt-4">"Spreading the Gospel through Faith and Service"</p>
      </section>

      {/* Fundamental Beliefs Section */}
      <FundamentalBeliefs />

      {/* Ellen G. White Writings Section */}
      <EGWWritings />

      {/* Blog Section */}
      <BlogSection />

      {/* Daily Bible Verse Section */}
      <BibleVerse />
    </div>
  );
}
