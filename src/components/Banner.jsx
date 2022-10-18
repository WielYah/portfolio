import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
    return (
        <div className="banner">
            <section className="bannersection" >
                <div className="container pt-5" >
                    <div className="row">
                        <div className="col align-self-center">
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1 className="present">Hi! I'm Judy </h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus ut accusamus quos illo mollitia vel tempora ipsam alias ab quia suscipit, eaque error accusantium excepturi aut soluta et ratione dicta?</p>
                            <button className="btn" onClick={()=>console.log("Contactame")}>Contact as</button>
                        
                        </div>
                        <div className="col">
                        <img  src={headerImg} alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </div>

      );
}
 
export default Banner;