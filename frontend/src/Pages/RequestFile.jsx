//Request a file page
import NavBar from "../Components/NavBar";
const RequestFile = () => {
  return (
    <div>
      <NavBar />
      <div className="ml-24 mt-10 mb-10 mr-24">
        <p className="text-2xl">Services / Request File</p>
        <div className="bg-pageBlue mt-14 rounded-xl p-20 pb-10 text-white">
          <p className="text-4xl text-center mb-3 font-semibold">
            Request File
          </p>
          <p className="text-center mb-16 text-xl font-light">
            If you need a special file, use the below form to send us your
            requests
          </p>
          <div>
            <form className="flex justify-center flex-col text-lg">
              <div className="grid grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent  h-16 mb-10"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent  h-16 mb-10"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent h-16 mb-10"
                />
                <input
                  type="text"
                  placeholder="File Request Subject"
                  className="ml-9 pl-9 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent   h-16"
                />
              </div>
              <textarea
                cols="200"
                rows="10"
                placeholder="File Request Message"
                className="ml-9 pl-9 pt-6 focus:outline-none border-orange-400 border-2 rounded-lg bg-transparent w-fit mr-24"
              />
              <div className="flex justify-center items-center mt-10">
                <button className="bg-buttonBlue w-56 justify-self-center text-white h-14 rounded-xl mr-36">
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
