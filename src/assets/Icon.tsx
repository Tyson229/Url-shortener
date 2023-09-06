const Icon = ({ path }: { path: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className="fill-white hover:fill-teal-500"
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
