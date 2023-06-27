import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [toggle, settoggle] = useState(false);

  //const [theme, settheme] = useState("system");

  const HandleToogle=(e)=>{
    console.log(toggle)
 
     const navLinks = document.querySelector('#navbar-sticky')
 
       if(!toggle)return  settoggle(true), navLinks.style.left="0%",  document.querySelector('.ulnav').classList.add("bg-[#161619]"), document.getElementById('Header').classList.remove("bg-none")

         return settoggle(false), navLinks.style.left="-180%",document.querySelector('.ulnav').classList.remove("bg-[#161619]")       
   }

  const toogleDark = (e) => {
    console.log(activeLink)
    let res = document.documentElement.classList.toggle('dark')
    res ? localStorage.theme = 'dark' : localStorage.theme = 'light'
  }
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        return setScrolled(true)
      } else {
        return setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)

  }, []);

  const UpdateActiveLink = (link) => {
    setActiveLink(link);
  }
  
  return (
    <nav id="Header"  className="h-[60px] flex bg-none border-none fixed w-full z-20 top-0 left-0 border-b border-gray-900 font-[Roboto] bg-[#161619] text-white">
    <div className="max-w-screen-xl align-self-center  grid w-100  grid-cols-8 place-items-center mx-auto p-4">
    {/* <a className="" href="#/bold"><img src="https://res.cloudinary.com/dq3fragzr/image/upload/v1682735524/BOLDSTRATEGY/Static/B_rdfdaw.png" width="30px" className="" alt="" /></a>  */}
    <div className="transition-all absolute md:static !top-[91%] left-[-180%] col-start-3 col-end-7 w-100 " id="navbar-sticky">
      <ul className="font-bold ulnav  flex flex-col place-items-center  text-gray-800 md:p-0  rounded-lg md:!bg-none md:flex-row md:space-x-8 md:mt-0 md:border-0e">
        <li>
          <a onClick={() => UpdateActiveLink("home")}  href="#" className="block py-2 pl-3 pr-4 !text-[#E0234E] bg-[#1B1B1B] rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a onClick={() => UpdateActiveLink("tecnologias")} href="#" className="block py-2 pl-3 pr-4 text-white  hover:!bg-gray-900 rounded  ">About</a>
        </li>
        <li>
          <a onClick={() => UpdateActiveLink("sobremi")} href="#" className="block py-2 pl-3 pr-4 text-white   hover:!bg-gray-900 rounded">Services</a>
        </li>
      
        <li>
        <button onClick={(e) => toogleDark(e)} className="text-white">Light/dark</button>

        </li>
          
      </ul>
    </div> 

    <div className="flex content-center max-sm:col-start-6 max-sm:col-end-9 col-start-7 col-end-9 items-center">
  <div className="grid grid-cols-3 gap-4">
    <a href=""><img src={navIcon1} alt="" /></a>
    <a href=""><img src={navIcon2} alt="" /></a>
    <a href="https://www.instagram.com/7wiel/" target="_blank"><img src={navIcon3} alt="" /></a>
  </div>
  <button onClick={(e) => HandleToogle()} data-collapse-toggle="navbar-sticky" type="button" className=" ml-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
    </svg>
  </button>
</div>

  
                       
                   
      

   {/*  <div className=" flex content-center max-sm:col-start-6 max-sm:col-end-9  col-start-7 col-end-9">
        <button type="button" className=" font-bold text-gray-800 bg-white hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">Contactanos</button>
        <button onClick={(e)=>HandleToogle()} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
      
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
        </button>
    </div> */}
    </div>
  </nav> 





/* 
    <nav className={`${scrolled ? 'scrolled' : ''} dark:bg-slate-950 dark:text-white`}>

    <div className="container">
      <div className="flex justify-between items-center">
        <a className="text-xl font-bold" href="#">Mi Portafolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex-grow" id="">
          <ul className="flex space-x-4">
            <li>
              <a className={activeLink === "home" ? "nav-link active" : "nav-link"} href="#present" onClick={() => UpdateActiveLink("home")} >Sobremi</a>
            </li>
            <li>
              <a className={activeLink === "tecnologias" ? "nav-link active" : "nav-link"} href="#tecnologias" onClick={() => UpdateActiveLink("tecnologias")} >Tecnologias</a>
            </li>
            <li>
              <a className={activeLink === "sobremi" ? "nav-link active" : "nav-link"} href="#projects" onClick={() => UpdateActiveLink("sobremi")} >Proyectos</a>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={(e) => toogleDark(e)} className="text-white">Light/dark</button>
        </div>
        <div>
          <a className="btn btn-contacto" href="#contacto"> Contactame</a>
        </div>
      </div>
    </div>
  </nav> */
  
  );
}

export default Header;