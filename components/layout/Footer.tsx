import Image from "next/image";
import ALXLogoWhite from "@/public/assets/images/alx-white-logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-[#CACACA]">
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-[645px]">
          <Image src={ALXLogoWhite} alt="ALX Logo" />
          <p className="my-8 text-base">
            ALX is a platform where travelers can discover and book
            unique,comfortable, and affordable lodging options worldwide. From
            cozy city apartments and tranquil countryside retreats to exotic
            beach side villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>
        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-8">
          <div>
            <h2 className="text-white text-2xl mb-4">Explore</h2>
            <ul className="space-y-2 ">
              <li>
                <Link href="/">Apartments in Dubai</Link>
              </li>
              <li>
                <Link href="/">Hotels in New York</Link>
              </li>
              <li>
                <Link href="/">Villas in Spain</Link>
              </li>
              <li>
                <Link href="/">Mansions in Indonesia</Link>
              </li>
              <li>
                <Link href="/">Villas in Bali</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-2xl mb-4">Company</h2>
            <ul className="space-y-2 ">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/">Customer Support</Link>
              </li>
              <li>
                <Link href="/">Brands</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-2xl mb-4">Help</h2>
            <ul className="space-y-2 ">
              <li>
                <Link href="/">Support</Link>
              </li>
              <li>
                <Link href="/">Cancel booking</Link>
              </li>
              <li>
                <Link href="/">Refund Process</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-3" />
      </div>
      <p className="text-center">
        Some hotel requires you to cancel more than 24 hours before check-in.
        Details <span className="text-[#34967c]">here</span>
      </p>
      <div className="flex justify-center items-center gap-4 my-3">
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Cookie Policy</Link>
      </div>
    </footer>
  );
}
