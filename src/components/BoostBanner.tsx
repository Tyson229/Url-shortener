export const BoostBanner = () => {
  return (
    <div
      className={`w-full grid place-items-center bg-boost-mobile md:bg-boost-desktop bg-cover bg-no-repeat bg-violet-950 py-20`}
    >
      <div className="font-extrabold text-3xl text-white">
        Boost your links today
      </div>
      <div className="text-white bg-teal-400/90 hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out font-bold text-lg px-8 py-2 rounded-full w-fit mt-4">
        Get Started
      </div>
    </div>
  );
}