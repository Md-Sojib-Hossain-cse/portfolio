import { FaHome } from "react-icons/fa";
import ErrorImg from "../../assets/errorImg.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen w-full max-w-screen-md mx-auto flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8">
            <img src={ErrorImg} alt=""/>
            <p className="text-lg md:text-xl">Awww... Don't Cry Its Just an 404 Error!</p>
            <Link to="/" className="btn btn-ghost flex gap-2 bg-[#4CAF50] text-white"><FaHome></FaHome> Go To Home</Link>
        </div>
    );
};

export default ErrorPage;