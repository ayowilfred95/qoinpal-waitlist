import { Link } from "react-router-dom"
import rectangle from "../../assets/Rectangle.png"
import tick from "../../assets/Tick.png"

const Congratulations = () => {
    return (
      <div className="flex bg-[#111111] h-[95vh] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mt-8 relative">
            <img src={rectangle} alt="Rectangle" />
            <img src={tick} alt="Tick" className="absolute mt-4" />
          </div>
          <div className=" text-white bottom-40 text-xl mb-8">
            <p className="flex relative items-center justify-center ">
              Congratulations 🎉
            </p>
            <p className="flex items-center justify-center ">
              You’re part of the lucky ones to enjoy first hand{" "}
            </p>
            <p className="flex relative items-center justify-center">
              borderless fiat-to-crypto exchange{" "}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center ">
            <Link
              to={"/#contact"}
              className="flex flex-row text-white text-base"
            >
              Contact Us
            </Link>
            <Link to={"/"}>
              <button className="flex items-center justify-center border rounded-3xl bg-[#FAFFE6] w-40 p-3">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
}
export default Congratulations