import { useDispatch, useSelector } from "react-redux";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";
import lang from "../utils/languageConstants";

const Footer = () => {

    const dispatch = useDispatch();

    const langKey = useSelector(store => store.config.lang);
    
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
      };

  return (
    <div className="bg-black h-[400px] justify-center w-screen flex">
        <div className="w-8/12 flex items-center">
        <div className="flex flex-col w-72 gap-3">
            <a className="text-white text-base font-thin">Questions? call <span className="underline"> 000-800-919-1694 </span> </a>
            <a className="text-white cursor-pointer text-base font-thin underline">FAQ</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].IR}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].Privacy}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].STest}</a>
            <select className=" w-20 md:w-28 py-2 px-5 bg-transparent border border-white rounded-md text-white" onChange={handleLanguageChange}>
            {
                SUPPORTED_LANG.map(lang => 
                <option className="text-black" key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                )
            }
            </select>
            <a className="text-white text-lg font-normal">{lang[langKey].NI}</a>
        </div>
        <div className="flex flex-col w-72 gap-3">
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].HC}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].jobs}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].cookie}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].LNotice}</a>
        </div>
        <div className="flex flex-col w-64 gap-3">
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].Account}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].WTW}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].CI}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].OoN}</a>
        </div>
        <div className="flex flex-col gap-3 ">
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].MC}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].ToU}</a>
            <a className="text-white cursor-pointer text-base font-thin underline">{lang[langKey].CU}</a>
        </div>
        </div>
    </div>
  )
}

export default Footer;