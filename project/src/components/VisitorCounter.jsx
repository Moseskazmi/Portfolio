import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function recordVisit() {
      try {
        const response = await fetch(
          "https://api.counterapi.dev/v1/moseskazmi-portfolio/visits/up",
          { signal: controller.signal },
        );

        if (!response.ok) throw new Error("Unable to update visitor count");

        const data = await response.json();
        if (Number.isFinite(data.value)) setCount(data.value);
      } catch (error) {
        if (error.name !== "AbortError") console.error(error);
      }
    }

    recordVisit();
    return () => controller.abort();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted" aria-live="polite">
      <FiEye aria-hidden="true" />
      <span>{count === null ? "Visitor count unavailable" : `${count.toLocaleString()} Visitors`}</span>
    </div>
  );
}
