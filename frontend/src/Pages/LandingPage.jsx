import { useState } from "react";
import NavBar from "../Components/NavBar";
const LandingPage = () => {
  const [group, setGroup] = useState("");
  const [service, setService] = useState("");

  const handleGroupChange = (event) => {
    setGroup(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSearch = () => {
    console.log("Group is " + group + " service is " + service);
  };

  return (
    <div className="bg-pageBlue h-screen">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center py-32 h-full">
        <p className="text-5xl text-white text-center ">
          "Unlock, Connect, Excel <br></br> Empowering the Mobile Phone
          Industry!"
        </p>
        <div className="flex justify-between items-center mt-20 rounded-3xl border-black border-2 bg-white w-1/4 h-14 ">
          <input
            type="text"
            placeholder="Search service.."
            className="ml-9 focus:outline-none "
            onChange={handleServiceChange}
          />
          <div class="border-r border-black h-5 mx-5 mt-1"></div>
          <input
            type="text"
            placeholder="All Group"
            className="focus:outline-none"
            onChange={handleGroupChange}
          />
          <img
            src={require("../Assets/search.png")}
            className="h-7 w-7 mt-1 ml-4 mr-2 cursor-pointer"
            alt=""
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
