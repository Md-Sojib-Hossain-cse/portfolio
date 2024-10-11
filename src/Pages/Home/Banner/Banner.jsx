import { Typewriter } from "react-simple-typewriter";
import BannerImg from "../../../assets/banner.png";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Banner = () => {
    return (
        <section className="hero min-h-[calc(100vh-76px)]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className="rounded-lg w-full lg:basis-1/2" />
                <div className="lg:basis-1/2 w-full">
                    <h3 className="text-base md:text-lg lg:text-xl font-medium text-white">Hi, I'm</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">MD SOJIB HOSSAIN</h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#4CAF50]">
                        <Typewriter
                            words={['Junior MERN Stack Developer', 'Frontend Developer', 'Junior Software Developer']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                    <p className="py-3 text-white">
                    Hi, I'm MD SOJIB HOSSAIN, a creative Junior MERN Stack Developer. I love turning ideas into seamless web experiences using the power of React, Node.js, Express, and MongoDB. Let's build something amazing together!
                    </p>
                    <div className="flex gap-2 lg:gap-3 pb-2 mb-2 md:mb-4">
                        <a href="https://github.com/Md-Sojib-Hossain-cse" target="_blank"  className="text-lg lg:text-xl"><FaGithub className="hover:text-[#4CAF50]"/></a>
                        <a href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230" target="_blank"  className="text-lg lg:text-xl"><FaLinkedin className="hover:text-[#4CAF50]"/></a>
                        <a href="https://x.com/MDSOJIBHOS22770" target="_blank"  className="text-lg lg:text-xl"><FaTwitter className="hover:text-[#4CAF50]"/></a>
                        <a href="https://mail.google.com/mail/u/0/?fs=1&to=sojibhossain.cse@gmail.com&tf=cm" target="_blank"  className="text-lg lg:text-xl"><MdEmail className="hover:text-[#4CAF50]"/></a>
                    </div>
                    <button className="btn btn-ghost bg-[#4CAF50] text-white">Check Out My CV <FaDownload /></button>
                </div>
            </div>
        </section>
    );
};

export default Banner;