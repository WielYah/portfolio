import navIcon1 from "../assets/img/inst.svg";
import navIcon2 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/face.svg";
const Contacto = () => {
    return (  
        <div className="contacto">

            <div className="container pb-5 pt-5">
                <div className="contact">
                    <h2 className="text-center m-auto  titulo">Contactame</h2>
                    <div class="underline mb-5"></div>

                    <h3 className="text-center m-auto ">WielDev@gmail.com</h3>
                    <div className="contact_icons text-center pt-3">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="" /> </a>
                            <a href=""><img src={navIcon2} alt="" /> </a>
                            <a href=""><img src={navIcon3} alt="" /> </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
}
 
export default Contacto;