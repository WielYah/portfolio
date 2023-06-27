import headerImg from "../assets/img/header-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";



const Banner = () => {
  return (

    <div className="vh-100  mx-auto w-100 mt-10 dark:bg-[#1B1B1B] text-[#1B1B1B] dark:text-white">
      <section className="background-radial-gradient text-center lg:text-left h-100">
        {/*   <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/standard/nature/071.jpg')] h-[100%]"> */}
        <div className=" top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden  bg-fixed">
          <div className=" grid grid-cols-1 h-full items-center justify-center place-items-center ">
            <div className="max-w-[800px] px-6 py-6 text-center text-[#1B1B1B] dark:text-white md:py-0 md:px-12">
              <p className="text-[#E0234E]">Hola, soy Yahies</p>
              <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-5xl xl:text-6xl">
                Desarrollador <span> BACKEND</span>
              </h2>
              <p className="text-lg">
                Desarrollador de software Backend,
                contento y emocionado de mi carrera, colaborativo dentro
                de un equipo productivo, dispuesto y capaz de ejercer soluciones
                innovadoras y optimizadas, con experiencia del desarrollo y
                mantenimiento de sistemas
              </p>
              <div className="mt-4">
                <button type="button" className=" text-2xl font-bold text-white bg-[#E0234E] hover:bg-[#E0234E]focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg px-4 py-2 text-center mr-3 md:mr-0 ">Contactame</button>
              
              </div>
            </div>

          </div>
        </div>
        {/* </div> */}
      </section>

    </div>

    /*  <div className="dark:bg-slate-900 dark:text-white" id="present">
         <section className="bannersection" >
             <div className="container pt-5" >
                 <div className="row contentacercaimg">
                     <div className="col-12 col-sm-7 col-md align-self-center">
                         <span className="tagline">Bienvenido a mi Portafolio</span>
                         <h1 className="present" >Hola! Soy Wiel </h1>
                         <p className="" >Desarrollador de software full stack, 
                             contento y emocionado de mi carrera, colaborativo dentro 
                             de un equipo productivo, dispuesto y capaz de ejercer soluciones
                              innovadoras y optimizadas, con experiencia del desarrollo y 
                              mantenimiento de sistemas</p>
                         <div className="social-icon col">
                       <a href=""><img src={navIcon1} alt="" /> </a>
                       <a href=""><img src={navIcon2} alt="" /> </a>
                       <a href="https://www.instagram.com/7wiel/" target="_blank"><img src={navIcon3} alt="" /> </a>

                   </div>                        
                     </div>
                     <div className="col-12 col-sm-5 col-md">
                     <img className="imgmain" src="https://res.cloudinary.com/dq3fragzr/image/upload/v1683849358/GOHComputer/Productos/asus_jwfv3j.jpg" alt="" />

                     </div>
                 </div>
             </div>
         </section>
     </div> */

  );
}

export default Banner;