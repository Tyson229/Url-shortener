import { useState } from "react";
import { linkResult } from "../contexts/link-context";

export const ShortenedLinkBox = ({ original, shortened }: linkResult) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  function handleOnClick() {
    setIsButtonClicked(() => true);
    navigator.clipboard.writeText(shortened);
    
  }
  return (
    <div className="w-full bg-white rounded-md grid md:grid-cols-3 items-center">
      <div className="w-full grid md:col-span-2">
        <a
          href={original}
          target="_blank"
          className="px-4 py-2 w-full text-ellipsis overflow-hidden"
        >
          {original}
        </a>
        <div className="w-full h-px flex md:hidden bg-slate-200"></div>
      </div>
      <div className="p-4 grid gap-4 md:grid-cols-3 items-center">
        <a
          href={shortened}
          target="_blank"
          className="text-teal-500 text-lg md:col-span-2 text-ellipsis overflow-hidden"
        >
          {shortened}
        </a>
        <button
          className={`w-full text-white duration-100 transition-colors ease-in-out p-2 font-bold rounded-md ${isButtonClicked ? 'bg-purple-950 hover:bg-purple-800' : 'bg-teal-400/90 hover:bg-teal-300 hover:text-stone-100'}`}
          onClick={() => handleOnClick()}
        >
          {isButtonClicked ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};
