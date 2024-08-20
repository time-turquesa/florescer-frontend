import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#432E97]">
      <Link href="/login" className="text-white text-2xl">
        Entre com sua conta
      </Link>
    </main>
  );
}
