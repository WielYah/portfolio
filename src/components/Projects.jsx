const project = () => {

    const boxs = () => {
        let box = [];
        for (let i = 0; i < 9; i++) {
            box.push(
                <div className="card m-3" >
                    <div className="contentimg">
                    </div>
                        <img src="https://res.cloudinary.com/dfsflp11q/image/upload/v1666196586/icons/project1_juuxck.png" className="card-img" alt="..."/>
                    
                <div className="card-body">
                    <h3 className="header_cards text-center">GHO Computer</h3>
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
        <div className="proyects">
            <div className="container pt-5 pb-5">
            <h2 className="text-center m-auto titulo">Todos mis project</h2>
            <div class="underline"></div>

            <div className="projects row">
                {boxs()}        
            </div>
        </div>
        </div>
        
    );
}
 
export default project;