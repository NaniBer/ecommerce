import NavBar from "../Components/NavBar";
const LandingPage = () => {
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
          />
          <div class="border-r border-black h-5 mx-5 mt-1"></div>
          <input
            type="text"
            placeholder="All Group"
            className="focus:outline-none"
          />
          <img
            src={require("../Assets/search.png")}
            className="h-7 w-7 mt-1 ml-4 mr-2 cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
