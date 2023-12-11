import React from "react";
import { Icon } from "@iconify/react";

const DeleteItemPopup = ({ onClose, onConfirm, onCancel, message }) => {
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
          />
        </button>
        <p className="flex text-2xl w-full text-center mt-5 text-black">
          <Icon
            icon="mdi:check-circle"
            color="#384461"
            width="54"
            height="54"
            className="mr-5"
          />
          {message}
        </p>
        <div className="flex justify-center items-center">
          <button
            className="bg-buttonBlue w-44 flex justify-center items-center text-white h-10 rounded-xl mr-10 text-lg mt-10"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            className="bg-buttonBlue w-44 flex justify-center items-center text-white h-10 rounded-xl mr-10 text-lg mt-10"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemPopup;
