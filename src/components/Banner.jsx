import headerImg from "../assets/img/header-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
const Banner = () => {
    return (
        <div className="banner" id="present">
            <section className="bannersection" >
                <div className="container pt-5" >
                    <div className="row contentacercaimg">
                        <div className="col-12 col-sm-7 col-md align-self-center">
                            <span className="tagline">Bienvenido a mi Portafolio</span>
                            <h1 className="present" >Hola! Soy Wiel </h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ut accusamus quos illo mollitia vel tempora ipsam alias ab quia suscipit, eaque error accusantium excepturi aut soluta et ratione dicta?</p>
                            <div className="social-icon col">
                          <a href=""><img src={navIcon1} alt="" /> </a>
                          <a href=""><img src={navIcon2} alt="" /> </a>
                          <a href=""><img src={navIcon3} alt="" /> </a>

                      </div>                        
                        </div>
                        <div className="col-12 col-sm-5 col-md">
                        <img className="imgmain" src={headerImg} alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </div>

      );
}
 
export default Banner;