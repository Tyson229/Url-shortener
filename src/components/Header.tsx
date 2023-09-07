import { useEffect, useRef, useState } from "react";
import { layoutStyle } from "../styles/layout";
import { AiOutlineMenu } from "react-icons/ai";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (
        !menuRef.current?.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      )
        setIsMenuOpen(() => false);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [menuRef]);

  const handleOnClick = () => {
    setIsMenuOpen((value) => !value);
  };

  return (
    <header className="w-full flex flex-col mt-2 md:mt-0 md:flex-row justify-center relative">
      <nav className={`${layoutStyle} flex gap-12 justify-between`}>
        <a href="/" className="font-bold text-3xl md:grow-0">
          Short.it
        </a>
        <div className="gap-8 items-center md:grow hidden md:flex">
          <a
            href="/"
            className="text-stone-400 hover:text-black transition-colors duration-100 ease-linear"
          >
            Features
          </a>
          <a
            href="/"
            className="text-stone-400 hover:text-black transition-colors duration-100 ease-linear"
          >
            Pricing
          </a>
          <a
            href="/"
            className="text-stone-400 hover:text-black transition-colors duration-100 ease-linear"
          >
            Resources
          </a>
        </div>
        <div className="hidden md:flex gap-8 text-stone-400 items-center">
          <a
            href="#"
            className="text-stone-400 hover:text-black transition-colors duration-100 ease-linear"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-teal-400/90 text-white hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out rounded-full py-2 px-4"
          >
            Sign Up
          </a>
        </div>
        <button
          ref={menuButtonRef}
          className="block md:hidden"
          onClick={() => handleOnClick()}
        >
          <AiOutlineMenu size={25} />
        </button>
      </nav>

      {/* Mobile Burger Menu */}
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "block" : "hidden"
        }  transition-all duration-150 ease-in-out md:hidden w-full px-5 absolute inset-y-24 z-10 `}
      >
        <div className="bg-purple-950 text-white grid place-items-center font-bold gap-8 p-8 rounded-xl text-lg shadow-xl">
          <a
            href="/"
            className=" hover:text-black transition-colors duration-100 ease-linear"
          >
            Features
          </a>
          <a
            href="/"
            className=" hover:text-black transition-colors duration-100 ease-linear"
          >
            Pricing
          </a>
          <a
            href="/"
            className=" hover:text-black transition-colors duration-100 ease-linear"
          >
            Resources
          </a>
          <div className="h-px w-full bg-stone-50/40 rounded-full"></div>
          <a
            href="#"
            className=" hover:text-black transition-colors duration-100 ease-linear"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-teal-500 text-white text-center rounded-full py-2 px-4"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};
