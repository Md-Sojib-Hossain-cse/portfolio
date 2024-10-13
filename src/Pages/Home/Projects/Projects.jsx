import { FaDog, FaEye } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import FelizTailsLogo from "../../../assets/felizTailsLogo.png";
import HireEchoLogo from "../../../assets/hireEchoLogoPng.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Projects = () => {
    return (
        <section id="projects" className="px-4 md:px-6">
            <SectionTitle heading="Projects"></SectionTitle>
            <div className="grid gap-4 md:gap-6">
                <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 border border-[#F16543] rounded-lg p-4 md:p-6">
                    <div className="flex justify-center items-center">
                        <img src={FelizTailsLogo} alt="felizTailsLogo" className="w-full max-w-56 mx-auto" />
                    </div>
                    <div>
                        <h4 data-aos="fade-up" data-aos-delay="400" className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 lg:mb-4">Feliz Tails: Your Pet's Forever Home</h4>
                        <p data-aos="fade-up" data-aos-delay="400"><small>Duration : September 2 - September 15</small></p>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm md:text-base text-white">Feliz Tails is a user-friendly platform designed to simplify the process of pet adoption and help animals find loving homes. Whether you're looking to adopt or support through donations, Feliz Tails connects people with pets in need.</p>
                        <ul className="mt-3 space-y-1">
                            <li data-aos="fade-up" data-aos-delay="400" className="flex md:items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Pet Listings</span>: Browse a variety of pets available for adoption with detailed profiles.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Adoption Requests</span>: Submit adoption applications directly through the platform.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Donation Campaigns</span>: Support animal shelters by contributing to donation drives.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Seamless Experience</span>: Easy-to-navigate interface for both adopters and donors.</li>
                        </ul>
                        <div data-aos="fade-up" data-aos-delay="400" className="pt-4 md:pt-6">
                            <button className="btn btn-ghost bg-[#4CAF50] text-white"><a href="https://feliz-tails.web.app" target="_blank" className="flex gap-1">View Demo <FaEye /></a></button>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-4 border border-[#F16543] rounded-lg p-4 md:p-6">
                    <div className="flex justify-center items-center">
                        <img src={HireEchoLogo} alt="felizTailsLogo" className="w-full max-w-56 mx-auto" />
                    </div>
                    <div>
                        <h4 data-aos="fade-up" data-aos-delay="400" className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-2 lg:mb-4">Hire Echo: Your Gateway to the Perfect Job</h4>
                        <p data-aos="fade-up" data-aos-delay="400"><small>Duration : May 23 - May 28</small></p>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-sm md:text-base text-white">Hire Echo is a modern job search platform designed to connect professionals with opportunities that match their skills and preferences. Whether you're looking for onsite, remote, or part-time jobs, Hire Echo simplifies your search and application process.</p>
                        <ul className="mt-3 space-y-1">
                            <li data-aos="fade-up" data-aos-delay="400" className="flex md:items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Job Categories</span>: Easily browse jobs by Onsite, Remote, or Part-Time.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">User Profiles</span>: Log in to manage your profile, track applied jobs, and view job postings.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Job Management</span>: Employers can add, view, and manage their own job listings.</li>
                            <li data-aos="fade-up" data-aos-delay="400" className="flex items-center gap-2 text-sm text-white"><FaDog className="text-[#F16543]" /> <span className="text-[#66D17A] font-medium text-base">Effortless Applications</span>: Apply to jobs directly through the platform before deadlines.</li>
                        </ul>
                        <div data-aos="fade-up" data-aos-delay="400" className="pt-4 md:pt-6">
                            <button className="btn btn-ghost bg-[#4CAF50] text-white"><a href="https://hire-echo.web.app" target="_blank" className="flex gap-1">View Demo <FaEye /></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;