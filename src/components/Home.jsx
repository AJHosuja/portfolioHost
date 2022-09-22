import React from 'react'
import {
  AiOutlineCloudDownload,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { IconContext } from "react-icons";

import { BsLinkedin } from "react-icons/bs";

const Home = () => {
  return (
    <div className=' bg-dark-gray flex flex-col overflow-hidden'>
      <div className='items-end bg-home-mobile bg-auto lg:bg-home h-screen lg:animate-bg-slide  bg-no-repeat  bg-center lg:bg-cover flex lg:items-center lg:justify-center'>
        <div className='hidden flex-col ml-20 flex-[0.7] bg-none md:flex animate-left-slide '>
          <h1 className='text-green-color text-4xl'>AJ VIRRANKARI</h1>
          <hr className='ml-[80px] w-[340px] h-[2px] border-0 bg-green-color my-5' />
          <h1 className='text-white text-4xl'>Software Engineer Student</h1>
          <p className='text-white mt-10 '>Software Engineer Student who has high motivation learn learn and <br />
            learn more. Ready to put some hours to make it.</p>
          <button className="bg-green-color w-52 flex justify-center items-center space-x-2 rounded-xl h-8 mt-5 font-semibold transition-all hover:bg-white">
            <AiOutlineCloudDownload className="" size="20px" />
            <p>
              Download CV
            </p>
          </button>
          <div className='flex flex-row space-x-14 mt-24'>
            <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
              <button className=" flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
                <a href="https://www.instagram.com/anttiju/">
                  <AiOutlineInstagram />
                </a>
              </button>
              <button className="flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
                <a href="https://github.com/AJHosuja">
                  <AiOutlineGithub />
                </a>
              </button>
              <button className="flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
                <a href="https://www.linkedin.com/in/antti-jussi-virrankari-971595220/">
                  <BsLinkedin size="2rem" />
                </a>
              </button>
            </IconContext.Provider>
          </div>
        </div>

        <div className='flex flex-col lg:hidden justify-end ml-4 animate-left-slide'>
          <h1 className='text-green-color text-3xl'>AJ VIRRANKARI</h1>
          <hr className='ml-[80px] w-[250px] h-[2px] border-0 bg-green-color my-5' />
          <h1 className='text-white text-3xl'>Software Engineer Student</h1>
        </div>

      </div>

      <div className='flex flex-col ml-5 flex-[0.7] bg-none lg:hidden animate-left-slide mb-20 border-none'>


        <p className='text-white mt-10 '>Software Engineer Student who has high motivation learn learn and <br />
          learn more. Ready to put some <br></br>hours to make it.</p>
        <button className="bg-green-color w-52 flex justify-center items-center space-x-2 rounded-xl h-8 mt-5 font-semibold transition-all hover:bg-white">
          <AiOutlineCloudDownload className="" size="20px" />
          <p>
            Download CV
          </p>
        </button>
        <div className='flex flex-row space-x-14 mt-10'>
          <IconContext.Provider value={{ color: "white", size: "2.5rem" }}>
            <button className=" flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
              <a href="https://www.instagram.com/anttiju/">
                <AiOutlineInstagram />
              </a>
            </button>
            <button className="flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
              <a href="https://github.com/AJHosuja">
                <AiOutlineGithub />
              </a>
            </button>
            <button className="flex bg-darker-gray w-14 h-14 items-center justify-center rounded-full transition-all hover:bg-icon-hover">
              <a href="https://www.linkedin.com/in/antti-jussi-virrankari-971595220/">
                <BsLinkedin size="2rem" />
              </a>
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Home