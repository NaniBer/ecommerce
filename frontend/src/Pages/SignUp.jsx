//Sign up page
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <NavBar />
      <div className="bg-pageBlue m-20 rounded-xl lg:p-20 p-10 pr-20 lg:pr-0 flex">
        <img
          src={require("../Assets/loginPageImage.png")}
          className="h-[600px] lg:flex hidden"
          alt=""
        />
        <div className="lg:flex flex-col items-center lg:flex-1">
          <p className=" text-semibold text-4xl lg:mb-36 mb-24 text-cente text-white">
            Sign Up
          </p>
          <input
            type="text"
            placeholder="Full name"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <div className="flex flex-col justify-center items-center lg:mt-10 mt-5">
            <button className="bg-buttonBlue lg:w-56 w-32 lg:text-2xl lg:h-14 h-10  rounded-xl text-white  ">
              Sign Up
            </button>
            <p className="mt-3 lg:text-lg text-white">
              Already have an account?{" "}
              <span
                className="text-orange-400 cursor-pointer hover:underline hover:underline-offset-4"
                onClick={handleLogin}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default SignUp;
