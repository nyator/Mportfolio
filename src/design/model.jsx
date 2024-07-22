
'use client'
import { useState } from 'react'
import { Check } from 'phosphor-react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalIcon } from 'keep-react'

import { RiShareCircleFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


import { projects } from "../constant/project"; 
import { SiGithub } from "react-icons/si";
import { style } from "../constant/index"

export const ModalComponent = () => {
  const [isOpen, setIsOpen] = useState(true)
  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
  
  {projects.map((item, index) => 
  (
    <div key={index}>


      <Button onClick={openModal}>{item.title}</Button>



      <Modal isOpen={isOpen} onClose={closeModal}>
      <IoClose onClick={closeModal} size={30} color="white" className='fixed top-3 right-10'/>

        <ModalBody className="flex w-[30rem] flex-col mx-5 bg-zinc-900 items-center p-6 lg:pb-8">
          
           <ModalContent className="mb-5 text-center">
           <img src={projects[1].img} alt="image" className="rounded-t-lg aspect-auto"/>
           <div className="flex items-start gap-2 mt-4 flex-col">
              <h1 className="font-black text-lg text-white text-nowrap shrink-0 max-w-[calc(100%_-_150px)]">
              {item.title}
              </h1>

              <p className="text-sm space-x-3 text-start text-blue-300 opacity-70">{projects[1].tech}</p>
              <p className=" text-gray-300 text-start text-[15px] ">{projects[1].description}
              </p>

              <h1 className="font-bold text-lg text-white text-nowrap shrink-0 max-w-[calc(100%_-_150px)]"> Project Links </h1>

              <div className="flex flex-row gap-5">
              <a href="" target="blank" className='text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1'><SiGithub className={`${style.navicon}  size-4`}/><p className='text-[12px]'>Source code</p></a>
              <a href="" target="blank" className='text-zinc-300 hover:text-indigo-300 transition-colors flex items-center gap-1' ><RiShareCircleFill className={`${style.navicon} size-4`}/><p className='text-[12px]'>Live Demo</p></a>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>

      </div>
))}
    </div>
  )
}
