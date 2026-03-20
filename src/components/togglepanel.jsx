
const TogglePanel = ({ active, setActive }) => {
    return(
        <div className="absolute w-full h-full">
            <div className={`absolute left-0 w-1/2 h-full flex flex-col justify-center items-center text-white
                bg-gradient-to-r from bg-red-500  to-amber-400 rounded-r-[38%] cursor-default 
                transition-all duration-700 
                ${active ? "-translate-x-full" : "translate-x-0"}`}>
                
                <h1 className="text-3xl font-pacifico mb-4 cursor-default">
                Hello, Welcome<i class="fa-solid fa-door-open"></i>
                </h1>
                <p className="text-center font-Gummy mb-4">
                    Already have an account?
                </p>

                <button onClick={() => setActive(true)} className=" border border-white hover:bg-transparent hover:scale-105 transtion duration-100 py-2 px-6 w-60 rounded-full cursor-pointer"> 
                    Register
                </button>
            </div>

            <div className={`absolute right-0 w-1/2 h-full flex flex-col justify-center items-center text-white
                bg-gradient-to-l from bg-amber-400  to-red-500 rounded-l-[38%] cursor-default 
                transition-all duration-700 
                ${active ? "translate-x-0" : "translate-x-full"}`}>
                
                <h1 className="text-3xl font-pacifico mb-4 cursor-default">
                Welcome Back<i class="fa-jelly fa-regular fa-heart"></i>
                </h1>
                <p className="text-center font-Gummy mb-4">
                    Already have an account?
                </p>

                <button onClick={() => setActive(false)} className=" border border-white hover:bg-transparent hover:scale-105 transtion duration-100 py-2 px-6 w-60 rounded-full cursor-pointer"> 
                    Log in
                </button>
            </div>

        </div>   
    )  

}
export default TogglePanel