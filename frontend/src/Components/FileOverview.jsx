import { useNavigate } from "react-router-dom";

//This component views the list of files with their small info
const FileOverview = (props) => {
  const navigate = useNavigate();
  const handleBuyButton = () => {
    const id = props.id;
    const pathname = props.pathname;
    navigate(`/file/${id}`, { state: { currentPath: pathname } });
    // console.log(props.pathname);
  };
  return (
    <div className="border-2 border-buttonBlue flex p-3 mb-5 rounded-lg mr-24 justify-center items-center">
      <img src={require("../Assets/download.png")} className="h-24 mr-4" />
      <div className="text-lg flex-1">
        <p className="text-2xl font-semibold mt-3">{props.name}</p>
        <div className="flex my-3">
          <div className="">
            <p>Date: {props.date}</p>
            <p className="text-orange-400 font-bold text-2xl mt-5">
              {props.price} Birr
            </p>
          </div>
          <p className="ml-20">Size: {props.size}</p>
        </div>
      </div>
      <button
        className="bg-buttonBlue w-44 flex justify-center items-center text-white h-16 rounded-xl mr-10 text-lg"
        onClick={handleBuyButton}
      >
        <img src={require("../Assets/cart.png")} className="h-7 mr-5" />
        Buy
      </button>
    </div>
  );
};
export default FileOverview;
