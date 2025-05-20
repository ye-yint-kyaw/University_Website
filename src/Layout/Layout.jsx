import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import IMG_LINK from "../assets/NUCS_Logo_White.png"
export const Layout = ({children}) => {
    return (
        <>
        {/* Insert navigation link layout and styles here */}
            <nav className=" bg-[#008282] shadow-md">

                <div className="flex justify-between items-center py-8 px-2 sm:px-15">
                    <div className="">
                        <Link  to="/"> <img className="w-[200px]" src={IMG_LINK} alt="NUCS LOGO" /> </Link>
                    </div>
                    <div className="flex">
                        <div className="relative w-full mx-3 max-w-md">
                            <input
                            type="text"
                            placeholder="Search something..."
                            className="hidden sm:block w-full pl-12 pr-4 py-3 rounded-2xl shadow-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                            <Link><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" /></Link>
                        </div>
                        <button
                        className="border-2 border-white text-white px-6 py-2 cursor-pointer rounded-2xl hover:bg-[#fff] hover:text-[#008282] transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="hidden w-full bg-[#005252] sm:flex box-border">
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/">HOME</Link>
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/services">ACADEMIC</Link>
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/about">ADMISSION</Link>
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/contact-us">NEWS</Link>
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/about">CONTACT</Link>
                    <Link className="flex-1 text-center border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/about">LMS</Link>
                </div>
            </nav>

            {children}
        </>
    )
}