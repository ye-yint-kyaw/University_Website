import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import { ChevronDown } from "lucide-react"
import {AlignJustify} from "lucide-react"
import IMG_LINK from "../assets/NUCS_Logo_White.png"
export const Layout = ({children}) => {
    return (
        <>
            <nav className=" bg-[#008282] shadow-md">
                <div className="flex justify-between items-center py-8 px-2 sm:px-15">
                    <div className="">
                        <Link  to="/"> <img className="w-[130px]" src={IMG_LINK} alt="NUCS LOGO" /> </Link>
                    </div>
                    <div className="hidden lg:flex">
                        <div className="relative w-full mx-3 max-w-md">
                            <input
                            type="text"
                            placeholder="Search something..."
                            className="hidden sm:block w-full pl-12 pr-4 py-2 rounded-2xl shadow-lg bg-white text-[#008282] placeholder-[#008282] focus:outline-none focus:ring-2 focus:ring-[#008282] transition duration-300"
                            />
                            <Link><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#008282]" /></Link>
                        </div>
                        <button
                        className="border-2 border-white text-white px-6 py-1 cursor-pointer rounded-2xl hover:bg-[#fff] hover:text-[#008282] transition duration-300"
                        >
                            Login
                        </button>
                    </div>
                <AlignJustify className="block lg:hidden" />
                </div>
                <div className="hidden w-full bg-[#005252] lg:flex box-border">
                    <Link className="flex-1 text-center text-sm border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/">HOME</Link>
                    <div className="flex-1 relative group text-center border-x border-gray-400">
                        <div className="text-sm py-3 md:px-5 text-white hover:text-[#f6f6f6] font-semibold hover:bg-[#009696] transition duration-200 cursor-pointer flex items-center justify-center gap-1">
                        ACADEMIC <ChevronDown />
                        </div>
                        <div className="absolute top-full left-0 w-full bg-[#007070] hidden group-hover:block">
                            <Link className="block px-4 py-2 text-sm text-white hover:bg-[#009696] transition" to="/academic/degree-programs">Degree Programs </Link>
                            <Link className="block px-4 py-2 text-xs text-white hover:bg-[#009696] transition" to="/academic/short-courses">Short Courses</Link>
                        </div>
                    </div>
                    <div className="flex-1 relative group text-center border-x border-gray-400">
                        <div className="text-xs py-3 md:px-5 text-white hover:text-[#f6f6f6] font-semibold hover:bg-[#009696] transition duration-200 cursor-pointer flex items-center justify-center gap-1">
                        ADMISSION <ChevronDown />
                        </div>
                        <div className="absolute top-full left-0 w-full bg-[#007070] hidden group-hover:block">
                            <Link className="block px-4 py-2 text-xs text-white hover:bg-[#009696] transition" to="/admission/admission-call">Admission Call</Link>
                            <Link className="block px-4 py-2 text-xs text-white hover:bg-[#009696] transition" to="/admission/enroll-guide">Enroll Guide</Link>
                            <Link className="block px-4 py-2 text-xs text-white hover:bg-[#009696] transition" to="/admission/requirements">Requirements</Link>
                            <Link className="block px-4 py-2 text-xs text-white hover:bg-[#009696] transition" to="/admission/fees">Tuition & Fees</Link>
                        </div>
                    </div>
                    <Link className="flex-1 text-center text-xs border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/news">NEWS</Link>
                    <Link className="flex-1 text-center text-xs border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/activities">ACTIVITIES</Link>
                    <Link className="flex-1 text-center text-xs border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/lms">LMS</Link>
                    <Link className="flex-1 text-center text-xs border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/contact-us">CONTACT US</Link>
                    <Link className="flex-1 text-center text-xs border-x border-gray-400 py-3 md:px-5 inline-block text-white hover:text-[#f6f6f6] font-semibold transition duration-200 hover:bg-[#009696]" to="/about-us">ABOUT US</Link>
                </div>
            </nav>

            {children}
        </>
    )
}