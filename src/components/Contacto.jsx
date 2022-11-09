/* import navIcon1 from "../assets/img/inst.svg";
import navIcon2 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/face.svg"; */
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Contacto = () => {
    return (  
        <div className="contacto" id="contacto">

            <div className="container pb-5 pt-5">
                <div className="contact">
                    <h2 className="text-center m-auto  titulo">Contactame</h2>
                    <div className="underline mb-5"></div>

                    <h3 className="text-center m-auto ">yahiesdev@gmail.com</h3>
                    <div className="contact_icons text-center pt-3">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="" /> </a>
                            <a href=""><img src={navIcon2} alt="" /> </a>
                            <a href="https://www.instagram.com/7wiel/" target="_blank"><img src={navIcon3} alt="" /> </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
}
 
export default Contacto;