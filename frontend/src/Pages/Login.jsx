//Login page
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Actions/authActions";
import { initializeCart } from "../Actions/cartActions";
import Footer from "../Components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    const user = { id: 1, name: "John" };
    dispatch(loginSuccess(user));
    dispatch(initializeCart(10));
    navigate("/cart");
  };
  return (
    <div>
      <NavBar />
      <div className="bg-pageBlue m-20 rounded-xl lg:p-20 p-10 pr-20 lg:pr-0 flex">
        <img
          src={require("../Assets/loginPageImage.png")}
          className="h-[600px] hidden lg:flex"
          alt=""
        />
        <div className="lg:flex flex-col items-center lg:flex-1">
          <p className="text-semibold text-4xl lg:mb-36 mb-24 text-center text-white">
            Login
          </p>
          <input
            type="text"
            placeholder="Username"
            className="ml-9 pl-9 focus:outline-none text-white border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <input
            type="text"
            placeholder="Password"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent lg:h-16 h-14 lg:w-8/12 lg:mb-16 mb-10 w-full"
          />
          <div className="flex flex-col justify-center items-center mt-10">
            <button
              className="bg-buttonBlue lg:w-56 w-32 lg:text-2xl lg:h-14 h-10  rounded-xl text-white font-semibold "
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="mt-3 lg:text-lg text-white">
              Don't have an account?{" "}
              <span
                className="text-orange-400 cursor-pointer hover:underline hover:underline-offset-4"
                onClick={handleSignUp}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
