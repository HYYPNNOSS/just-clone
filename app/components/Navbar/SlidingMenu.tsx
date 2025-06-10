import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Changed import from "react-scroll" to "next/link"
import { IoMdClose } from "react-icons/io";

interface SlidingMenuProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 h-screen bg-gray-900"
        />
      )}

      {/* Sliding Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 z-30 h-screen w-full bg-white text-gray-800 shadow-lg"
      >
        <div className="relative flex h-full flex-col items-center justify-center bg-white z-20 select-none">
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose size={24} />
          </button>
          <Image
            src={"/Logo/Cafge_logo.svg"}
            alt="Cafge Accounting Firm Logo"
            width={100}
            height={50}
            priority
            className="mb-8"
          />

          <ul className="flex flex-col items-center space-y-6 font-medium text-lg">
            <Link href="/" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
            </Link>
            <Link href="/#about" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                About
              </li>
            </Link>
            <Link href="/#services" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                Services
              </li>
            </Link>
            <Link href="/partners" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                Partenaires
              </li>
            </Link>
            <Link href="/blogs" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                blogs
              </li>
            </Link>
            <Link href="/#Contact" passHref>
              <li
                className="cursor-pointer text-gray-800 hover:text-ruby"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </li>
            </Link>
          </ul>
          <a
            href="mailto:contact@cafge.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 text-gray-800"
          >
            <h2 className="text-lg">contact@cafge.com</h2>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SlidingMenu;
