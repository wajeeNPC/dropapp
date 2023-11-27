import React from 'react'

import databiz from '../assets/images/client-databiz.svg'
import audio from '../assets/images/client-audiophile.svg'
import meet from '../assets/images/client-meet.svg'
import maker from '../assets/images/client-maker.svg'

import heroimg from '../assets/images/image-hero-desktop.png'
import heromob from '../assets/images/image-hero-mobile.png'

const Hero = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex md:min-h-[85vh] min-h-[900px] md:flex-row flex-col items-center'>
        <div className='md:w-[800px] w-[360px] flex flex-col justify-center md:pl-[100px] md:order-1 order-2'>
            <div className='flex flex-col md:items-start items-center'>
                <h1 className='md:text-[80px] text-[35px] font-epilogue font-bold leading-[80px] md:text-left text-center md:max-w-[600px] max-w-[350px] md:mb-[50px] mt-[20px]'>Make<br className='md:flex hidden'/> remote work</h1>
                <p className='md:text-[18px] text-[16px] text-gray-600 font-epilogue md:text-left text-center md:max-w-[600px] max-w-[350px] md:mb-[50px] mb-[30px]'>Get your team in sync, no matter your location.<br className='md:flex hidden'/>Streamline processes, create team rituals, and<br className='md:flex hidden'/> watch productivity soar.</p>
                <button className='h-[50px] bg-black w-[150px] font-epilogue text-[15px] text-white rounded-xl mb-[50px] hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 ease-out'>Learn more</button>
            </div>
            <div className='flex items-center justify-between md:max-w-[580px] max-w-[350px] h-[50px] md:mt-[50px] md:ml-[0px] ml-[5px]'>
                <img src={databiz} width={90} className='md:h-[20px] mx-1'/>
                <img src={audio} width={60} className='md:h-[32px] mx-1'/>
                <img src={meet} width={78} className='md:h-[20px] mx-1'/>
                <img src={maker} width={85} className='md:h-[30px] mx-1'/>
            </div>    
        </div>
        <div className='md:w-[600px] w-full flex flex-col justify-center md:order-2 order-1'>
            <img src={heroimg} max-width={550} className='hidden md:flex h-[620px] md:mb-[40px] mx-8'/>
            <img src={heromob} max-width={300} className='md:hidden h-[100%] '/>
        </div>
    </div>
  )
}

export default Hero