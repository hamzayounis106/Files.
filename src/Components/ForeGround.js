import React, { useRef } from "react";
import Card from "./Card";
function ForeGround() {
    const ref = useRef(null);
const filesData = [
   
   
    {
            taskname: "File 7",
            taskdesc: "This is a dummy File description for File 7",
            size: "3.2mb",
            status: "Ready",
    },
    {
            taskname: "File 8",
            taskdesc: "This is a dummy File description for File 8",
            size: "2.6mb",
            status: "Downloading",
    },
    {
            taskname: "File 9",
            taskdesc: "This is a dummy File description for File 9",
            size: "4.5mb",
            status: "Completed",
    },
    {
            taskname: "File 10",
            taskdesc: "This is a dummy File description for File 10",
            size: "3.9mb",
            status: "Ready",
    }
];
  return (
    <>
      <div ref={ref} className="absolute top-0 left-0 w-full h-screen z-20  p-10 flex flex-wrap gap-5 overflow-hidden">
        {filesData.map((file, index) => {
          return <Card data={file} key={index} reference={ref} />;
       
        })}
      </div>
    </>
  );
}

export default ForeGround;
