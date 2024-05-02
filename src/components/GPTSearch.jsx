import { LOGIN_BG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GPTSearch = () => {
  return (
    <div className="">
        <div className="absolute -z-10">
            <img src={LOGIN_BG} alt="Netflix BG" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GPTSearch