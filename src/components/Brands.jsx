import { arrbrands } from "../data.js"

const Brands = () => {
    const brands = () => {
        console.log(arrbrands)
        return <section className=" p-7 relative w-100 mx-auto bg-gray-950">
            <div className="container mx-auto grid grid-cols-5 h-100 justify-center place-items-center  ">
                {arrbrands.map((el) => (
                    <img src={el.img} alt="" key={el.id} />
                ))}
            </div>

        </section>
    }
    return (
        <div>
            {brands()}
        </div>
    );
}

export default Brands;