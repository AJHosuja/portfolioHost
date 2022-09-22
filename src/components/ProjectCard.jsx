import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const ProjectCard = ({ cardData }) => {

    console.log(cardData)

    return (
        <div className='bg-dark-gray w-96 h-[600px] flex flex-col mb-20 rounded-lg'>
            <img src={cardData.imgUrl} className='object-cover h-96 rounded-t-lg flex-1' alt="Prject img" />
            <div className='p-3 flex flex-col h-[216px] rounded-b-lg justify-between'>
                <div>
                    <h1 className='text-white text-xl '>{cardData.title}</h1>
                    <h3 className='text-white mt-3 flex items-center space-x-2'>
                        <cardData.icon /><p>{cardData.projectType}</p></h3>
                </div>
                <div className=''>
                    <div className='flex justify-between pr-4'>
                        <p className='flex items-center text-lg text-white space-x-2 cursor-pointer'>
                            <a href={cardData.codeLink}>View code</a> <FaLongArrowAltRight />
                        </p>
                        <button className='bg-green-color rounded-full px-4 w-40'>
                            <a href={cardData.livePreview}>
                                Live Preview
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard