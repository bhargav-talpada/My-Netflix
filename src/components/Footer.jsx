
const Footer = () => {
  return (
    <div className="bg-black h-[400px] justify-center w-screen flex">
        <div className="w-8/12 flex items-center">
        <div className="flex flex-col w-64 gap-3">
            <a className="text-white cursor-pointer text-lg font-normal underline">Questions? Call 000-800-919-1694</a>
            <a className="text-white cursor-pointer text-lg font-normal">FAQ</a>
            <a className="text-white cursor-pointer text-lg font-normal">Investor Relations</a>
            <a className="text-white cursor-pointer text-lg font-normal">Privacy</a>
            <a className="text-white cursor-pointer text-lg font-normal">Speed Test</a>
            <a className="text-white cursor-pointer text-lg font-normal">Netflix India</a>
        </div>
        <div className="flex flex-col w-56 gap-3">
            <a className="text-white cursor-pointer text-lg font-normal">Help Center</a>
            <a className="text-white cursor-pointer text-lg font-normal">Jobs</a>
            <a className="text-white cursor-pointer text-lg font-normal">Cookies Prefrence</a>
            <a className="text-white cursor-pointer text-lg font-normal">Legal Noties</a>
        </div>
        <div className="flex flex-col w-60 gap-3">
            <a className="text-white cursor-pointer text-lg font-normal">Account</a>
            <a className="text-white cursor-pointer text-lg font-normal">Ways to Watch</a>
            <a className="text-white cursor-pointer text-lg font-normal">Corporate Information</a>
            <a className="text-white cursor-pointer text-lg font-normal">Only on Netflix</a>
        </div>
        <div className="flex flex-col gap-3 ">
            <a className="text-white cursor-pointer text-lg font-normal">Media Center</a>
            <a className="text-white cursor-pointer text-lg font-normal">Terma of Use</a>
            <a className="text-white cursor-pointer text-lg font-normal">Contact Us</a>
        </div>
        </div>
    </div>
  )
}

export default Footer;