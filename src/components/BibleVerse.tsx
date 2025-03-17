// src/components/BibleVerse.tsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function BibleVerse() {
  const [verse, setVerse] = useState("");

  useEffect(() => {
    async function fetchVerse() {
      try {
        const response = await axios.get("https://bible-api.com/random");
        setVerse(response.data.text);
      } catch (error) {
        console.error("Error fetching Bible verse:", error);
      }
    }

    fetchVerse();
  }, []);

  return (
    <section className="p-10 bg-primary text-white text-center">
      <h2 className="text-4xl font-bold">Daily Bible Verse</h2>
      <p className="text-lg mt-4 italic max-w-auto">"{verse}"</p>
    </section>
  );
}
