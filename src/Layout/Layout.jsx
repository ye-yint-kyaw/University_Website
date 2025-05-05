import { Link } from "react-router-dom"
export const Layout = ({children}) => {
    return (
        <>
        {/* Insert navigation link layout and styles here */}
            <nav className="flex bg-gray-300 px-6 py-4 shadow-md">
                <Link className="inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-semibold transition duration-200" to="/">HOME</Link>
                <Link className="inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-semibold transition duration-200" to="/services">SERVICES</Link>
                <Link className="inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-semibold transition duration-200" to="/about">ABOUT US</Link>
                <Link className="inline-block py-2 px-4 text-gray-700 hover:text-blue-600 font-semibold transition duration-200" to="/contact-us">CONTACT-US</Link>
            </nav>
            {children}
        </>
    )
}