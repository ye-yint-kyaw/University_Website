import { Route, Routes } from "react-router-dom"
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Admission_Call} from './Pages/Admission/Admission-Call'
import {Contact} from './Pages/Contact-Us'
import {Enroll_Guide} from './Pages/Admission/Enroll-Guide'
import {Fee} from './Pages/Admission/Fee'
import {Requirements} from './Pages/Admission/Requirements'
import {Degree_Programs} from './Pages/Academic/Degree-Programs'
import { Short_Courses } from "./Pages/Academic/Short-Courses"
import { News } from "./Pages/News"
import { Activities } from "./Pages/Activities"
export const MainRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/admission/admission-call" element={<Admission_Call/>} />
            <Route path="/admission/enroll-guide" element={<Enroll_Guide/>} />
            <Route path="/admission/fees" element={<Fee/>} />
            <Route path="/admission/requirements" element={<Requirements/>} />
            <Route path="/academic/degree-programs" element={<Degree_Programs/>} />
            <Route path="/academic/short-courses" element={<Short_Courses/>} />
            <Route path="/about-us" element={<About/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
        </Routes>
    )
}