import { layoutStyle } from "../styles/layout";
import FooterLinkList from "./FooterLinkList";
import { footerSections, iconList } from "../lib/data";
import Icon from "../assets/Icon";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 w-full text-white pt-8 grid place-items-center">
      <div
        className={`${layoutStyle} grid place-items-center gap-12 md:gap-0  md:grid-cols-6 md:place-items-start`}
      >
        <div className="font-extrabold text-3xl mb-6 md:col-span-2">
          Short.it
        </div>
        {footerSections.map((s, i) => {
          return <FooterLinkList title={s.title} links={s.links} key={i} />;
        })}
        <div className="flex w-full gap-4 justify-center md:justify-between items-center">
          {iconList.map((icon, i) => {
            return <Icon path={icon} key={i} />;
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
