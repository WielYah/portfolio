import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    useEffect(() => {
        const onScroll=()=>{
          if(window.scrollY>50){
            return setScrolled(true)
          }else{
            return setScrolled(false)
          }
        }
  
        window.addEventListener("scroll",onScroll)
  
        return ()=>window.removeEventListener("scroll",onScroll)
  
    }, []);
    const UpdateActiveLink=(link)=>{
        setActiveLink(link);
      }
    return (
        <nav className= {scrolled?"scrolled navbar navbar-expand-lg bg-light":"navbar navbar-expand-lg bg-light"}>
        <div className="container">
          <div className="row w-100 m-auto"> 
            <div className="col-12 col-lg p-0 col-xl col_logo row"> 
                <a className="navbar-brand col-10" href="#">Mi Portafolio</a>
                <button className="navbar-toggler col p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-12 p-0 col-lg-5 col-xl-5 col_nav row">
                <div className="collapse navbar-collapse p-0 row" id="navbarSupportedContent">
                    <div className="col-lg">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a  className={activeLink==="home"?"nav-link active":"nav-link"} href="#present" onClick={ ()=>UpdateActiveLink("home")} >Sobremi</a> 
                          </li>
                          <li className="nav-item">
                              <a  className={activeLink==="tecnologias"?"nav-link active":"nav-link"} href="#tecnologias" onClick={ ()=>UpdateActiveLink("tecnologias")} >Tecnologias</a> 
                          </li>
                          <li className="nav-item">
                              <a  className={activeLink==="sobremi"?"nav-link active":"nav-link"} href="#projects" onClick={ ()=>UpdateActiveLink("sobremi")} >Proyectos</a> 
                          </li>
                        
                        
                        </ul>

                    </div>
                  
                    <div className="  col-lg-3">
                      <div className=" text-center">
                          <a className="btn btn-contacto" href="#contacto"> Contactame</a>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </nav>
      );
}
 
export default Header;