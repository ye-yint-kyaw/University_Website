import { Link } from "react-router-dom"
import IMG_LINK from "../assets/NUCS_Logo_White.png"
export const Layout = ({children}) => {
    return (
        <>
        {/* Insert navigation link layout and styles here */}
            <nav className=" bg-[#008282] shadow-md">

                <div className="flex justify-between items-center py-8">
                    <div className="w-[50%]">
                        <Link  to="/"> <img className="w-[200px]" src={IMG_LINK} alt="NUCS LOGO" /> </Link>
                    </div>
                    <div className="w-[50%]">
                        Search Area/ Login/Out and Profile Area
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