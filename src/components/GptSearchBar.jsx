import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";

function GptSearchBar() {

  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {

    // make an api call to get gpt api and get movie

    // const gptQuery = "Act as a Movie Recommendation system and suggest movies for the query : " + searchText.current.value + "Only give me name of 5 movies, comma saperated like the example result ahead. Example Result : The Freelancer, Puspa, Bahubali, KGF, Salaar";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
  }

  return (
    <div className="pt-36 md:pt-32 flex justify-center">
        <form className="w-full md:w-1/2 h-20 bg-gradient-to-b from-black rounded-xl grid grid-cols-9 md:grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input type="text" ref={searchText} className="col-span-7 md:col-span-9 text-white placeholder-white border border-white bg-transparent text-2xl py-2 px-4 m-4 rounded-lg" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="col-span-2 md:col-span-3 m-0 md:m-4 py-1 md:py-3 px-2 md:px-7 text-sm sm:text-lg md:text-2xl bg-cyan-500 text-white rounded-lg" onClick={handleGptSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar