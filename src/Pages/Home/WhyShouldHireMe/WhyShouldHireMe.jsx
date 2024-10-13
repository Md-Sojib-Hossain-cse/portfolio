import SkillBar from 'react-skillbars';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const skills = [
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 80 },
    { type: 'TailwindCSS', level: 90 },
    { type: 'JavaScript', level: 75 },
    { type: 'ReactJS', level: 75 },
    { type: 'Firebase', level: 80 },
    { type: 'Express JS', level: 70 },
    { type: 'MongoDB', level: 65 },
    { type: 'Github', level: 85 },
];

const colors = {
    bar: "#66D17A",
    title: {
        text: "#fff",
        background: "#4CAF50"
    }
};


const WhyShouldHireMe = () => {
    const [animate, setAnimate] = useState(false);

    return (
        <section className="px-4 md:px-6">
            <SectionTitle heading="Why You Should Hire Me"></SectionTitle>
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/2">
                    <ul className='flex flex-col justify-center items-start h-full space-y-4'>
                        <li data-aos="fade-up" data-aos-delay="400" className='flex gap-2'><IoCheckmarkDoneCircleSharp className='text-[#FF4500]'/> Technical Expertise</li>
                        <li data-aos="fade-up" data-aos-delay="400"className='flex gap-2'><IoCheckmarkDoneCircleSharp className='text-[#FF4500]'/> Problem Solving & Critical Thinking</li>
                        <li data-aos="fade-up" data-aos-delay="400" className='flex gap-2'><IoCheckmarkDoneCircleSharp className='text-[#FF4500]'/> Adaptability & Quick Learning</li>
                        <li data-aos="fade-up" data-aos-delay="400" className='flex gap-2'><IoCheckmarkDoneCircleSharp className='text-[#FF4500]'/> Work Ethic & Dedication</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div>
                        <h4 className="text-center text-white font-medium text-base lg:text-lg">Skills</h4>
                        <div className="border-t-2 border-[#4CAF50] w-36 mx-auto mt-2"></div>
                        <div className="border-t-2 border-[#4CAF50] w-16 mx-auto mt-1"></div>
                    </div>
                    <div>
                        <div>
                            <Waypoint onEnter={() => setAnimate(true)}>
                                <div>
                                    {animate && <SkillBar skills={skills} colors={colors} height={25}/>}
                                </div>
                            </Waypoint>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyShouldHireMe;