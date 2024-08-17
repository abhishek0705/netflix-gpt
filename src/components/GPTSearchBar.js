import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector(
    (store) => store.config.selectedLanguage
  );

  const handSearchClick = () => {};
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12 rounded-md"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selectedLanguage].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 bg-red-700 m-4 text-white rounded-lg col-span-3"
          onClick={handSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
