const Tecnologias = () => {
    return (
        <div className="tecnologias">
            <div className="container pt-5 pb-5">
                <h2 className="text-center m-auto titulo" >Tecnologias</h2>
                <div class="underline"></div>
                <div className="tecn m-auto row pt-5 pb-5">

                    <div className="card col-2 ">
                        <div>
                            <img src="/js.png" className="card-img-top" alt="..." />
                        </div>

                        <div className="card-body">
                            <p className="card-text">JS</p>
                        </div>
                    </div>

                    <div className="card col-2 ">
                        <div>
                            <img src="/nodejs.jpg" className="card-img-top" alt="..." />

                        </div>
                        <div className="card-body">
                            <p className="card-text">NodeJS y express</p>
                        </div>
                    </div>

                    <div className="card col-2 ">
                        <div>
                            <img src="/mysql.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Mysql</p>
                        </div>
                    </div>

                    <div className="card col-2 ">
                        <div>
                            <img src="/postgre.png" className="card-img-top" alt="..." />

                        </div>
                        <div className="card-body">
                            <p className="card-text">Postgre</p>
                        </div>
                    </div>

                    <div className="card col-2 ">
                        <div>
                            <img src="/html.png" className="card-img-top" alt="..." />

                        </div>
                        <div className="card-body">
                            <p className="card-text">HTML</p>
                        </div>
                    </div>
                    <div className="card col-2 ">
                        <div>
                            <img src="/bootstrap.png" className="card-img-top" alt="..." />

                        </div>
                        <div className="card-body">
                            <p className="card-text">Bootstrap 5</p>
                        </div>
                    </div>


                    <div className="card col-1 ">
                        <div>

                            <img src="/css.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">Css</p>
                        </div>
                    </div>
                    <div className="card col-1 ">
                        <div>

                            <img src="/react.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">REACT</p>
                        </div>
                    </div>
                    <div className="card col-1 ">
                        <div>

                            <img src="/git.png" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <p className="card-text">GIT</p>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default Tecnologias;