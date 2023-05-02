import { motion,useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import Licon from './Licon'



const Details=({type,time,address,info})=>{
    const ref=useRef(null)
    return(

        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between '>
        <Licon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
            <h3 className='capitlaize font-bold text-2xl '>{type} </h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
            </motion.div>
        </li>
    )
}
const Education = () => {
    const ref=useRef(null)
    
    const {scrollYProgress} =useScroll(
        {
            target:ref ,
            offset:["start end","center start"]
        }
    )
    
  return (
    <div className='my-64'>
    <h2  className='font-bold text-8xl mb-32 w-full text-center'>
    Education</h2>
    <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 h-full w-[4px]  bg-dark origin-top '/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                type="Bachelor of Technology In  Electrical Engineering"  time='2018 – 2022' address="Indira Gandhi Institute of Technology,Sarang" info= "CGPA : 8.6"
                
                ></Details>
                <Details
                type="XII standard, CBSE"  time='2015 – 2017' address="D.A.V Public School, Bandhbahal" info= "Percentage : 90.8"
                ></Details>
<Details
                type="X standard, CBSE"  time='2005 – 2015' address="D.A.V Public School, Bandhbahal" info= "CGPA : 9.4"
                ></Details>
                   
             

        
        </ul>
    </div>
    </div>
  )
}

export default Education