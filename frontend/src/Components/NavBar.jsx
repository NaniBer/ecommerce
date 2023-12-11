import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../Actions/authActions";
import { Icon } from "@iconify/react";

const NavBar = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const linkTo = isAuthenticated ? "/requestFile" : "/login"; //The request page will route the user to login page if not logged in

  return (
    <div className="text-white bg-pageBlue lg:pl-24 pl-10 lg:pr-16 pr-5">
      <nav className="flex h-24 items-center">
        <div className="lg:hidden relative">
          <button
            className="text-white hover:text-white focus:outline-none focus:text-white h-8 mr-10"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute bg-white rounded-lg shadow-xl mt-2 text-black w-36">
              <ul className=" relative text-center ">
                <li className="h-10 flex items-center justify-center">
                  <Link to="/">Home</Link>
                </li>
                <li className="h-10 flex items-center justify-center">
                  <Link to={linkTo}>Request a File</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <p className="flex-1 text-left">logo</p>
        <ul className="space-x-10 pr-5 text-lg relative flex ">
          <li className="hidden lg:flex">
            <Link to="/">Home</Link>
          </li>

          <li className="hidden lg:flex">
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
                className="bg-buttonBlue lg:h-7 w-24  rounded-lg "
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
                <Icon
                  icon="mdi:arrow-down-drop-circle-outline"
                  color="white"
                  width="24"
                  height="54"
                  className="lg:h-7 h-6 4 mt-[3px] ml-2 cursor-pointer
                hover:underline hover:underline-offset-4"
                  alt="Down Arrow"
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
            <Icon icon="mdi:cart" width="25" height="24" />

            {isAuthenticated ? (
              <div className="absolute lg:-top-3 lg:-right-4 -right-4 -top-3 flex items-center justify-center bg-buttonBlue text-white w-6 h-6 rounded-full">
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
