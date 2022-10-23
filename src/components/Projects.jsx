const project = () => {

    const projects=[
        {
            id:1,
            url:"https://prismatic-paletas-30574d.netlify.app/#/gohcomputer",
            img_url:"https://res.cloudinary.com/dfsflp11q/image/upload/v1666493469/proyects/project1_ztkwid.png",
            titulo:"E-Comerce",
            descripcion:"",
            tecnologias:""

        },  
        {
            id:2,
            url:"https://sistprestamos.herokuapp.com/",
            img_url:"https://res.cloudinary.com/dfsflp11q/image/upload/v1666494694/proyects/proyect2_mtcttw.png",
            titulo:"Sistema de Prestamos",
            descripcion:"",
            tecnologias:""
        }
    ]

    const boxs = () => {
        let box = [];
        for (let i = 0; i < projects.length; i++) {
            box.push(
                <div className="card m-3"  >

                        <div className="contentimg">
                        </div>
                    <a href={projects[i].url}  target="_blank" style={{zIndex:"2", maxWidth: "250px", width: "100%", margin: "auto", marginTop: "15px"}}>
                            <img src={projects[i].img_url} className="card-img" alt="..."/>
                    </a>
                    
                <div style={{height:"50%"}}>
                    <h3 className="header_cards text-center">{projects[i].titulo}</h3>
                    <p className="card-text">Sistema de ventas para administrar y sitio web para el usuario final</p>
                    <div className="row project">
                        <div className="col">
                            <div className="box">
                                <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/nodejs_emipcf.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col">
                           <div className="box">
                                <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/html_nedseq.png" alt="" />
                           </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/Bootstrap_iotlgx.png" alt="" />
                           </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/postgre_hilucb.png" alt="" />
                           </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
            )

        }
        return box
    }

    return (  
        <div className="proyects" id="projects">
            <div className="container pt-5 pb-5">
            <h2 className="text-center m-auto titulo">Todos mis project</h2>
            <div className="underline"></div>

            <div className="projects row">
                {boxs()}        
            </div>
        </div>
        </div>
        
    );
}
 
export default project;