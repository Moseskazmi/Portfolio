import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";

export default function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/moseskazmi-portfolio/visits")
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {});
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <FiEye />
      <span>{count ?? "..."} Visitors</span>
    </div>
  );
}
