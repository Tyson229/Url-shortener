import { FormEvent, useEffect, useRef, useState } from "react";
import { layoutStyle } from "../styles/layout";
import { ShortenApiResponse, fetchLink } from "../api/api";

export const ShortenBox = () => {
  const linkRef = useRef<HTMLInputElement>(null);
  const [inputLink, setInputLink] = useState<string>("");

  useEffect(() => {});
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(linkRef.current?.value);

    if (inputLink) {
      fetchLink(inputLink)
        .then((data) => {
          console.log(data.result.full_short_link);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <section className={`w-full bg-slate-200 mt-32 -mb-12 flex justify-center`}>
      <div className={`${layoutStyle} relative`}>
        <form
          onSubmit={handleSubmit}
          className="bg-shorten-mobile md:bg-shorten-desktop bg-contain bg-no-repeat bg-right md:bg-cover md:bg-left-top bg-violet-950 py-5 px-6 md:px-12 md:py-10 rounded-md flex flex-col md:flex-row gap-4 md:gap-6 relative -top-24"
        >
          <input
            type="url"
            ref={linkRef}
            className="w-full px-4 py-2 rounded-md md:w-5/6 "
            placeholder="Shorten a link here..."
            onChange={(e) => setInputLink(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-teal-400/90 hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out font-bold text-lg p-2 text-white rounded-md md:w-1/6"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};
