
const Footer = () => {
  return (
    <div className="bg-black h-[400px] justify-center w-screen flex">
        <div className="w-8/12 flex items-center">
        <div className="flex flex-col w-72 gap-3">
            <a className="text-white text-base font-thin">Questions? call <span className="underline"> 000-800-919-1694 </span> </a>
            <a className="text-white cursor-pointer text-base font-thin underline">FAQ</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Investor Relations</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Privacy</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Speed Test</a>
            <a className="text-white text-lg font-normal">Netflix India</a>
        </div>
        <div className="flex flex-col w-72 gap-3">
            <a className="text-white cursor-pointer text-base font-thin underline">Help Center</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Jobs</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Cookies Prefrence</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Legal Noties</a>
        </div>
        <div className="flex flex-col w-64 gap-3">
            <a className="text-white cursor-pointer text-base font-thin underline">Account</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Ways to Watch</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Corporate Information</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Only on Netflix</a>
        </div>
        <div className="flex flex-col gap-3 ">
            <a className="text-white cursor-pointer text-base font-thin underline">Media Center</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Terma of Use</a>
            <a className="text-white cursor-pointer text-base font-thin underline">Contact Us</a>
     underline    </div>
        </div>
    </div>
  )
}

export default Footer;