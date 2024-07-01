import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function VideoTitle({title, overview}) {


  return (
    <div className="w-screen aspect-video pt-[20%] p-7 md:px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold w-[38rem]">{title}</h1>
        <p className="hidden md:inline-block  py-6 text-lg w-[35rem]">{overview}</p>
        <div className="flex items-center my-3 md:my-0">
          <button className="flex justify-center items-center bg-white text-black p-2 px-6 md:p-4 md:px-12 font-bold hover:bg-opacity-80 text-xl rounded-lg"> <FaPlay className="mr-2" /> Play</button>
          <button className="hidden md:flex justify-center items-center bg-gray-500 text-white p-4 px-12 font-bold text-xl bg-opacity-40 mx-3 rounded-lg"> <IoIosInformationCircleOutline className="mr-2 text-2xl" /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle