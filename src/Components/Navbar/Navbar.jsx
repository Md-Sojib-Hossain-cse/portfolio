import { Link } from "react-router-dom";
// import Logo from "../../assets/portfolioLogo.png";
// import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
    const navLinks = <>
        <li className="text-lg text-white hover:text-[#4CAF50] font-medium"><a>Home</a></li>
        <li className="text-lg text-white hover:text-[#4CAF50] font-medium"><a href="#about">About</a></li>
        <li className="text-lg text-white hover:text-[#4CAF50] font-medium"><a>Blog</a></li>
        <li className="text-lg text-white hover:text-[#4CAF50] font-medium"><a>Project</a></li>
        <li className="text-lg text-white hover:text-[#4CAF50] font-medium"><a>Contact</a></li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">MDSOJIB<span className="text-[#4CAF50]">HOSSAIN</span></h1>
                    {/* <img src={Logo} alt="" className="h-12 w-12 object-cover drop-shadow-xl shadow-black bg-black p-2 rounded-sm shadow-sm" /> */}
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;