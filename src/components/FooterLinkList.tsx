const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => {
  return (
    <ul className="text-center md:text-left space-y-2">
      <div className="font-bold text-lg mb-6">{title}</div>
      {links.map((link, i) => (
        <li
          className=" text-gray-400 hover:text-teal-400 transition-colors ease-linear duration-75"
          key={i}
        >
          {link}
        </li>
      ))}
    </ul>
  );
};

export default FooterLinkList;
