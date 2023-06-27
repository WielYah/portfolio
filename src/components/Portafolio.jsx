import Banner from "./Banner";
import Brands from "./brands";
import Contacto from "./Contacto";
import Footer from "./Footer";
import Header from "./header";
import Projects from "./Projects";
import Tecnologias from "./tecnologias";

const Portafolio = () => {
    return (  
        <>
        <Header/>
        <Banner/>
        <Tecnologias/>
        <Projects/>
        {/* <Brands></Brands> */}
        <Contacto/>
        <Footer/>
        </>
    );
}
 
export default Portafolio;