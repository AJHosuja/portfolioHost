import React from 'react'
import ProjectCard from './ProjectCard'
import { FaReact } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";




const projects = [
    {
        title: "WareHouse inventory APP",
        imgUrl: "https://randomwordgenerator.com/img/picture-generator/57e3dd424851ac14f1dc8460962e33791c3ad6e04e507441722a72dd914fc7_640.jpg",
        codeLink: "https://portfolio-web-app-project.vercel.app/",
        livePreview: "https://portfolio-web-app-project.vercel.app/",
        projectType: "React APP",
        icon: FaReact
    },
    {
        title: "WareHouse inventory APP",
        imgUrl: "https://randomwordgenerator.com/img/picture-generator/57e3dd424851ac14f1dc8460962e33791c3ad6e04e507441722a72dd914fc7_640.jpg",
        codeLink: "https://portfolio-web-app-project.vercel.app/",
        livePreview: "https://portfolio-web-app-project.vercel.app/",
        projectType: "React APP",
        icon: FaReact
    },
    {
        title: "WareHouse inventory APP",
        imgUrl: "https://randomwordgenerator.com/img/picture-generator/57e3dd424851ac14f1dc8460962e33791c3ad6e04e507441722a72dd914fc7_640.jpg",
        codeLink: "https://portfolio-web-app-project.vercel.app/",
        livePreview: "https://portfolio-web-app-project.vercel.app/",
        projectType: "React APP",
        icon: FaReact
    },


]


const Projects = () => {
    const wrapper = {
        textAlign: "center",
        fontSize: "18px",
        background: "#fff",
        /* Center slide text vertically */
        display: "flex",
        webkitBoxPack: "center",
        alignItems: "center",
    };
    return (
        <div className='bg-light-black flex justify-center pb-20'>
            <div className=' flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl mt-10'>PROJECTS</h1>
                <hr className='w-32 h-[2px] border-0 bg-green-color my-10 lg:my-5' />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    speed={800}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper hidden w-[80vw] overflow-hidden lg:flex"
                >
                    {projects.map((mappingValue, index) => {
                        return (
                            <SwiperSlide className="flex items-center justify-center ">
                                <div key={index}>
                                    <ProjectCard cardData={mappingValue} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    speed={800}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper flex w-screen overflow-hidden lg:hidden"
                >
                    {projects.map((mappingValue, index) => {
                        return (
                            <SwiperSlide className="flex items-center justify-center ">
                                <div key={index}>
                                    <ProjectCard cardData={mappingValue} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}



export default Projects