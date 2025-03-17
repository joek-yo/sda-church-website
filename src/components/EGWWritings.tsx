// src/components/EGWWritings.tsx
import { useEffect, useState } from "react";
import axios from "axios";

interface Writing {
  title: string;
  description: string;
}

export default function EGWWritings() {
  const [writings, setWritings] = useState<Writing[]>([]);

  useEffect(() => {
    async function fetchWritings() {
      try {
        const response = await axios.get("https://example.com/api/egw-writings");
        setWritings(response.data);
      } catch (error) {
        console.error("Error fetching EGW writings:", error);
      }
    }

    fetchWritings();
  }, []);

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Ellen G. White Writings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {writings.map((writing, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{writing.title}</h3>
            <p className="mt-2">{writing.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
