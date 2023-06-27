const project = () => {

    const projects = [
        {
            id: 1,
            url: "https://gohcomputer.netlify.app/#/gohcomputer",
            img_url: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666493469/proyects/project1_ztkwid.png",
            titulo: "E-Comerce",
            descripcion: "Sistema de ventas con dashboard y sitio web (Ecommerce)",
            tecnologias: [
                "https://res.cloudinary.com/dq3fragzr/image/upload/v1687887652/portfolio/nestjs_logo_icon_168087_1_v2ffob.png",
                "https://res.cloudinary.com/dq3fragzr/image/upload/v1687887652/portfolio/icons8-react_1_d0vqui.png",
                "https://res.cloudinary.com/dq3fragzr/image/upload/v1687887652/portfolio/icons8-mongodb_1_lr7ohv.png",
            ]

        },
        {
            id: 2,
            url: "https://yahdev7.github.io/landigpageBold/",
            img_url: "https://res.cloudinary.com/dq3fragzr/image/upload/v1687889972/portfolio/boldweb_hl26ss.png",
            titulo: "Sistema de Prestamos",
            descripcion: "sistema para gestionar prestamos",
            tecnologias: [
                "https://res.cloudinary.com/dq3fragzr/image/upload/v1687887652/portfolio/icons8-react_1_d0vqui.png",

            ]
        }
    ]

    const tec = (position) => {
        let box = [];
        position.tecnologias.forEach(element => {
            box.push(
                <div key={Math.random() * 100} className="">
                    <div className="">

                        <img className="w-20 pr-5" src={element} alt="" />
                    </div>
                </div>)

        })

        return box
    }

    return (
        <div className="dark:bg-[#1B1B1B] dark:text-white p-5 " id="projects">
            <div className="container">
                <h2 className="text-center text-3xl text-[#E0234E] m-auto titulo font-[Roboto] font-bold">Todos mis proyectos</h2>

                <div className="underline bg-[#E0234E] mb-5"></div>


                <div className="prooo">

                    {
                        projects.map((el) =>
                            <div key={Math.random() * 100} className="shadow-md rounded-xl"  >
                                <a href={el.url} target="_blank" style={{ zIndex: "2", maxWidth: "250px", width: "100%", margin: "auto", marginTop: "15px" }}>
                                    <img src={el.img_url} className="!rounded-s-xl" alt="..." />
                                </a>
                                <div className=" dark:bg-[#161619] p-4 rounded-e-xl">
                                    <h3 className=" text-center !text-6x1 font-[Roboto] font-bold pb-3">{el.titulo}</h3>
                                    <p className="pb-4">{el.descripcion}</p>
                                    <div className="flex justify-center">

                                        {tec(el)}
                                    </div>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </div>

    );
}

export default project;