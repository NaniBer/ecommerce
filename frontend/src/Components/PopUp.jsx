import React from "react";
import { useNavigate } from "react-router-dom";

const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg relative">
        <button
          className="absolute top-2 right-2  text-gray-500"
          onClick={onClose}
        >
          <img src={require("../Assets/blueClose.png")} className="h-6" />
        </button>
        <p className="flex text-2xl w-full text-center mt-5">
          <img
            src={require("../Assets/blueCheckBox.png")}
            className="h-12 mr-7"
          />
          Item Successfully added to cart!
        </p>
        <div className="flex ">
          <button
            className="bg-buttonBlue w-44 flex justify-center items-center text-white h-10 rounded-xl mr-10 text-lg mt-10"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </button>
          <button
            className="bg-buttonBlue w-44 flex justify-center items-center text-white h-10 rounded-xl mr-10 text-lg mt-10"
            onClick={() => {
              navigate("/cart");
            }}
          >
            View cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
