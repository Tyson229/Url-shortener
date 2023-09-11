import { layoutStyle } from "../styles/layout";
const { BASE_URL } = import.meta.env;
const Hero = () => {
  return (
    <section className="w-full justify-center flex relative overflow-x-hidden">
      <div className={`${layoutStyle} flex flex-col-reverse md:flex-row gap-4 md:gap-0`}>
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-start gap-4 md:gap-2 grow">
          <div className="font-extrabold text-4xl text-center mt-4 md:text-left md:text-6xl">
            Life is short,
            <br />
            should the link does.
          </div>
          <div className="text-stone-400 text-center md:text-left text-md">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </div>
          <div className="text-white bg-teal-400/90 hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out font-bold text-lg px-8 py-2 rounded-full w-fit mt-4">
            Get Started
          </div>
        </div>
        <img
          className="relative -right-[3rem] md:-right-[5rem] lg:-right-[10rem] w-full md:w-1/2"
          src={`${BASE_URL}illustration-working.svg`}
        />
      </div>
    </section>
  );
};

export default Hero;
