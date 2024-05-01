import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function VideoTitle({title, overview}) {


  return (
    <div className="w-full aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex items-center">
          <button className="flex justify-center items-center bg-white text-black p-4 px-12 font-bold hover:bg-opacity-80 text-xl rounded-lg"> <FaPlay className="mr-2" /> Play</button>
          <button className="flex justify-center items-center bg-gray-500 text-white p-4 px-12 font-bold text-xl bg-opacity-40 mx-3 rounded-lg"> <IoIosInformationCircleOutline className="mr-2 text-2xl" /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle