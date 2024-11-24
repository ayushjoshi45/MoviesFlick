import loader from "/Loader02.avif";

const Loader=()=>{
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            <img className="h-[50%] object-cover" src={loader} alt="" />
        </div>
    )
}
export default Loader