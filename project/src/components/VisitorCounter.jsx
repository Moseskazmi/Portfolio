import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function updateCounter() {
      try {
        const response = await fetch(
          "https://api.counterapi.dev/v1/moseskazmi/portfolio/up"
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        setCount(data.count);
      } catch (err) {
        console.error("Counter API Error:", err);
      }
    }

    updateCounter();
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
      <FiEye />
      <span>
        {count !== null ? `${count.toLocaleString()} Visitors` : "Loading..."}
      </span>
    </div>
  );
}