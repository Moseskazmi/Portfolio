import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    async function updateCounter() {
      try {
        const response = await fetch(
          "https://visitor.6developer.com/visit",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              domain: window.location.hostname,
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              page_path: window.location.pathname,
              page_title: document.title,
              referrer: document.referrer,
            }),
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!Number.isFinite(data.totalCount)) {
          throw new Error("Counter API returned an invalid count");
        }

        setCount(data.totalCount);
      } catch (err) {
        console.error("Counter API Error:", err);
        setHasError(true);
      } finally {
        window.clearTimeout(timeout);
      }
    }

    updateCounter();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
      <FiEye />
      <span>
        {count !== null
          ? `${count.toLocaleString()} Visitors`
          : hasError
            ? "Visitor count unavailable"
            : "Loading..."}
      </span>
    </div>
  );
}
