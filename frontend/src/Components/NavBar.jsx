//This component views the top nav bar
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Reseller Pricing</a>
          </li>
          <li>
            <button
              className="relative bg-transparent"
              onClick={handleToggleDropdown}
            >
              Services
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 bg-white text-black rounded-lg py-2 px-4 w-36 border-2 shadow-lg">
                  <li>
                    <a href="/requestFile">Request a File</a>
                  </li>
                </ul>
              )}
            </button>
          </li>
          <li>
            <a href="/contact">Recent Files</a>
          </li>
          <li>
            <button className="bg-buttonBlue h-7 w-24 rounded-lg">Login</button>
          </li>
          <li onClick={handleCart} className="cursor-pointer">
            <img
              src={require("../Assets/cart.png")}
              className="h-7"
              alt="Cart"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
