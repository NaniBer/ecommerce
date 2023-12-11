//This page view all the necessary info of a file and only views one file
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../Actions/cartActions";
import Popup from "../Components/PopUp";
import { Icon } from "@iconify/react";
const FileView = () => {
  const fileInfo = {
    id: "12334e",
    name: "SM-A51 Screen Lock",
    date: "11/30/2023",
    fileSize: "10MB",
    visits: 23,
    price: 300,
    description:
      "SM-I9500 Remove screen lock? Password Pin Pattern Without lost of your important data. -I9500_UFNB4 I9500_UFNB4_REMOVE_SCREEN_LOCK_WITHOUT_LOSS_DATA.tar",
  };
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [folders, setFolders] = useState([]);
  const currentPath = location.state.currentPath;
  const [showPopup, setShowPopup] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const arr = currentPath.split("/");
    arr.shift();
    setFolders(arr);
  }, []);

  const handleAddToCart = (id) => {
    console.log(folders);
    if (isAuthenticated) {
      dispatch(addToCart());
      setShowPopup(true);
    } else {
      // Retrieve the item details
      const productID = id;
      const quantity = 1;

      // Store the item details in sessionStorage
      const cartItem = { productID, quantity };
      const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
      cartItems.push(cartItem);
      sessionStorage.setItem("cart", JSON.stringify(cartItems));
      navigate("/login");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex lg:ml-24 ml-10 mt-10 mb-10">
        {folders.map((folder, index) => (
          <p key={index} className="text-xl">
            {folder} {index !== folders.length - 1 && <span>/</span>} &nbsp;
          </p>
        ))}
      </div>
      <div className="bg-neutral-300 text-black lg:m-20 m-10 rounded-xl lg:p-20 p-10 ">
        <p className="lg:text-5xl text-3xl font-semibold text-center">
          {fileInfo.name}
        </p>
        <div className="lg:flex lg:text-2xl text-lg lg:mt-20 mt-10  ">
          <div className="lg:w-1/2 lg:mr-0 mr-32">
            <p className=" lg:mb-16 mb-10 flex lg:flex-col">
              <span className="font-semibold lg:mr-14 mr-4">Date: </span>{" "}
              {fileInfo.date}
            </p>
            <p className="  lg:mb-16 mb-10">
              <span className="font-semibold mr-5">File Size: </span>
              {fileInfo.fileSize}
            </p>
            <p className=" lg:mb-16 mb-10">
              <span className=" font-semibold lg:mr-14 mr-10">Vistis:</span>{" "}
              {fileInfo.visits}
            </p>
            <p className=" lg:mb-16 mb-10 lg:text-3xl text-xl font-bold text-orange-400">
              <span className="lg:text-2xl text-lg font-semibold lg:mr-14 mr-10 text-black">
                Price:{" "}
              </span>
              {fileInfo.price} ETB
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <span className="font-semibold lg:mb-0 mb-3 ">Description:</span>{" "}
            <p className="">{fileInfo.description}</p>
          </div>
        </div>
        <div className="w-full flex justify-center lg:text-xl text-base font-semibold lg:mt-0 mt-20">
          <button
            className="bg-orange-400 lg:w-56  w-40 flex justify-center items-center text-white lg:h-16 h-10 rounded-xl lg:mr-36 mr-10"
            onClick={() => handleAddToCart(fileInfo.id)}
          >
            <Icon icon="mdi:cart" width="30" height="30" className="mr-5" />
            Add To Cart
          </button>
          {/* <button className="bg-buttonBlue lg:w-56 w-40 flex justify-center items-center text-white lg:h-16 h-10 rounded-xl lg:mr-36 mr-10">
            <img
              src={require("../Assets/cart.png")}
              className="g:h-7 h-6 mr-3 lg:mr-5"
            />
            Check out
          </button> */}
          <div>{showPopup && <Popup onClose={closePopup} />}</div>
        </div>
      </div>
    </div>
  );
};
export default FileView;
