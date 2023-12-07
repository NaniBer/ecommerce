import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../Actions/authActions";

const NavBar = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.cart.items);

  const handleServiceToggleDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
    if (isUserDropdownOpen) setIsUserDropdownOpen(false);
  };
  const handleUserToggleDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    if (setIsServiceDropdownOpen) setIsServiceDropdownOpen(false);
  };
  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div className="text-white bg-pageBlue pl-24 pr-16">
      <nav className="flex h-24 items-center">
        <p className="flex-1 text-left">logo</p>
        <ul className="flex space-x-10 pr-5 text-lg relative">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <button
              className="relative bg-transparent"
              onClick={handleServiceToggleDropdown}
            >
              Services
              {isServiceDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white text-black rounded-lg py-2 px-4 w-36 border-2 shadow-lg">
                  <li>
                    <Link to="/requestFile">Request a File</Link>
                  </li>
                </ul>
              )}
            </button>
          </li>
          <li>
            {!isAuthenticated ? (
              <button
                className="bg-buttonBlue h-7 w-24 rounded-lg"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            ) : (
              <button
                className="relative bg-transparent flex cursor-pointer "
                onClick={handleUserToggleDropdown}
              >
                <button className="hover:underline hover:underline-offset-4">
                  Hello, {user.name}!
                </button>
                <img
                  src={require("../Assets/down-arrow-white.png")}
                  className="h-7 mt-[3px] ml-2 cursor-pointer hover:underline hover:underline-offset-4"
                  alt="Cart"
                />
                {isUserDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white text-black rounded-lg py-2 px-4 w-52 border-2 shadow-lg">
                    <li className="hover:underline hover:underline-offset-4">
                      <Link to="/requestFile">Update Profile</Link>
                    </li>
                    <li
                      className="hover:underline hover:underline-offset-4 mt-3"
                      onClick={handleLogout}
                    >
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                )}
              </button>
            )}
          </li>
          <li onClick={handleCart} className="cursor-pointer relative">
            <img
              src={require("../Assets/cart.png")}
              className="h-10"
              alt="Cart"
            />
            {isAuthenticated ? (
              <div className="absolute top-0 -right-2 flex items-center justify-center bg-buttonBlue text-white w-6 h-6 rounded-full">
                <span className="text-xs">{items}</span>
              </div>
            ) : (
              <></>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
