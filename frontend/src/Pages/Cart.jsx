//This page shows the cart info,
//if the cart is empty it should show cart is empty
//If not it should show th cart component

import NavBar from "../Components/NavBar";

const Cart = () => {
  const items = [
    {
      name: "SM-A52 Screen Lock",
      price: 400,
      quantity: 2,
      subtotal: 800,
      discount: 0,
      total: 800,
    },
    {
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
  if (items.length > 0) {
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
                {items.map((item, index) => (
                  <tr key={index} className="border-b-2 border-buttonBlue ">
                    <td className="p-2 py-12">{item.name}</td>
                    <td className="p-2 text-center pb-12">{item.price}</td>
                    <td className="p-2 pb-12 ">
                      <div className="flex items-center justify-center">
                        <button className="px-2 mr-3 py-1 bg-buttonBlue rounded-l text-white">
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button className="px-2 ml-3 py-1 bg-buttonBlue rounded-r text-white">
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
                      />
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
            <button className="bg-buttonBlue text-xl w-56 flex justify-center items-center text-white h-16 rounded-xl mr-36">
              <img
                src={require("../Assets/checkButton.png")}
                className="h-7 mr-2"
              />
              Confirm Order
            </button>
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
