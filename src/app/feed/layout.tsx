import Link from "next/link";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-full min-h-screen relative">
      <header className="sticky top-0 backdrop-blur bg-white/30 z-50 w-full flex flex-row [&>#feed-link]:p-3 [&>#feed-link]:block [&>#feed-link]:text-center [&>#feed-link]:border [&>#feed-link]:border-black [&>#feed-link]:w-full [&>#feed-link]:transition [&>#feed-link]:shadow-inner [&>#feed-link:hover]:shadow-black/30 [&>#feed-link:hover]:scale-[.98]">
        <Link href="/feed/recomended" id="feed-link">
          Recomendado
        </Link>

        <Link href="/feed/following" id="feed-link">
          Siguiendo
        </Link>
      </header>
      {children}
    </div>
  );
}
