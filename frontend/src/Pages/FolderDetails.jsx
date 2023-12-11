//This page lists the available files and folders in a directory.
import { useLocation } from "react-router-dom";
import FolderView from "../Components/FolderView";
import FileOverview from "../Components/FileOverview";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const FolderDetails = () => {
  const location = useLocation();
  const [folders, setFolders] = useState([]);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath);
  const description = "all the necessary files are here";

  useEffect(() => {
    const arr = currentPath.split("/");
    arr.shift();
    console.log(arr);
    setFolders(arr);
  }, [currentPath]);

  const handleSortToggleDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };
  const handleSortOptionClick = (name) => {
    setSortOption(name);
    setIsSortDropdownOpen(false);
  };
  const type = "file";
  const folderNames = [
    {
      id: "12ee3",
      name: "G950N 7.0 U1 REV1 REMOVE LOOK SCREEN FRP OFF OEM OFF",
      date: "11/30/2023",
      fileSize: "10MB",
      visits: 23,
      price: 300,
      description:
        "SM-I9500 Remove screen lock? Password Pin Pattern Without lost of your important data. -I9500_UFNB4 I9500_UFNB4_REMOVE_SCREEN_LOCK_WITHOUT_LOSS_DATA.tar",
      type: "file",
    },
    {
      id: "12ee3",
      name: "SM-A51 Screen Lock",
      date: "11/30/2023",
      fileSize: "10MB",
      visits: 23,
      price: 300,
      description:
        "SM-I9500 Remove screen lock? Password Pin Pattern Without lost of your important data. -I9500_UFNB4 I9500_UFNB4_REMOVE_SCREEN_LOCK_WITHOUT_LOSS_DATA.tar",
    },
    {
      id: "12ee3",
      name: "SM-A51 Screen Lock",
      date: "11/30/2023",
      fileSize: "10MB",
      visits: 23,
      price: 300,
      description:
        "SM-I9500 Remove screen lock? Password Pin Pattern Without lost of your important data. -I9500_UFNB4 I9500_UFNB4_REMOVE_SCREEN_LOCK_WITHOUT_LOSS_DATA.tar",
    },
  ];
  const folderClicked = (folder) => {
    if (folder.type == "folder") {
      const newPath = `${currentPath}/${folder.name}`;
      window.location.href = newPath;
    } else if (folder.type == "file") {
      console.log(currentPath);
      // navigate(`/file/${folder.id}`, { state: { currentPath: currentPath } });
    }
  };
  if (type == "folder") {
    return (
      <div>
        <NavBar />
        <div className="flex ml-24 mt-10 mb-10">
          {folders.map((folder, index) => (
            <p key={index} className="text-xl">
              {folder} / &nbsp;
            </p>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 mx-auto mb-10">
          <div className="flex lg:mx-96 mx-20 mb-16">
            <div>
              <p className="text-left lg:text-5xl text-3xl mb-2 font-semibold">
                {folders.slice(-1)}
              </p>
              <p className="lg:text-lg text-base">{description}</p>
            </div>
          </div>
          <div></div>
          {folderNames.map((folder) => (
            <div onClick={() => folderClicked(folder)}>
              <FolderView
                folderName={folder.name}
                folderDescription={folder.description}
                key={folder.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else if (type == "file") {
    return (
      <div>
        <NavBar />
        <div className="flex ml-24 mt-10 mb-10">
          {folders.map((folder, index) => (
            <p key={index} className="text-xl">
              {folder} / &nbsp;
            </p>
          ))}
        </div>

        <div className="">
          <div className="flex lg:mx-24 mx-10 mb-6">
            <div>
              <p className="text-left lg:text-5xl text-2xl mb-2 font-semibold">
                {folders.slice(-1)}
              </p>
              <p className="lg:text-lg text-base">{description}</p>
            </div>
          </div>
          <div className="flex lg:justify-end lg:mr-24 mb-10 lg:ml-0 ml-10 relative ">
            <div className="flex flex-1 border-2 border-buttonBlue rounded-xl mr-10 justify-center items-center cursor-pointer lg:flex-none">
              <input
                className="focus:outline-none pl-5 cursor-pointer flex-1 "
                placeholder="Name"
                value={sortOption}
                onClick={handleSortToggleDropdown}
                readOnly
              ></input>
              <Icon
                icon="mdi:arrow-down-drop-circle-outline"
                color="#384461"
                width="24"
                height="54"
                onClick={handleSortToggleDropdown}
                className="mr-3 cursor-pointer"
              />

              {isSortDropdownOpen && (
                <ul className="absolute top-full bg-white text-black rounded-lg py-2 px-4 w-52 border-2 shadow-lg space-y-3">
                  <li
                    className="hover:underline hover:underline-offset-4"
                    onClick={() => handleSortOptionClick("Name")}
                  >
                    Name
                  </li>
                  <li
                    className="hover:underline hover:underline-offset-4"
                    onClick={() => handleSortOptionClick("Date")}
                  >
                    Date
                  </li>
                  <li
                    className="hover:underline hover:underline-offset-4"
                    onClick={() => handleSortOptionClick("Size")}
                  >
                    Size
                  </li>
                  <li
                    className="hover:underline hover:underline-offset-4"
                    onClick={() => handleSortOptionClick("Price")}
                  >
                    Price
                  </li>
                </ul>
              )}
            </div>
            <button className="bg-buttonBlue lg:w-44 w-32 flex justify-center items-center text-white h-12 rounded-xl lg:text-lg text-base lg:mr-0 mr-10">
              <Icon icon="mdi:sort" width="24" height="54" className="mr-5" />
              Sort
            </button>
          </div>

          {folderNames.map((folder) => (
            <div
              onClick={() => folderClicked(folder)}
              className="lg:ml-24 ml-10"
            >
              <FileOverview
                id={folder.id}
                name={folder.name}
                price={folder.price}
                date={folder.date}
                size={folder.fileSize}
                pathname={currentPath}
                key={folder.name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default FolderDetails;
