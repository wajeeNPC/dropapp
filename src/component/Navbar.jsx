import React,{useState} from 'react'

import logo from '../assets/images/logo.svg'
import downArrow from '../assets/images/icon-arrow-down.svg'
import upArrow from '../assets/images/icon-arrow-up.svg'
import todo from '../assets/images/icon-todo.svg'
import calender from '../assets/images/icon-calendar.svg'
import reminder from '../assets/images/icon-reminders.svg'
import planning from '../assets/images/icon-planning.svg'
import menu from '../assets/images/icon-menu.svg'
import close from '../assets/images/icon-close-menu.svg'




const Navbar = () => {

const [Feanav,setFeaNav] = useState(false);
const [Comnav,SetComNav] = useState(false);
const [Sidenav,SetSideNav] = useState(false);
const [sideFae,SetSideFae] = useState(false);
const [sideCom,SetSideCom] = useState(false);

function toggleFeaNav(){
    setFeaNav(!Feanav);
}

function toggleComNav(){
    SetComNav(!Comnav);
}

const toggleSidenav = () =>{
    SetSideNav(!Sidenav);
}

const toggleSideFae = () =>{
    SetSideFae(!sideFae);
}

const toggleSideCom = () =>{
    SetSideCom(!sideCom);
}

  return (
    <div className='max-w-[1440px] mx-auto flex justify-between h-[80px] overflow-x-hidden'>
        <div className='flex items-center ml-4 w-full'>
        <img src={logo} alt='logo' className='md:h-[35px] md:ml-3'/>
        <ul className='hidden md:flex font-epilogue text-[15px] items-center mx-12 text-gray-600'>
            <li className={Feanav? 'flex items-center mx-6 text-gray-800 cursor-pointer':'flex items-center mx-6 hover:text-gray-800 cursor-pointer'} onClick={toggleFeaNav}>Features<img src={Feanav? upArrow:downArrow} className='h-[8px] mx-2'/></li>
            <li className={Comnav? 'flex items-center mx-6 text-gray-800 cursor-pointer':'flex items-center mx-6 hover:text-gray-800 cursor-pointer'} onClick={toggleComNav}>Company<img src={Comnav? upArrow:downArrow} className='h-[8px] mx-2'/></li>
            <li className='mx-6 hover:text-gray-800 cursor-pointer'>Careers</li>
            <li className='mx-6 hover:text-gray-800 cursor-pointer'>About</li>
        </ul>
        </div>
        <div className='hidden md:flex font-epilogue text-[15px] items-center text-gray-600'>
            <button className='h-[50px] w-[110px] mx-2 rounded-xl hover:text-gray-800'>Login</button>
            <button className='border-2 border-gray-400 h-[50px] w-[110px] mx-5 rounded-xl hover:text-gray-800 hover:border-gray-800'>Register</button>
        </div>
        <div className='flex items-center mr-8'>
            <img src={menu} className={Sidenav?'hidden':'flex h-[22px] cursor-pointer md:hidden'} onClick={toggleSidenav}/>
        </div>
        <div className={Feanav? 'absolute top-20 ml-36 w-[160px] h-[160px] shadow-2xl rounded-xl flex flex-col justify-center bg-white':'hidden'}>
            <ul className='flex flex-col text-gray-600 font-epilogue text-[15px]'>
                <li className='flex items-start my-1.5 mx-auto'><img src={todo} alt='todo icon' className='h-[20px] w-5 mr-2'/>Todo List</li>
                <li className='flex  items-start my-1.5 mx-auto'><img src={calender} alt='calender icon' className='h-[20px] w-5 mr-2'/>Calendar</li>
                <li className='flex items-start my-1.5 mx-auto'><img src={reminder} alt='reminder icon' className='h-[20px] w-4 mr-3'/>Reminders</li>
                <li className='flex items-start my-1.5 mx-auto'><img src={planning} alt='planning icon' className='h-[20px] mr-2'/>Planning</li>
            </ul>
        </div>
        <div className={Comnav? 'absolute top-20 ml-[320px] w-[120px] h-[100px] shadow-2xl rounded-xl flex flex-col justify-center bg-white':'hidden'}>
            <ul className='flex flex-col text-gray-600 font-epilogue text-[15px] items-center'>
                <li className='my-1'>History</li>
                <li className='my-1'>Our Team</li>
                <li className='my-1'>Blog</li>
            </ul>
        </div>
        <div className={`absolute right-0 h-screen w-[60%] flex flex-col bg-slate-300 ${Sidenav?'translate-x-0':'hidden'} translate-x-full ease-in-out duration-300`}>
            
            <div className='flex justify-end mt-[29px] mr-[32px]'>
                <img src={close} className='h-[25px] cursor-pointer' onClick={toggleSidenav}/>
            </div>
            <ul className='text-gray-600 font-epilogue text-[18px] flex flex-col ml-[25px] mt-6'>
                <li className='flex items-center cursor-pointer my-3' onClick={toggleSideFae}>Features<img src={sideFae?upArrow:downArrow} className='h-[8px] ml-[18px]'/></li>
                <div className={`${sideFae?'flex flex-col ml-[35px]':'hidden'}`}>
                    <ul className='my-[15px]'>
                        <li className='flex items-start my-2.5 '><img src={todo} alt='todo icon' className='h-[20px] w-5 mr-2'/>Todo List</li>
                        <li className='flex  items-start my-2.5 '><img src={calender} alt='calender icon' className='h-[20px] w-5 mr-2'/>Calendar</li>
                        <li className='flex items-start my-2.5 '><img src={reminder} alt='reminder icon' className='h-[20px] w-4 mr-3'/>Reminders</li>
                        <li className='flex items-start my-2.5 '><img src={planning} alt='planning icon' className='h-[20px] mr-2'/>Planning</li>
                    </ul>
                </div>
                <li className='flex items-center cursor-pointer my-3' onClick={toggleSideCom}>Company<img src={sideCom?upArrow:downArrow} className='h-[8px] ml-[15px]'/></li>
                <div className={sideCom?'flex flex-col ml-[35px]':'hidden'}>
                    <ul className='my-[15px]'>
                        <li className='my-2.5'>History</li>
                        <li className='my-2.5'>Our Team</li>
                        <li className='my-2.5'>Blog</li>   
                    </ul>
                </div>
                <li className='my-3'>Careers</li>
                <li className='my-3'>About</li>
            </ul>
            <div className='text-gray-600 font-epilogue flex flex-col justify-center items-center'>
                <button className='h-[50px] w-[200px] rounded-xl hover:text-gray-800'>Login</button>
                <button className='border-2 border-gray-500 h-[50px] w-[200px] rounded-xl hover:text-gray-800 hover:border-gray-800'>Register</button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar