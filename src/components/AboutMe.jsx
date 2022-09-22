import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const AboutMe = () => {
  return (
    <div className='bg-light-black overflow-hidden pb-16'>

      <AnimationOnScroll animateOnce animateIn="animate__fadeIn">

        <div className='flex bg-light-black justify-center items-center'>
          <div className='flex flex-col items-center my-24'>

            <h1 className='text-4xl text-white'>About me</h1>
            <hr className='w-32 h-[2px] border-0 bg-green-color my-10 lg:my-5' />
            <p className='text-white text-xl mx-3 lg:mx-0'>
              Hi! My name is <strong className='text-green-color font-normal'>Antti-Jussi Virrankari</strong>. I am <strong className='text-green-color font-normal'>20</strong> years old software engineer <br className='hidden lg:flex' />
              student from <strong className='text-green-color font-normal'>Oulu, Finland.</strong> I am high motivated student who wants to <strong className='text-green-color font-normal'>learn <br className='hidden lg:flex' />
                more and more.</strong> Currently I am interested in learning more about <strong className='text-green-color font-normal'>C++,<br className='hidden lg:flex' />
                Javascript, React and React Native.</strong> Make sure you check projects what I<br className='hidden lg:flex' />
              have been done.
            </p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default AboutMe