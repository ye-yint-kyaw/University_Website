import { Link } from "react-router-dom"
import { Layout } from "../Layout/Layout"
import IMG_HOME from "../assets/nucs_home.gif"
import IMG_CS from '../assets/cs.png'
import IMG_CT from '../assets/ct.png'
import WEB_COURSE from '../assets/web_course.jpg'
import AI_COURSE from '../assets/ai_course.jpg'
import CYBER_COURSE from '../assets/cyber_course.jpg'

export const Home = () => {
    return (
    <Layout>
        <div className="mx-2 sm:mx-15">
            <div className="">
                <h2 className="text-xl text-center text-[#008282] my-6">You can go to this <Link className="text-[#005252] font-bold underline">link</Link> to know the updated announcement about third time admission(May)</h2>
                <img className="w-fll mb-6" src={IMG_HOME} alt="HOME PICTURE" />
            </div>
            <div className="mb-6 bg-gray-100">
                <h2 className="py-10 font-bold text-center text-4xl text-[#008282]">Degree Programs</h2>
                <div className="sm:flex mb-6">
                    <div className="sm:flex-1 sm:w-[50%] rounded-2xl bg-white m-6">
                        <img className="w-[350px] mx-auto mb-7" src={IMG_CS} alt="CS" />
                    </div>
                    <div className="sm:flex-1 sm:w-[50%]  m-6">
                        <h2>Undergraduate</h2>
                        <h3 className="text-3xl my-2 font-semibold text-[#008282]">Computer Science</h3>
                        <p className="text-[#005252]">The computer science program is designed to teach students with knowledge and skills that they can use in the future. With the pervasive influence of information technology on society, graduates with degrees in computer science have access to a wide range of professional options. In addition, the undergraduate program offers an interdisciplinary learning experience that integrates academic theory, research-based insight and practical skills. </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row mb-6">
                    <div className="sm:flex-1 sm:w-[50%]  m-6">
                        <h2>Undergraduate</h2>
                        <h3 className="text-3xl my-2 font-semibold text-[#008282]">Computer Technology</h3>
                        <p className="text-[#005252]">Computer technology can change the world. Every automated device, such as the systems that control phones, cars, airplanes, and robots, has a software or hardware engineer to help develop it. The computer technology degree program provides students with extraordinary learning opportunities.  </p>
                    </div>
                    <div className="sm:flex-1 sm:w-[50%] rounded-2xl bg-white m-6">
                        <img className="w-[350px] mx-auto mb-7" src={IMG_CT} alt="CS" />
                    </div>
                </div>
            </div>
            <div className="bg-cyan-100 mb-6">
                <h2 className="py-10 font-bold text-center text-4xl text-[#008282]">Short Courses</h2>
                <div className="sm:flex justify-evenly pb-4 px-4">
                    <div 
                    className="md:w-[32%] w-[100%] mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-6">
                        <img className="w-full h-48 object-cover rounded-xl mb-4" src={AI_COURSE} alt="AI COURSE" />
                        <div className="font-bold text-xl mb-2">AI Course</div>
                        <p className="text-gray-700 text-base">
                            This is a simple card description. You can put any content here.
                        </p>
                        
                    </div>
                    <div 
                    className="md:w-[32%] w-[100%] mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-6">
                        <img className="w-full h-48 object-cover rounded-xl mb-4" src={WEB_COURSE} alt="Web Course" />
                        <div className="font-bold text-xl mb-2">Web Course</div>
                        <p className="text-gray-700 text-base">
                            This is a simple card description. You can put any content here.
                        </p>
                        
                    </div>
                    <div 
                    className="md:w-[32%] w-[100%] mb-4 rounded-2xl overflow-hidden shadow-lg bg-white p-6">
                        <img className="w-full h-48 object-cover rounded-xl mb-4" src={CYBER_COURSE} alt="Card image" />
                        <div className="font-bold text-xl mb-2">Cyber Course</div>
                        <p className="text-gray-700 text-base">
                            This is a simple card description. You can put any content here.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}