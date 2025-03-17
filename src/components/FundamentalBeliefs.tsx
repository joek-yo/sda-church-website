// src/components/FundamentalBeliefs.tsx
import { useEffect, useState } from "react";
import axios from "axios";

interface Belief {
  title: string;
  description: string;
}

export default function FundamentalBeliefs() {
  const [beliefs, setBeliefs] = useState<Belief[]>([]);

  useEffect(() => {
    async function fetchBeliefs() {
      try {
        const response = await axios.get("https://example.com/api/beliefs");
        setBeliefs(response.data);
      } catch (error) {
        console.error("Error fetching beliefs:", error);
      }
    }

    fetchBeliefs();
  }, []);

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center">Fundamental Beliefs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {beliefs.map((belief, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{belief.title}</h3>
            <p className="mt-2">{belief.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
