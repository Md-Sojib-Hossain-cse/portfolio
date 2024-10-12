import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import AboutImg from "../../../assets/arifulislam.png";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { BiRadioCircleMarked } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

const About = () => {
    return (
        <section id="about" className="mt-6 min-h-[calc(100vh-76px)]">
            <SectionTitle heading="About Me"></SectionTitle>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:basis-1/2">
                        <div className="relative w-3/4 md:w-2/3 mx-auto border rounded-lg border-[#4CAF50]">
                            <img
                                src={AboutImg}
                                className="rounded-lg w-full hover:scale-110 duration-200 ease-linear object-cover bg-slate-600" />
                            <div className="absolute -top-6 left-6 border-4 border-[#4CAF50] h-full w-full -z-10 rounded-lg">
                            </div>
                        </div>
                    </div>
                    <div className="lg:basis-1/2 w-full">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-white">Aspiring Web Developer</h3>
                        <p className="py-3 text-sm lg:text-base text-white">I’m MD SOJIB HOSSAIN, a Junior MERN Stack Developer with a passion for building dynamic and responsive web applications. Eager to apply my skills in real-world projects, I bring creativity, dedication, and a strong foundation in full-stack development.</p>
                        <div className="py-2 md:py-3 lg:py-4 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 md:items-center">
                            <div className="flex gap-2 md:gap-3 items-center">
                                <div className="p-3 md:p-4 rounded-lg bg-green-100">
                                    <BiRadioCircleMarked className="text-[#4CAF50] text-2xl md:text-3xl" />
                                </div>
                                <div>
                                    <p className="text-lg lg:text-xl font-semibold text-[#4CAF50]">6+</p>
                                    <h6 className="text-lg lg:text-xl font-medium">Complete Project</h6>
                                </div>
                            </div>
                            <div className="flex gap-2 md:gap-3 items-center">
                                <div className="p-3 md:p-4 rounded-lg bg-green-100">
                                    <MdTimer className="text-[#4CAF50] text-2xl md:text-3xl" />
                                </div>
                                <div>
                                    <p className="text-lg lg:text-xl font-semibold text-[#4CAF50]">0+</p>
                                    <h6 className="text-lg lg:text-xl font-medium">Year Of Experience</h6>
                                </div>
                            </div>
                        </div>
                        <ul className="text-white text-sm lg:text-base mt-2 md:mt-3 lg:mt-4 mb-3 md:mb-4 lg:mb-6">
                            <li className="flex gap-2 items-center"><IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />Hands-on experience with React, Node.js, Express, and MongoDB.</li>
                            <li className="flex gap-2 items-center"><IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />Built and deployed a few personal and group projects.</li>
                            <li className="flex gap-2 items-center"><IoCheckmarkDoneCircleSharp className="text-[#4CAF50]" />Continuously learning and growing in web development.</li>
                        </ul>
                        <button className="btn btn-ghost bg-[#4CAF50] text-white">Check Out My CV <FaDownload /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;