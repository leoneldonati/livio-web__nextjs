"use client";

import { useFormStatus } from "react-dom";

interface Props {
  hoverTitle: string;
  loadingText: string;
  children: React.ReactNode;
}
export default function SubmitBtn({
  hoverTitle,
  loadingText,
  children,
}: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-accent text-black p-[10px] rounded-md w-full"
      title={hoverTitle}
    >
      {pending ? loadingText : children}
    </button>
  );
}
