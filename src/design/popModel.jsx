import { useRef } from "react";

import { projects } from "../constant/project"; 
import { IoClose } from "react-icons/io5";


const PopModel = ({onClose}) => {
    const modelRef = useRef()

    const closeModel = (e) => {
        if(modelRef.current === e.target){
            onClose()
        }
    }
// const img = {projects};

    return (
      <div ref={modelRef} onClick={closeModel}className="fixed w-screen h-screen z-50 top-0 left-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
        <div className="mt-10 flex flex-col ">
          <button onClick={onClose} className="place-self-end"><IoClose size={30} /></button>
  
          <div className="mx-11 h-[700px] bg-gray-700 rounded-lg">
            <img src={projects[0].img} alt="image" className="w-fit rounded-lg"/>
              <h1 className="text-xl font-black">PopModel</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
          </div>
        </div>
      </div>
    );
  };

export default PopModel;