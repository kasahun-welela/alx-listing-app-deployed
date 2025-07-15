import Link from "next/link";
import Bug from "@/public/assets/images/bug-case.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      <div className="py-2 px-4 bg-gradient-to-r from-[#34967c] to-[#2d7d67] flex items-center justify-center gap-4 text-white shadow-md">
        <Image
          src={Bug}
          alt="bug"
          className="hover:scale-110 transition-transform duration-300"
        />
        <p className="text-sm md:text-base font-medium">
          Overseas trip? Get the latest information on travel guides
        </p>
        <Link
          href="/"
          className="bg-black/90 hover:bg-black text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap"
        >
          More Info
        </Link>
      </div>
      
    </header>
  );
}
