import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
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
          <div className="row w-100"> 
            <div className="col-5 col_logo"> 
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="col-7 col_nav row">
                <div className="collapse navbar-collapse col-5" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                      <li className="nav-item">
                          <Link  className={activeLink==="home"?"nav-link active":"nav-link"} onClick={ ()=>UpdateActiveLink("home")} >Home</Link> 
                      </li>
                      <li className="nav-item">
                          <Link  className={activeLink==="sobremi"?"nav-link active":"nav-link"} onClick={ ()=>UpdateActiveLink("sobremi")} >Sobre mi</Link> 
                      </li>
                      <li className="nav-item">
                          <Link  className={activeLink==="tecnologias"?"nav-link active":"nav-link"} onClick={ ()=>UpdateActiveLink("tecnologias")} >Tecnologias</Link> 
                      </li>
                    
                    </ul>
                  
                </div>
                <div className="text-end col-7 row">
                    
                      <div className="social-icon col">
                          <a href=""><img src={navIcon1} alt="" /> </a>
                          <a href=""><img src={navIcon2} alt="" /> </a>
                          <a href=""><img src={navIcon3} alt="" /> </a>

                      </div>
                      <div className="col">
                          <button className="btn" type="submit">Contactame</button>
                      </div>

                    
                </div>
            </div>
          </div>
        </div>
      </nav>
      );
}
 
export default Header;