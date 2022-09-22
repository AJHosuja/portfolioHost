import React from 'react'
import EducationComponent from './EducationComponent'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const EducationAndJobs = () => {
  return (
    <div className='bg-dark-gray overflow-hidden pb-16'>

      <AnimationOnScroll animateOnce={true} animateIn="animate__bounceInUp">
        <div className='bg-dark-gray flex flex-col justify-center pl-5 lg:pl-0 lg:space-x-20 lg:flex-row'>


          <div className='flex flex-col mt-10'>
            <h1 className='text-white text-4xl mb-7'>Education</h1>
            <div className='mb-12 lg:mb-28'>
              <EducationComponent years={"2018 - 2021"} title={"Undergraduate degree in information and communication technology"} place={"OSAO, Oulu"} />
            </div>
            <EducationComponent years={"2021 - Present"} title={"Information and communication engineer, Software engineer"} place={"Oulu Univeristy of Applied Sciences, Oulu"} />
          </div>


          <div className='flex flex-col mt-28 lg:mt-10'>
            <h1 className='text-white text-4xl mb-7'>Jobs</h1>
            <div className='mb-12 lg:mb-28'>
              <EducationComponent years={"2019/09 - 2019/11"} titleJob={"IT Support Specialist, Internship"} place={"Power Oulu Limingantulli"} />
            </div>
            <EducationComponent years={"2020-Present"} titleJob={"IT Support Specialist & Storage worker"} place={"Power Oulu Limingantulli"} />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default EducationAndJobs