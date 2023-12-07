//This page shows the cart info,
//if the cart is empty it should show cart is empty
//If not it should show th cart component

import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart, emptyCart } from "../Actions/cartActions";
import { useNavigate } from "react-router-dom";
import EmptyCartPopup from "../Components/EmptyCartPopup";
import DeleteItemPopup from "../Components/DeleteItemPopup";

const Cart = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [showPopupCart, setShowPopupCart] = useState(false);
  const [showPopupItem, setShowPopupItem] = useState(false);
  const [itemsList, setItemsList] = useState([]);

  const items = [
    {
      id: "123ee",
      name: "SM-A52 Screen Lock",
      price: 400,
      quantity: 2,
      subtotal: 800,
      discount: 0,
      total: 800,
    },
    {
      id: "123eee",
      name: "SM-A51 Screen Lock",
      price: 300,
      quantity: 1,
      subtotal: 300,
      discount: 0,
      total: 300,
    },
  ];

  const generalInfo = {
    subtotal: 1100,
    taxes: 0,
    total: 1100,
  };
  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cart");
    console.log(storedCartItems);
    if (storedCartItems !== null) {
      dispatch(addToCart());
      sessionStorage.removeItem("cart");
    }
    setItemsList(items);
  }, [isAuthenticated]);

  const handleEmptyCart = () => {
    console.log("EMptied");
    setShowPopupCart(true);

    dispatch(emptyCart());
  };

  const closePopup = () => {
    setShowPopupCart(false);
    setShowPopupItem(false);
  };

  const handleConfirmCartEmpty = () => {
    console.log("Confirm button clicked");
    setItemsList([]);
    setShowPopupCart(false);
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
    setShowPopupCart(false);
  };

  const handlePlusMinusButton = (itemId, quantity, sign) => {
    const updatedItemsList = itemsList.map((item) => {
      if (item.id === itemId) {
        if (sign === "plus") {
          dispatch(addToCart());
          return {
            ...item,
            quantity: quantity + 1,
            subtotal: item.price * (quantity + 1),
            total: item.price * (quantity + 1) - item.discount,
          };
        } else if (sign === "minus" && item.quantity > 1) {
          return {
            ...item,
            quantity: quantity - 1,
            subtotal: item.price * (quantity - 1),
            total: item.price * (quantity - 1) - item.discount,
          };
        }
      }
      return item;
    });

    setItemsList(updatedItemsList);
    if (sign === "minus") {
      dispatch(deleteFromCart());
    }
  };

  const handleRemoveItem = () => {
    console.log("Removed");

    setShowPopupItem(true);
  };

  const handleConfirmRemoveItem = (id) => {
    const updatedItemsList = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedItemsList);
    setShowPopupItem(false);
  };

  if (itemsList.length > 0) {
    return (
      <div className="w-screen">
        <NavBar />

        <div className="bg-pageBlue m-20 mb-0 rounded-xl p-20 flex flex-col ">
          <p className="text-white text-semibold text-4xl mb-16 w-full text-center">
            Shopping Cart
          </p>
          <div className="flex flex-col justify-center items-center">
            <table className="text-white w-full ">
              <thead className="border-b-8 border-pageBlue">
                <tr className="text-orange-400 text-2xl ">
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2">Discount</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody className="text-xl ">
                {itemsList.map((item, index) => (
                  <tr key={index} className="border-b-2 border-buttonBlue ">
                    <td className="p-2 py-12">{item.name}</td>
                    <td className="p-2 text-center pb-12">{item.price}</td>
                    <td className="p-2 pb-12 ">
                      <div className="flex items-center justify-center">
                        <button
                          className="px-2 mr-3 py-1 bg-buttonBlue rounded-l text-white"
                          onClick={() =>
                            handlePlusMinusButton(
                              item.id,
                              item.quantity,
                              "minus"
                            )
                          }
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="px-2 ml-3 py-1 bg-buttonBlue rounded-r text-white"
                          onClick={() =>
                            handlePlusMinusButton(
                              item.id,
                              item.quantity,
                              "plus"
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-2 text-center pb-12">
                      {item.subtotal} Birr
                    </td>
                    <td className="p-2 text-center pb-12">
                      {item.discount} Birr
                    </td>
                    <td className="p-2 text-center pb-12">{item.total} Birr</td>
                    <td className="p-2 text-center pb-12 ">
                      <img
                        src={require("../Assets/delete.png")}
                        className="h-7 cursor-pointer"
                        onClick={handleRemoveItem}
                      />
                      {showPopupItem && (
                        <DeleteItemPopup
                          onClose={closePopup}
                          message="Are you sure you want to delete this item?"
                          onConfirm={() => handleConfirmRemoveItem(item.id)}
                          onCancel={handleCancel}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="w-full flex flex-col items-end justify-end mt-20">
              <div className="space-y-4 mr-20">
                <p className="text-xl text-white ">
                  <span className="font-semibold mr-16">Subtotal</span>
                  {generalInfo.subtotal} Birr
                </p>
                <p className="text-xl text-white ">
                  <span className="font-semibold mr-28">Taxes</span>
                  {generalInfo.taxes} Birr
                </p>
                <p className="text-2xl text-orange-400 font-bold  ">
                  <span className="font-semibold mr-20 text-xl">Total</span>
                  {generalInfo.total} Birr
                </p>
              </div>
            </div>
            <div className="flex">
              <button
                className="bg-buttonBlue text-xl w-56 flex justify-center items-center text-white h-16 rounded-xl mr-36"
                onClick={handleEmptyCart}
              >
                <img
                  src={require("../Assets/whiteEmptyCart.png")}
                  className="h-7 mr-2"
                />
                Empty Cart
              </button>

              <button className="bg-buttonBlue text-xl w-56 flex justify-center items-center text-white h-16 rounded-xl mr-36">
                <img
                  src={require("../Assets/checkButton.png")}
                  className="h-7 mr-2"
                />
                Confirm Order
              </button>
              <div>
                {" "}
                {showPopupCart && (
                  <EmptyCartPopup
                    onClose={closePopup}
                    message="Are you sure you want to empty the cart"
                    onConfirm={handleConfirmCartEmpty}
                    onCancel={handleCancel}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-screen flex flex-col ">
        <NavBar />
        <div className="bg-pageBlue m-20  rounded-xl p-20 flex flex-col flex-1">
          <p className="text-white text-semibold text-4xl mb-16 w-full text-center">
            Shopping Cart
          </p>
          <div className="flex justify-center items-center h-full text-white text-4xl font-light">
            <img src={require("../Assets/cart.png")} className="h-18 mr-4" />
            <p>Cart is currently empty</p>
          </div>
        </div>
      </div>
    );
  }
};
export default Cart;
