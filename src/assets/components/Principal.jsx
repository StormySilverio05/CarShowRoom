import React from 'react'
import Jeep from "../img/Jeep.png";
import Audi from "../img/Audi.png"
import { useEffect, useState } from "react";
import Calender from "../img/Calender.png"
import volante from "../img/volante.png"
import Combustible from "../img/Combustible.png"
import usuarios from "../img/usuarios.png"
import estrella from "../img/estrella.png"
import emptystar from "../img/emptystar.png"
import LandRover from "../img/LandRover.png"
import Toyota from "../img/Toyota.png"
import Kia from "../img/Kia.png"
import coupe from "../img/coupe.png"
import Lupa from "../img/Lupa.png"
import list from "../img/list.png"
import listwo from "../img/listwo.png"
import flechatop from "../img/flechatop.png"

import "aos/dist/aos.css"
function Principal() {
    const [open, setOpen]= useState(false);
    const [opentwo, setOpenTwo]= useState(false);
    const Change =()=>{
        setOpen(!open)
    }
    const ChangeTwo =()=>{
        setOpenTwo(!opentwo)
    }
    
  return (
    <div className='principalcontainer xl:flex xl:max-w-full xl:justify-between md:flex justify-between xl:m-20  gap-7 md:m-5'>
        <section data-aos="flip-up" className="filtro xl:w-[28rem] ">
            <section className='filterbody xl:py-5 xl:px-6 bg-gray-800 md:py-5 md:px-6 md:text-2xl px-5 py-10'>
                <div className='titlefilter bg-gray-800 xl:text-[2rem] border-b md:text-2xl text-2xl'>Filtrar</div>
                 <div className='search xl:flex xl:w-full xl:gap-5 items-center xl:mt-4 xl:h-9 xl:px-7 flex px-5 py-3 gap-5 text-2xl xl:py-1 lg:px-2 md:flex md:px-3 md:gap-2 md:py-1 md:items-center bg-gray-700 mt-4 '>
                    <img className="bg-transparent md:w-5 md:h-5 w-5 h-5" src={Lupa} alt="Buscar" /> 
                    <input className=" bg-transparent xl:text-2xl" type="text" placeholder='Buscar' />
                </div>
                <div className='containerfirstfilter bg-gray-800 mt-5 '> 
                    <div className='firstcontainer bg-gray-700 '>
                        <div className='firstfilter bg-gray-700 flex justify-between border-b items-center cursor-pointer px-5' onClick={ChangeTwo}>
                            <h2 className="bg-gray-700 py-3 text-2xl " >Años</h2>
                            <img className={`bg-gray-700 w-5 h-5 ${opentwo ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" />
                        </div>
                        {opentwo?
                        <div className="bg-gray-700 flex gap-4 flex-col text-2xl mt-3 px-5 py-3">   
                            <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" for="checkbox2016"><input className="items-center mr-2" type="checkbox" id='checkbox2016' />2016</label>
                            <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2017"><input className="items-center mr-2" type="checkbox" id='checkbox2017' />2017</label>
                            <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2018"><input className="items-center mr-2" type="checkbox" id='checkbox2018' />2018</label>
                            <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2019"><input className="items-center mr-2" type="checkbox" id='checkbox2019' />2019</label>
                            <a className="bg-gray-700 text-blue-500" href="#">Ver Más</a>
                        </div>
                        : ""}
                    </div>
                    <div className= {`secondscontainer bg-gray-800 text-2xl items-center py-5 `}>
                        <div className='secondfilter bg-gray-700 flex justify-between items-center border-b mt-5 px-5 cursor-pointer' onClick={Change}>
                            <h2 className="bg-gray-700  py-3" >Marca</h2>
                            <img className={`bg-gray-700 w-5 h-5 ${open ? "rotate-180" : ""}`} src={flechatop} alt="Ver Opciones" />
                        </div>
                        {open? 
                        <div className= "bg-gray-700 ">
                            <div className='searchbrand bg-gray-700 px-5'>
                                <input className="bg-gray-700 border w-full mt-3 px-3 py-2" type="text" placeholder='Buscar'/>
                            </div>
                            
                            <div className= {`optionstwo flex gap-4 flex-col mt-3 bg-gray-700 px-5 py-3`}>   
                                <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" for="checkbox2016"><input className="items-center mr-2" type="checkbox" id='checkbox2016' />Audi</label>
                                <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2017"><input className="items-center mr-2" type="checkbox" id='checkbox2017' />BMW</label>
                                <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2018"><input className="items-center mr-2" type="checkbox" id='checkbox2018' />Chevrolet</label>
                                <label className="bg-gray-700 hover:bg-slate-400 hover:text-blue-500 cursor-pointer transition-all px-5 rounded-sm" htmlFor="checkbox2019"><input className="items-center mr-2" type="checkbox" id='checkbox2019' />Ford</label>
                                <a className="bg-gray-700 text-blue-500" href="#">Ver Más</a>
                            </div>
                        </div> : ""}

                    </div>
                    <section className='gridpart bg-gray-800 grid grid-cols-2 items-center m-auto md:grid md:grid-cols-1 gap-4'>
                        <div className='thirdcontainer bg-gray-700 md:text-2xl text-[1.3rem] md:mt-5 mt-5'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2 cursor-pointer'>
                                <h2 className="bg-gray-700 py-3">Modelo</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className='fourthcontainer bg-gray-700 md:text-2xl cursor-pointer text-[1.3rem] md:mt-5 mt-5'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2  '>
                                <h2 className="bg-gray-700 py-3">Estado</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className='fifthcontainer bg-gray-700 md:text-2xl cursor-pointer text-[1.3rem] mt-5'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-gray-700 py-3">Transmisión</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className='fifthcontainer bg-gray-700 md:text-2xl cursor-pointer text-[1rem] mt-5'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-gray-700 py-3">Tipo de Combustible</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className='fifthcontainer bg-gray-700 md:text-2xl mt-10 md:mt-5 cursor-pointer text-[1.3rem]'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2 '>
                                <h2 className="bg-gray-700 py-3">Drivetrain</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>
                        <div className='fifthcontainer bg-gray-700 md:text-2xl md:mt-5 mt-10 cursor-pointer text-[1rem]'>
                            <div className='firstfilter bg-gray-700 flex justify-between border-b items-center md:px-5 px-2  '>
                                <h2 className="bg-gray-700 py-3">Capacidad de Pasajeros</h2>
                                <img className="flechas bg-gray-700 w-5 h-5" src={flechatop} alt="Ver Opciones" />
                            </div>
                        </div>

                    </section>
                    <div className='pricepart mt-10 bg-transparent'>
                        <p className="bg-transparent text-2xl">Rango de Precio</p>
                        <span className="bg-transparent text-blue-500 text-3xl">$.0 - $3,000,000.00</span>
                        <div className='range relative flex justify-between bg-transparent cursor-pointer'>
                            <div className='ballone w-14 h-14 z-10 rounded-full bg-blue-500'></div>
                            <div className='rangeline absolute bg-gray-700 items-center top-0 bottom-0 h-4 m-auto w-full text-center'></div>
                            <div className='balltwo w-14 h-14 z-10 rounded-full right-0 bg-blue-500'></div>
                        </div>
                        <button className='btnRestart border border-blue-500 mt-4 w-full rounded-sm py-3 text-blue-500 hover:bg-gray-100 transition-all' >Restablecer Filtro</button>
                    </div>
                </div>

                
            </section>
           

        </section>
        <section className='cars xl:max-w-[50rem] mt-10 m-10 '>
                <div className='buscar flex xl:flex xl:justify-between xl:items-center xl:h-16 items-center xl:bg-gray-800 xl:w-full px-5 gap-4 text-2xl py-3 xl:gap-6 md:flex md:gap-4 md:px-4 md:py-3 md:text-2xl md:items-center bg-gray-700'>
                    <img className="xl:w-4 w-7 h-7 bg-gray-700 xl:h-4 xl:ml-4 xl:bg-transparent md:w-4 md:h-4 md:bg-transparent" src={Lupa} alt="" />
                    <input className="xl:text-3xl w-full bg-gray-700 xl:w-full  xl:bg-transparent xl:focus:outline-none md:bg-transparent" type="text" placeholder='Buscar' />
                </div>
            <div className='filter xl:mx-auto xl:mt-8 xl:mb-8 mt-5 mb-5'>
                <div className='results flex justify-between w-full xl:flex xl:justify-between items-center gap-2 lg:justify-between xl:items-center xl:gap-6 md:w-full xl:relative md:flex md:justify-between md:relative md:gap-1 md:items-center md:mt-3 md:mb-3'>
                    <div>
                        <h2 className=" xl:top-0 xl:left-0 mr-10 xl:mt-2 xl:mb-2 xl:ml-2 xl:mr-2 xl:text-3xl xl:text-center md:left-0 md:text-[1rem] md:mr-1">12 Resultados</h2>
               
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="xl:w-64 cursor-pointer md:px-2 xl:bg-gray-800 w-40 xl:border-none md:w-[8rem] bg-gray-700 md:py-1" name="Orden" id="Orden">
                            <option value="">Ordenar Por</option>
                        </select>
                        <img className="cursor-pointer w-6 h-6" src={list} alt="Ver" />
                        <img className="cursor-pointer w-6 h-6" src={listwo} alt="Ver" />
                    </div>
                    
                </div>
            </div>
           
            <div data-aos="fade-up" className='subcontainer  border border-solid px-3 py-1 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3' >
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-full lg:h-full xl:w-full xl:h-full xl:bg-gray-200 hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={Jeep} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Usado</button>
                    <h2 className="text-[2rem] md:text-[1.2rem]" >Jeep Wrangler Unlimited Islander</h2>
                    <span className="text-blue-500 text-[1.5rem]">$50,370</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2021</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Hibrido</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>5</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>

            <div data-aos="zoom-out-left" className='subcontainer border border-solid px-3 py-3 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3'>
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-[20rem] lg:h-full xl:w-[21.3rem] hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={Audi} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Usado</button>
                    <h2 className="text-[2rem] md:text-[1.2rem]" >Audi e-tron Premium</h2>
                    <span className="text-blue-500 text-[1.5rem]">$82,089</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2021</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Eléctrico</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>5</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>

            <div data-aos="zoom-out-down" className='subcontainer border border-solid px-3 py-3 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3'>
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-[20rem] lg:h-full xl:w-[21.3rem] hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={LandRover} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Usado</button>
                    <h2 className="text-[2rem] md:text-[1.1rem]" >Land Rover Range Rover Velar R-Dynamic S</h2>
                    <span className="text-blue-500 text-[1.5rem]">$75,790</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2021</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Gasolina</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>5</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>


            <div data-aos="zoom-out-left" className='subcontainer border border-solid px-3 py-3 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3'>
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-[20rem] lg:h-full xl:w-[21.3rem] hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={Toyota} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Usado</button>
                    <h2 className="text-[2rem] md:text-[1.2rem]" >Toyota Mirai</h2>
                    <span className="text-blue-500 text-[1.5rem]">$71,415</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2021</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Eléctrico</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>5</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>


            <div data-aos="fade-up" className='subcontainer border border-solid px-3 py-3 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3'>
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-[20rem] lg:h-full xl:w-[21.3rem] hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={Kia} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                    <h2 className="text-[2rem] md:text-[1.2rem]" >MINI Clubman Cooper S</h2>
                    <span className="text-blue-500 text-[1.5rem]">$29,791</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2021</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Gasolina</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>7</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>


            <div data-aos="fade-up-right" className='subcontainer border border-solid px-3 py-3 border-gray-700 lg:max-w-9xl xl:px-3 lg:flex relative xl:items-center gap-4 mb-20 xl:relative overflow-hidden md:py-3 md:px-3'>
                <div className='imgcars overflow-hidden'>
                    <img className='car cartwo image w-full h-full lg:w-[20rem] lg:h-full xl:w-[21.3rem] hover:scale-150 transition-all ease-linear cursor-pointer md:w-full' src={coupe} alt="Tesla Car" />
                </div>
                <div className='carinformation lg:w-96 md:mt-3 mt-5 xl:mt-0'>
                    <button className="border border-blue-500 text-blue-500 px-5" >Nuevo</button>
                    <h2 className="text-[2rem]" >MINI Clubman Cooper S</h2>
                    <span className="text-blue-500 text-[1.5rem]">$35,850</span>
                    <h4>SFM, DO</h4>
                    <div className="infcar lg:flex  md:grid md:grid-cols-2 grid grid-cols-2 justify-between gap-4">
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Calender} alt="Calendario" />
                            <h5>2022</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex md:w-[10rem] items-center flex'>
                            <img className="w-5 h-5" src={volante} alt="Volante" />
                            <h5 className="bg-transparent">Tracción Trasera</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={Combustible} alt="Combustible" />
                            <h5>Gasolina</h5>
                        </div>
                        <div className='infos lg:flex gap-1 md:flex items-center flex'>
                            <img className="w-5 h-5" src={usuarios} alt="Usuarios" />
                            <h5>5</h5>
                        </div>
                    </div>

                    <hr/>
                    <section className='secondsection lg:flex md:flex flex'>
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={estrella} alt="Estrellas" />
                        <img src={emptystar} alt="Estrellas" />
                        <h4>(12 Reviews)</h4>
                    </section>
                </div>
            </div>
            <div className='enlacescars lg:flex justify-center gap-5 md:flex flex items-center'>
                <a href="#"><img className='antes -rotate-90 border border-blue-500 px-2 md:w-[5rem] md:h-[3rem]' src={flechatop} alt="Anterior" /></a>
                <a href="#"><button className='enlaceone border bg-blue-500 border-blue-500 w-[4rem] h-[3rem] py-3'>1</button></a>
                <a href="#"><button className='enlacetwo border border-blue-500 w-[4rem] py-3'>2</button></a>
                <a href="#"><img className='despues rotate-90 border border-blue-500 px-2 md:w-[5rem] md:h-[3rem]' src={flechatop} alt="Siguiente" /></a>
            </div>
        </section>

    </div>
  )
}

export default Principal