/* import navIcon1 from "../assets/img/inst.svg";
import navIcon2 from "../assets/img/linkedin.svg";
import navIcon3 from "../assets/img/face.svg"; */
import { useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const data = {
  name: "",
  email: "",
  subject: "",
  message: "",
}
const Contacto = () => {
  const [formState, setFormState] = useState(data);
  const [loader, setLoader] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true)

    const serviceID = "service_yi99f8n"
    const templateID = "template_2beb3qo"
    /*  let res=await emailjs.send(serviceID,templateID,formState)
      
     if(res.status===200){
        MySwal.fire({
       title: <h2>Se envio con éxito!</h2>,
       icon: 'success'
     })
     setFormState(data)
     setLoader(false) */
  }

  //return alert("Ocurrio un error al anviar el correo");


  return (
    <div className=" dark:bg-[#1B1B1B] dark:text-white " id="conacto" >

    <div className="container pb-5 pt-5">
      <div className="contact">
        <h2 className="text-center text-3xl text-[#E0234E] m-auto titulo font-[Roboto] font-bold">Contactame</h2>

        <div className="underline bg-[#E0234E] mb-5"></div> 


        <h3 className="text-center m-auto text-3xl font-bold">yahiesdev@gmail.com</h3>
        <div className="flex justify-center items-center mt-4">
          <a href=""><img src={navIcon1} alt="" /></a>
          <a href=""><img src={navIcon2} className="ml-2 mr-2" alt="" /></a>
          <a href="https://www.instagram.com/7wiel/" target="_blank"><img src={navIcon3} alt="" /></a>
        </div>

      </div>

    </div>
  </div>

    /*   <section id="contact" className="contact p-32 font-[Roboto] dark:bg-slate-900 dark:text-white">
  
        <div className="mb-5">
          <h2 className="font-[Roboto] font-bold !text-5xl text-center">Contacto</h2>
          <div className="underline-title mb-5"></div>
        </div>
  
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
  
            <div className="col-lg-4 formdatos">
              <div className="info formdatos-content">
  
  
                <div className="email pb-4">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p> yahiesdev@gmail.com</p>
                </div>
  
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Teléfono:</h4>
                  <p>+51 948 423 119</p>
                </div>
              </div>
            </div>
  
            <div className="col-lg-8 mt-5 mt-lg-0 formcont">
              <form onSubmit={handleSubmit} className="php-email-form formcont-content">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className=" bg-gray-700 appearance-none  rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                      id="name"
                      placeholder="Nombre completo"
                      required
                    />
                  </div>
  
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="bg-gray-700 appearance-none  rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
  
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="bg-gray-700 appearance-none px-4  rounded w-full py-2 px4  text-gray-900 leading-tight  focus:outline-none focus:bg-white focus:border-gray-400"
                    id="subject"
                    placeholder="Asunto"
                    required
                  />
                </div>
  
                <div className="form-group mt-3">
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    className="bg-gray-700 appearance-none  rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                    rows="5"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>
  
                <div className="text-center">
                  <button type="submit" className="btn bg-gray-100 font-semibold">Enviar mensaje</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */
  
  );
}

export default Contacto;