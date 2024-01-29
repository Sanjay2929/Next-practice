import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 left-0 bg-red-700 bg-opacity-30 z-50">
      <div className="flex justify-between items-center py-3 container mx-auto">
        <Link
          href="/"
          className="text-white text-[24px] uppercase font-extrabold"
        >
          <span className="hover:scale-125 inline-block duration-300">H</span>
          <span className="hover:scale-125 inline-block duration-300">O</span>
          <span className="hover:scale-125 inline-block duration-300">M</span>
          <span className="hover:scale-125 inline-block duration-300">E</span>
        </Link>
        <div className="flex gap-5">
          <Link
            className="px-5 py-2 inline-block bg-white text-black text-[20px] font-semibold rounded-md"
            href="/about"
          >
            About
          </Link>
          <Link
            className="px-5 py-2 inline-block bg-white text-black text-[20px] font-semibold rounded-md"
            href="/services"
          >
            Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
