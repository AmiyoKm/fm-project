import React from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

const ScrollIndicator = () => {
    const {scrollYProgress} = useScroll();
    const lineWidth = useTransform(scrollYProgress , [0 , 1 ] , ['0%' , '100%'])
  return (
    <div className='h-[20vh] p-[20px]'>
        <motion.div style={{width : lineWidth , transition: 'width 0.1s ease', }} className='fixed top-0 left-0 h-[5px] bg-red-500' />
        <div className="mt-[50px]">
            {
                [...Array(100)].map((_ , index)=>(
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                ))
            }
        </div>
    </div>
  )
}

export default ScrollIndicator