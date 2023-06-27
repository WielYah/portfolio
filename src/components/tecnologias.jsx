const Tecnologias = () => {

    const tecnologias = [
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/js_i76srp.png",
            alt: "JavaScript"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/nodejs_emipcf.jpg",
            alt: "Node.js"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/mysql_lfkq4g.png",
            alt: "MySQL"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/postgre_hilucb.png",
            alt: "PostgreSQL"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/html_nedseq.png",
            alt: "HTML"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/Bootstrap_iotlgx.png",
            alt: "Bootstrap"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/css_mhxdfl.png",
            alt: "CSS"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196518/icons/react_wr7glr.png",
            alt: "React"
        },
        {
            src: "https://res.cloudinary.com/dfsflp11q/image/upload/v1666196519/icons/git_ehln1z.png",
            alt: "Git"
        }
    ];




    return (
        <div className="dark:bg-[#1B1B1B] dark:text-white tecnologias m-auto" id="tecnologias">
            <div className="container pt-5 pb-5">
                <div className="w-100 m-auto">
                  <h2 className="text-center text-3xl text-[#E0234E] m-auto titulo font-[Roboto] font-bold">Tecnologias</h2>
                    <div className="underline bg-[#E0234E] "></div> 
                    <div className="tecn m-auto grid grid-cols-3  md:grid-cols-5 lg:grid-cols-9 place-items-center gap-4 pt-5 pb-5">
                        {tecnologias.map((tecnologia, index) => (
                            <div className="col-span-1" key={index}>
                                <div>
                                    <img src={tecnologia.src} className="card-img-top h-14" alt={tecnologia.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Tecnologias;