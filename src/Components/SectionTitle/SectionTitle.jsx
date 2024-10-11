import { GiBurningRoundShot } from "react-icons/gi";
import PropTypes from 'prop-types';

const SectionTitle = ({heading}) => {
    return (
        <div className="py-3 md:py-5 lg:py-8 text-center">
            <h3 className="flex gap-2 justify-center items-center text-lg font-medium text-white"><GiBurningRoundShot className="text-[#FF4500]"/>{heading}</h3>
            <div className="border-t-2 border-[#4CAF50] w-36 mx-auto mt-2"></div>
            <div className="border-t-2 border-[#4CAF50] w-16 mx-auto mt-1"></div>
        </div>
    );
};

SectionTitle.propTypes = {
    heading : PropTypes.string,
}

export default SectionTitle;