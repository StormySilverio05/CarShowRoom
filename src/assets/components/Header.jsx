import React from 'react'
import logotwo from "../img/logotwo.png"
import flechaone from "../img/flechaone.png";
import user from "../img/user.png";
import world from "../img/world.png";
import hambmenu from "../img/hambmenu.png";
import Lupa from "../img/Lupa.png"
function Header() {
  return (
    <div className='bg-slate-950'>
        <div className='md:flex bg-slate-950 justify-start'>
            <img className='logo md:relative md:m-2  flex m-auto max-w-24 h-20 bg-transparent' src={logotwo} alt="Logo" />
            <ul className="md:flex md:w-full md:bg-transparent hidden md:gap-2 md:text-[1rem]  cursor-pointer md:flex-row m-auto h-100 text-[2rem] bg-orange-300">
                <li className='bg-transparent text-center m-auto lg:max-w-full hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm' >Carros Nuevos</li>
                <li className='bg-transparent text-center m-auto lg:max-w-full hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm'>Carros Usados</li>
                <li className='bg-transparent text-center m-auto lg:max-w-full hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm'>Vender</li>
                <li className='bg-transparent text-center m-auto lg:max-w-full flex gap-5 hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm'>Article <img className='flecha rightimg rotate-90 bg-transparent' src={flechaone} alt="Ver" /> </li>
                <li className='bg-transparent items-center m-auto lg:max-w-full flex gap-5 hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm'><img className='rightimg ' src={user} alt="Ver" />Sign IN</li>
                <li className='bg-transparent text-center m-auto lg:max-w-full flex gap-5 hover:bg-gray-400 hover:text-blue-500 px-2 py-2 transition-all rounded-sm'><img src={world} className='rightimg ' alt="Ver" />EN <img className='flecha rightimg rotate-90 bg-transparent ' src={flechaone} alt="Ver" /></li>
            </ul>
            <img className='hambmenu md:hidden absolute w-16 top-5 left-5 z-10 bg-transparent cursor-pointer' src={hambmenu} alt="Menu" />
            <img className='lupamenu md:hidden absolute w-10 top-5 right-5 bg-transparent cursor-pointer' src={Lupa} alt="" />
        </div>
        <div className='newcars md:m-28 bg-slate-950 m-10'>
          <h1 className='text-[3rem] bg-transparent'>Autos Usados</h1>
          <h3 className='text-[2rem] bg-transparent'>Homepage - Autos Usados</h3>
        </div>
    </div>
  )
}

export default Header