import { useState } from "react";
import NavBar from "../Components/NavBar";
import { Icon } from "@iconify/react";
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
      <div className="flex flex-col justify-center items-center py-32 h-full lg:text-base text-sm">
        <p className="lg:text-5xl text-3xl text-white text-center lg:mx-0 mx-2">
          "Unlock, Connect, Excel <br></br> Empowering the Mobile Phone
          Industry!"
        </p>
        <div className="flex lg:justify-between lg:items-center mt-20 rounded-3xl border-black border-2 bg-white lg:w-1/4 lg:h-14">
          <input
            type="text"
            placeholder="Search service.."
            className="ml-9 focus:outline-none w-28"
            onChange={handleServiceChange}
          />
          <div class="border-r border-black h-5 lg:mx-5 mx-2 mt-1"></div>
          <input
            type="text"
            placeholder="All Group"
            className="focus:outline-none w-28"
            onChange={handleGroupChange}
          />
          <Icon
            icon="mdi:magnify"
            color="#fe8719"
            width="30"
            height="30"
            className="mr-5 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
