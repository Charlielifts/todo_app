
const TogglePanel = ({ active, setActive }) => {
    return(
        
        <div className="absolute w-full h-full overflow-hidden">
                          
            <div
            className={`absolute top-0 left-[-250%] w-[300%] h-full 
            bg-gradient-to-r from-red-500 to-amber-400
            rounded-[150px]
            z-30 
            pointer-events-none
            transition-all duration-1000 ease-in-out delay-100
             ${active ? "left-[50%]" : "left-[-250%]"}`}
            />
            


            <div className={`absolute left-0 w-1/2 h-full flex flex-col justify-center items-center text-white z-30
                bg-gradient-to-r from bg-red-500  to-amber-400 rounded-r-[150px] cursor-default 
                transition-all duration-700 delay-200
                ${active ? "-translate-x-full" : "translate-x-0"}`}>
                
                <h1 className={`text-3xl font-pacifico mb-4 cursor-default 
                transition-all duration-700 delay-300
                ${active ? "-translate-x-full" : "translate-x-0"}`}>
                Hello, Welcome<i class="fa-solid fa-door-open"></i>
                </h1>
                <p className={`text-center font-Gummy mb-4 
                transition-all duration-700 delay-200
                ${active ? "-translate-x-full" : "translate-x-0"}`}>
                    Already have an account?
                </p>

                <button onClick={() => setActive(true)} className={`border border-white hover:bg-transparent hover:scale-105 transtion duration-100 py-2 px-6 w-60 rounded-full cursor-pointer
                    transition-all duration-700 delay-150
                ${active ? "-translate-x-full" : "translate-x-0"}`}>
                    Register
                </button>
            </div>

            <div className={`absolute right-0 w-1/2 h-full flex flex-col justify-center items-center text-white z-30
                bg-gradient-to-l from bg-amber-400  to-red-500 rounded-l-[150px] cursor-default 
                transition-all duration-1000 ease-in-out delay-200
             ${active ? "right-[0%]" : "right-[-100%]"}`}>
                
                <h1 className={`text-3xl font-pacifico mb-4 cursor-default
                transition-all duration-700 delay-300
                ${active ? "translate-x-0" : "translate-x-full"}`}>
                Welcome Back<i class="fa-jelly fa-regular fa-heart"></i>
                </h1>
                <p className={`text-center font-Gummy mb-4
                transition-all duration-700 delay-250
                ${active ? "translate-x-0" : "translate-x-full"}`}>
                    Already have an account?
                </p>

                <button onClick={() => setActive(false)} className={`border border-white hover:bg-transparent hover:scale-105 transtion duration-100 py-2 px-6 w-60 rounded-full cursor-pointer
                    transition-all duration-700 delay-200
                ${active ? "translate-x-0" : "translate-x-full"}`}>
                    Log in
                </button>
            </div>

        </div>   
    )  

}
export default TogglePanel