//Request a file page
import NavBar from "../Components/NavBar";
const RequestFile = () => {
  return (
    <div>
      <NavBar />
      <div className="lg:ml-24 ml-10 mt-10 mb-10 mr-24 text-pageBlue">
        <p className="lg:text-2xl text-xl text-pageBlue">
          Services / Request File
        </p>
        <div className="bg-neutral-300 mt-14 rounded-xl lg:p-20 p-10 lg:pr-20 pr-20 pb-10 ">
          <p className="lg:text-4xl text-2xl text-center mb-3 font-bold">
            Request File
          </p>
          <p className="text-center mb-16 lg:text-xl ">
            If you need a special file, use the below form to send us your
            requests
          </p>
          <div>
            <form className="flex justify-center flex-col lg:text-lg ">
              <div className="grid lg:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="placeholder-gray-600 ml-9 pl-9 focus:outline-none border-pageBlue border-2 rounded-lg bg-transparent h-16 mb-10 "
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="placeholder-gray-600 ml-9 pl-9 focus:outline-none border-pageBlue border-2 rounded-lg bg-transparent  h-16 mb-10"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="placeholder-gray-600 ml-9 pl-9 focus:outline-none border-pageBlue border-2 rounded-lg bg-transparent h-16 mb-10"
                />
                <input
                  type="text"
                  placeholder="File Request Subject"
                  className="placeholder-gray-600 ml-9 pl-9 focus:outline-none border-pageBlue border-2 rounded-lg bg-transparent   h-16"
                />
              </div>
              <textarea
                cols="40"
                rows="10"
                placeholder="File Request Message"
                className=" placeholder-gray-600 ml-9 pl-9 pt-6 focus:outline-none border-pageBlue border-2 rounded-lg bg-transparent w-fit mr-24 lg:mt-0 mt-10 sm:cols-30 lg:cols-60"
              />
              <div className="flex justify-end w-full items-center mt-10 ">
                <button className="bg-orange-400 lg:w-56 w-44 justify-self-center text-white lg:h-14 h-10 rounded-xl">
                  Send request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RequestFile;
