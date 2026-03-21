
const Loginform = ({active}) => {
  return(

        <div className={`absolute right-0 w-1/2 h-full flex items-center text-center p-15 z-30
        transition-all duration-700 delay-200
        ${active ? "`translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}>
            <form className="w-full">
                    <h1 className={`text-2xl font-Gummy font-bold mb-6 cursor-default
                    transition-all duration-600 opacity-100 delay-200 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                        Log in
                    <i class="fa-solid fa-arrow-right-to-bracket"></i></h1>

                <div className={`relative my-6 transition-all duration-600 opacity-100 delay-150 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                    < input
                    type="text"
                    placeholder="Username"
                    className="w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                    />
                </div>

                <div className={`relative my-6 transition-all duration-600 opacity-100 delay-100 ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`}>
                    <input
                    type="password"
                    placeholder="Password"
                    className="w-full py-3 pl-5 pr-10 bg-gray-300 rounded-full outline-none"
                    />
                </div>

                <button className={`w-full h-12 bg-amber-500 text-black rounded-full font-semibold hover:bg-amber-600 hover:scale-105 transition 
                duration-300 cursor-pointer transition-all duration-600 opacity-100 delay-50 
                ${active ? "translate-x-full opacity-0" : "translate-x-0 opacity-100" }`} >
                    Log in
                </button>

            
             </form>
        </div>
    )
} 
export default Loginform