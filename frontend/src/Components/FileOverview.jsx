import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

//This component views the list of files with their small info
const FileOverview = (props) => {
  const navigate = useNavigate();
  const handleBuyButton = () => {
    const id = props.id;
    const pathname = props.pathname;
    navigate(`/file/${id}`, { state: { currentPath: pathname } });
  };
  return (
    <div className="border-2 border-buttonBlue flex p-3 mb-5 rounded-lg lg:mr-24 mr-10 lg:pb-0 pb-5 justify-center items-center">
      <Icon
        icon="mdi:download"
        color="#384461"
        width="70"
        height="70"
        className="mr-5"
      />
      <div className="text-lg flex-1">
        <p className="lg:text-2xl text-xl font-semibold mt-3">{props.name}</p>
        <div className="my-3 lg:flex hidden">
          <div className="">
            <p>Date: {props.date}</p>
            <p className="text-orange-400 font-bold text-2xl mt-5">
              {props.price} Birr
            </p>
          </div>
          <p className="ml-20">Size: {props.size}</p>
        </div>
      </div>
      <div>
        <p className="text-orange-400 font-bold text-xl mt-3 mb-6 lg:hidden">
          {props.price} Birr
        </p>
        <button
          className="bg-buttonBlue lg:w-44 w-32 flex justify-center items-center text-white lg:h-16 h-10 rounded-xl lg:mr-10 mr-5 text-lg "
          onClick={handleBuyButton}
        >
          <Icon icon="mdi:cart" width="30" height="30" className="mr-5" />
          Buy
        </button>
      </div>
    </div>
  );
};
export default FileOverview;
