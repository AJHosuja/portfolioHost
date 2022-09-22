import React from 'react'

const EducationComponent = (props) => {
  return (
    <div className='flex flex-col space-y-7'>
      <h1 className='text-white text-2xl'>{props.years}</h1>
      {props.title && <p className='text-green-color max-w-md text-xl'>{props.title}</p>}
      {props.titleJob && <p className='text-green-color max-w-[300px] text-xl'>{props.titleJob}</p>}
      <h1 className='text-[#f2f2f2] text-xl'>{props.place}</h1>
    </div>
  )
}

export default EducationComponent