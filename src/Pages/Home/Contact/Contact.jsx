import { FaMessage } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import GetInTouchImg from "../../../assets/getInTouch.png";

const Contact = () => {

    return (
        <section id="contact" className="mt-6">
            <SectionTitle heading="Get In Touch"></SectionTitle>
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:basis-full">
                    <div className="relative w-full flex justify-center items-center">
                        <img src={GetInTouchImg} alt="" className="w-3/4" />
                    </div>
                </div>
                <div className="lg:basis-full w-full">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm md:text-base font-medium text-white">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered focus:border focus:border-[#4CAF50]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm md:text-base font-medium text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered focus:border focus:border-[#4CAF50]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm md:text-base font-medium text-white">Message</span>
                            </label>
                            <textarea placeholder="message" className="input input-bordered min-h-28 md:min-h-32 focus:border focus:border-[#4CAF50]" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-ghost bg-[#4CAF50] text-white"><FaMessage />Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;