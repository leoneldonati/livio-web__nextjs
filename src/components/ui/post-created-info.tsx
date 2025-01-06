"use client";
import { formatDate } from "@/utils/date";
import { useEffect, useState } from "react";

export default function PostCreatedInfo({ created }: { created: Date }) {
  const [parsed, setParsed] = useState(formatDate(created));
  const ONE_MINUTE = 60 * 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setParsed(formatDate(created));
    }, ONE_MINUTE);

    return () => clearInterval(timer);
  }, []);

  return <span>{parsed}</span>;
}
