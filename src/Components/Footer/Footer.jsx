import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from "../../assets/portfolioLogo.png";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <img src={Logo} alt="" className="h-12 w-12 object-cover"/>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/Md-Sojib-Hossain-cse" target="_blank" className="text-lg lg:text-xl"><FaGithub className="hover:text-[#4CAF50]" /></a>
                <a href="https://www.linkedin.com/in/md-sojib-hossain-059a6b230" target="_blank" className="text-lg lg:text-xl"><FaLinkedin className="hover:text-[#4CAF50]" /></a>
                <a href="https://x.com/MDSOJIBHOS22770" target="_blank" className="text-lg lg:text-xl"><FaTwitter className="hover:text-[#4CAF50]" /></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=sojibhossain.cse@gmail.com&tf=cm" target="_blank" className="text-lg lg:text-xl"><MdEmail className="hover:text-[#4CAF50]" /></a>
            </nav>
        </footer>
    );
};

export default Footer;