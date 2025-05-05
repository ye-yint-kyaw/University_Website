import { Route, Routes } from "react-router-dom"
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Services} from './Pages/Services'
import {Contact} from './Pages/Contact-Us'
export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
        </Routes>
    )
}