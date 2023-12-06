//This page lists the available files and folders in a directory.
import { useLocation } from "react-router-dom";
import FolderView from "../Components/FolderView";
import FileOverview from "../Components/FileOverview";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FolderDetails = () => {
  const location = useLocation();
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();
  const currentPath = location.pathname;
  console.log(currentPath);
  const description = "all the necessary files re here";

  useEffect(() => {
    const arr = currentPath.split("/");
    arr.shift();

    console.log(arr);
    setFolders(arr);
    // setFolders(folders.slice(1));
  }, [currentPath]);
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
      navigate(`/file/${folder.id}`, { state: { currentPath: currentPath } });
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

        <div className="grid grid-cols-2 mx-auto mb-10">
          <div className="flex mx-96 mb-16">
            <div>
              <p className="text-left text-5xl mb-2 font-semibold">
                {folders.slice(-1)}
              </p>
              <p className="text-lg">{description}</p>
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
          <div className="flex mx-24 mb-16">
            <div>
              <p className="text-left text-5xl mb-2 font-semibold">
                {folders.slice(-1)}
              </p>
              <p className="text-lg">{description}</p>
            </div>
          </div>

          {folderNames.map((folder) => (
            <div onClick={() => folderClicked(folder)} className="ml-24">
              <FileOverview
                name={folder.name}
                price={folder.price}
                date={folder.date}
                size={folder.fileSize}
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
