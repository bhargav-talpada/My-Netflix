import { LOGIN_BG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
            <img className="h-screen object-cover w-screen" src={LOGIN_BG} alt="Netflix BG" />
      </div>
      <div className="">
          <GptSearchBar />
          <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GPTSearch