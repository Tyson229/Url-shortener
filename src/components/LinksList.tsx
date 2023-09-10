import { useLinkContext } from "../contexts/link-context";
import { layoutStyle } from "../styles/layout";
import { ShortenedLinkBox } from "./ShortenedLinkBox";

const LinksList = () => {
  const { links, setLinks } = useLinkContext();
  return (
    <section className="w-full grid place-items-center -mt-24 pb-12 bg-slate-200 relative z-10">
      {links.length > 0 && (
        <div className={`${layoutStyle} flex flex-col-reverse gap-4`}>
          {links.map(({ original, shortened }, i) => {
            return (
              <ShortenedLinkBox
                original={original}
                shortened={shortened}
                key={i}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default LinksList;
