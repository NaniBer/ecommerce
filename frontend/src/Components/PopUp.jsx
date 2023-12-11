import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
const Popup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg relative">
        <button
          className="absolute top-2 right-2  text-gray-500"
          onClick={onClose}
        >
          <Icon
            icon="mdi:close-circle-outline"
            color="#384461"
            width="24"
            height="24"
            className="cursor-pointer"
          />
        </button>
        <p className="flex text-2xl w-full text-center mt-5">
          <Icon
            icon="mdi:check-circle"
            color="#384461"
            width="54"
            height="54"
            className="mr-5"
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
