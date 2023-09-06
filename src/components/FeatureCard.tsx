import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="h-full w-full grid bg-white p-8 rounded-md place-items-center md:place-items-start relative z-10 aspect-[1.5/1] sm:aspect-[2/0.8] md:aspect-[2/2.25] lg:aspect-[3/2] md:even:top-10 md:last:top-20">
      <div className="rounded-full p-6 bg-violet-950 absolute -top-12 md:left-7">
        <img src={icon} alt={title} />
      </div>
      <div className="font-extrabold text-xl mt-8 mb-4">{title}</div>
      <div className="text-stone-400 text-center md:text-left">
        {description}
      </div>
    </div>
  );
};

export default FeatureCard;
