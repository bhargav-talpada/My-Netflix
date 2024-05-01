import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

function VideoTitle({title, overview}) {


  return (
    <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex items-center">
          <button className="flex justify-center items-center bg-gray-300 text-black p-4 px-12 font-bold text-xl opacity-65 rounded-lg"> <FaPlay className="mr-2" /> Play</button>
          <button className="flex justify-center items-center bg-gray-500 text-white p-4 px-12 font-bold text-xl mx-3 rounded-lg"> <IoIosInformationCircleOutline className="mr-2" /> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle