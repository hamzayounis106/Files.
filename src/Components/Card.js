import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion"
function Card({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className="w-[240px] bg-zinc-900 rounded-[12px] h-[300px] relative   text-[#fff] px-4 py-10 shrink-0 align-middle overflow-hidden">
        <FaFileAlt className="text-1xl text-[#FFA500] " />
        <h4 className="mt-4">{data.taskname}</h4>
        <p className="mt-2">{data.taskdesc}</p>
        {data.status === "Ready" && (
          <div className="flex justify-between absolute w-full p-7 bottom-0 left-0">
            <p className="text-1xl text-[#FFA500] ">{data.size}</p>
            <FaDownload className="text-1xl text-[#FFA500] pb-0 mb-0 cursor-pointer " />
          </div>
        )}
        {data.status === "Downloading" && (
          <p className="text-1xl text-[#FFA500] absolute bottom-10 left-0 p-3 ">
            {data.size}
          </p>
        )}
        {data.status === "Downloading" && (
          <div className="flex justify-center absolute w-full p-3 bottom-0 left-0 bg-blue-700">
            <p className="text-1xl text-white">Downloading</p>
          </div>
        )}
        {data.status === "Completed" && (
          <div className="flex justify-center absolute w-full p-3 bottom-0 left-0 bg-green-700">
            <p className="text-1xl text-white">Completed</p>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Card;
