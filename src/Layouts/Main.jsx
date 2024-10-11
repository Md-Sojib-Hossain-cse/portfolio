import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto space-y-4 lg:space-y-6">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;