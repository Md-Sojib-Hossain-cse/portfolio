import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <div className="space-y-4 lg:space-y-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;