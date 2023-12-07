//Login page
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Actions/authActions";
import { initializeCart } from "../Actions/cartActions";

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
      <div className="bg-pageBlue m-20 rounded-xl p-20 flex">
        <img
          src={require("../Assets/loginPageImage.png")}
          className="h-[600px]"
          alt=""
        />
        <div className="flex flex-col items-center flex-1">
          <p className="text-white text-semibold text-4xl mb-36">Login</p>
          <input
            type="text"
            placeholder="Username"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent h-16 w-8/12 mb-16"
          />
          <input
            type="text"
            placeholder="Password"
            className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent w-8/12   h-16"
          />
          <div className="flex flex-col justify-center items-center mt-10">
            <button
              className="bg-buttonBlue w-56 text-white text-xl h-14 rounded-xl "
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="mt-3 text-white text-lg">
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
    </div>
  );
};
export default Login;
