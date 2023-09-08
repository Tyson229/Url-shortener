import { FormEvent, useRef, useState } from "react";
import { layoutStyle } from "../styles/layout";
import { fetchLink } from "../api/api";

export const ShortenBox = () => {
  const linkRef = useRef<HTMLInputElement>(null);
  const [inputLink, setInputLink] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputLink.length === 0) {
      setErrorMessage(() => "Please add a link");
      linkRef.current?.focus();
      return;
    } else {
      fetchLink(inputLink)
        .then((data) => {
          console.log(data.result.full_short_link);
          setErrorMessage(() => "");
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
          className={`bg-shorten-mobile md:bg-shorten-desktop bg-contain bg-no-repeat bg-right md:bg-cover md:bg-left-top bg-violet-950 py-5 px-6 md:px-8  ${
            errorMessage ? "md:pb-2 md:pt-6" : "md:py-8"
          } box-border rounded-md grid md:grid-cols-4 ${
            errorMessage ? "gap-2" : "gap-4"
          }  md:gap-x-2 md:gap-y-0.5 relative -top-24`}
        >
          <input
            pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)
            "
            ref={linkRef}
            className={`w-full px-4 py-2 rounded-md md:col-span-3  ${
              errorMessage ? "focus:outline-red-400" : "focus:outline-teal-500"
            }`}
            placeholder="Shorten a link here..."
            onChange={(e) => setInputLink(e.target.value)}
          />
          <div
            className={`text-red-400 text-sm mb-2 md:mb-0 md:row-start-2 ${
              errorMessage ? "block" : "hidden"
            } relative`}
          >
            {errorMessage}
          </div>
          <button
            type="submit"
            className="w-full bg-teal-400/90 hover:bg-teal-300 hover:text-stone-100 duration-100 transition-colors ease-in-out font-bold text-lg p-2 text-white rounded-md"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};
