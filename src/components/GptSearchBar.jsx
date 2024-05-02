import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"

function GptSearchBar() {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-32 flex justify-center">
        <form className="w-1/2 h-20 bg-gradient-to-b from-black rounded-xl grid grid-cols-12">
            <input type="text" className="col-span-9 text-white placeholder-white border border-white bg-transparent text-2xl py-2 px-4 m-4 rounded-lg" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="col-span-3 m-4 py-3 px-7 text-2xl bg-cyan-500 text-white rounded-lg">
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar