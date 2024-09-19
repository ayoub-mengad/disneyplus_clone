import React from 'react'
import logo2 from './../assets/img/logo2.svg'
import { HiHome } from "react-icons/hi";
import { HiLockClosed } from "react-icons/hi";
import HeaderItem from './../Componets/HeaderItem';
import { HiUserAdd } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { IoFilmOutline } from "react-icons/io5";


export default function Header() {

    const menu = [
        {
            name: 'Home',
            icon: HiHome
        },
        {
            name: 'Login',
            icon: HiLockClosed,
        },

        {
            name: 'Sign Up',
            icon: HiUserAdd
        },

        {
            name: 'Search',
            icon: HiOutlineSearch
        },

        {
            name: 'Movies',
            icon: IoFilmOutline
        }





    ]

  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img src={logo2} className='w-[100px] md:w-[150px] object-cover' />
            {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
        </div>

        <img src='https://rb.gy/g1pwyx' 
        className='w-[40px] rounded-full' />
    </div>
  )
}
