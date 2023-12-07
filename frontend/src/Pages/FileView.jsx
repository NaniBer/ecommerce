//This page view all the necessary info of a file and only views one file
import NavBar from "../Components/NavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../Actions/cartActions";
import Popup from "../Components/PopUp";
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
    setFolders(folders.slice(1));
  }, [currentPath]);

  const handleAddToCart = (id) => {
    if (isAuthenticated) {
      console.log(id);
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
      <div className="flex ml-24 mt-10 mb-10">
        {folders.map((folder, index) => (
          <p key={index} className="text-xl">
            {folder} {index !== folders.length - 1 && <span>/</span>} &nbsp;
          </p>
        ))}
      </div>
      <div className="bg-pageBlue m-20 rounded-xl p-20 ">
        <p className="text-5xl text-white font-semibold text-center">
          {fileInfo.name}
        </p>
        <div className="flex text-2xl mt-20  ">
          <div className="w-1/2">
            <p className="text-white mb-16">
              <span className="text-orange-400 mr-14">Date: </span>{" "}
              {fileInfo.date}
            </p>
            <p className="text-white mb-16">
              <span className="text-orange-400 mr-5">File Size: </span>
              {fileInfo.fileSize}
            </p>
            <p className="text-white mb-16">
              <span className="text-orange-400 mr-14">Vistis:</span>{" "}
              {fileInfo.visits}
            </p>
            <p className="text-white mb-16 text-3xl font-semibold">
              <span className="text-orange-400 text-2xl font-normal mr-14">
                Price:{" "}
              </span>
              {fileInfo.price} ETB
            </p>
          </div>
          <div className="w-1/2 flex flex-col">
            <span className="text-orange-400 ">Description:</span>{" "}
            <p className="text-white">{fileInfo.description}</p>
          </div>
        </div>
        <div className="w-full flex justify-center text-xl font-semibold">
          <button
            className="bg-buttonBlue w-56 flex justify-center items-center text-white h-16 rounded-xl mr-36"
            onClick={() => handleAddToCart(fileInfo.id)}
          >
            <img src={require("../Assets/cart.png")} className="h-7 mr-5" />
            Add To Cart
          </button>
          <button className="bg-buttonBlue w-56 flex justify-center items-center text-white h-16 rounded-xl mr-36">
            <img src={require("../Assets/cart.png")} className="h-7 mr-5" />
            Check out
          </button>
          <div>{showPopup && <Popup onClose={closePopup} />}</div>
        </div>
      </div>
    </div>
  );
};
export default FileView;
