import React from 'react'
import { LuShoppingBag, LuShowerHead } from "react-icons/lu";
import { IoBedOutline, IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { MdOutlineKitchen, MdOutlineOtherHouses, MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdArrowBack, IoMdArrowForward  } from "react-icons/io";

const Home = () => {
  return (
    <section className="h-container">
        <nav className='flex justify-between items-center'>
            <div className='mb-[40px]'>
                <img src="./lightLogo.jpg" alt="" width={120}/>
            </div>
            <div className='flex gap-[40px]'>
                <a href="#">Home</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
            </div>
            <div className='flex'>
                <form action="">
                    <input type="search" name="" id="" placeholder='What are you looking for?'/>
                    <span><IoSearchOutline /></span>
                </form>
                <span><MdOutlineFavoriteBorder /></span>
                <span><IoCartOutline /></span>
                <span>Profile Icon</span>
            </div>
        </nav>
        <main>
            <div className="hero">
                <div className='category-List flex flex-col gap-4'>
                    <a href="#" className='flex items-center'><LuShoppingBag/> Official Brands</a>
                    <a href="#" className='flex items-center'><IoBedOutline />Bedroom</a>
                    <a href="#" className='flex items-center'><RiSofaLine />Living & Dining</a>
                    <a href="#" className='flex items-center'><MdOutlineKitchen />Kitchen</a>
                    <a href="#" className='flex items-center'><LuShowerHead />Bathroom</a>
                    <a href="#" className='flex items-center'><MdOutlineOtherHouses />Other categories</a>
                </div>
                <div className='banner'></div>
            </div>
            <div className="flashSection ">
                 <button className='bg-[#e8006c] text-white font-semibold py-[0.3rem] px-[1.2rem] text-right'>Today's</button>
                 <div className='flex items-center justify-between mt-[20px]'>
                   <h1 className='text-[30px] font-semibold'>Flash Sales</h1>
                   <div className="counter"></div>
                 <div className='flex gap-[15px]'>
                     <span className='rounded-full bg-[#f5f5f5] p-[0.5rem]'><IoMdArrowBack className='text-[30px]'/></span>
                     <span className='rounded-full bg-[#f5f5f5] p-[0.5rem]'><IoMdArrowForward className='text-[30px]'/></span>
                   </div>
                 </div>
                 
                 <div></div>
            </div>
        </main>
    </section>
  )
}

export default Home