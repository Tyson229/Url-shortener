import { layoutStyle } from "../styles/layout";
import { features } from "../lib/data";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="w-full bg-slate-200 flex items-center justify-center">
      <div className={`${layoutStyle} grid place-items-center`}>
        <div className="flex flex-col items-center text-center gap-2 w-full md:w-1/3">
          <span className="font-bold text-[2rem]">Advanced Statistics</span>
          <span className="text-md md:text-base text-gray-400/90">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </span>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center my-24 md:mt-24 md:mb-48 md:flex-row relative">
          <div className="flex flex-col items-center md:flex-row md:gap-4 gap-24">
            {features.map((feature, index) => (
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                key={index}
              />
            ))}
          </div>
          <div className="w-2 h-full md:w-full md:h-2 bg-teal-500 absolute z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
