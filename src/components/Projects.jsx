const project = () => {

    const projects=[
        {
            id:1,
            url:"https://super-llama-c4f5e7.netlify.app/#/gohcomputer",
            img_url:"https://res.cloudinary.com/dfsflp11q/image/upload/v1666493469/proyects/project1_ztkwid.png",
            titulo:"E-Comerce",
            descripcion:"Sistema de ventas con dashboard y sitio web (Ecommerce)",
            tecnologias:["https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/nodejs_emipcf.jpg",
            "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/html_nedseq.png",
            "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/Bootstrap_iotlgx.png",
            "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/postgre_hilucb.png",
            "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/react_wr7glr.png",
            "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/Bootstrap_iotlgx.png"]

        },  
        {
            id:2,
            url:"https://sistprestamos.herokuapp.com/",
            img_url:"https://res.cloudinary.com/dfsflp11q/image/upload/v1666494694/proyects/proyect2_mtcttw.png",
            titulo:"Sistema de Prestamos",
            descripcion:"sistema para gestionar prestamos",
            tecnologias:[
                "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/html_nedseq.png",
                "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/nodejs_emipcf.jpg",
                "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/Bootstrap_iotlgx.png",
                "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/mysql_lfkq4g.png"
            ]
        }
    ]

    const tec=(position)=>{
        let box = [];
        position.tecnologias.forEach(element => {
            box.push(
                <div key={Math.random()*100} className="col">
                    <div  className="box">
                    
                        <img src={element} alt="" />
                    </div>
                </div>)

        })

        return box
    }

    const boxs = (tec) => {
        let box = [];
        for (let i = 0; i < projects.length; i++) {
            box.push(
                <div key={Math.random()*100} className="card m-3"  >

                        <div className="contentimg">
                        </div>
                    <a href={projects[i].url}  target="_blank" style={{zIndex:"2", maxWidth: "250px", width: "100%", margin: "auto", marginTop: "15px"}}>
                            <img src={projects[i].img_url} className="card-img" alt="..."/>
                    </a>
                    
                <div style={{height:"50%"}}>
                    <h3 className="header_cards text-center">{projects[i].titulo}</h3>
                    <p className="card-text">{projects[i].descripcion}</p>
                    <div className="row project">
                   
                        {tec(projects[i])}                         
                        
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
                {boxs(tec)}        
            </div>
        </div>
        </div>
        
    );
}
 
export default project;