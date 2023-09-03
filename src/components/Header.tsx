import {layoutStyle} from '../styles/layout'
export const Header = () => {
  return (
    <header className="w-full flex justify-center">
      <div className={`${layoutStyle} gap-12`}>
        <span className="font-bold text-2xl">Short.it</span>
        <nav className="flex gap-8 items-center grow">
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
        </nav>
        <div className="flex gap-8 text-stone-400 items-center">
          <a
            href="#"
            className="text-stone-400 hover:text-black transition-colors duration-100 ease-linear"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-teal-500 text-white hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out rounded-full py-2 px-4"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};
