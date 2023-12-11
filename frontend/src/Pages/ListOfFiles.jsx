//This page views all the recent files
import BoxWithInfo from "../Components/BoxWithInfo";
import FolderView from "../Components/FolderView";
import { useNavigate } from "react-router-dom";

const ListOfFiles = () => {
  const navigate = useNavigate();

  const folderClicked = (folderName) => {
    navigate(`/${folderName}`);
  };
  const files = [
    {
      title: "Dedicated support team",

      description:
        "Our dedicated support team is composed of experienced professionals who are passionate about providing exceptional customer service",
      path: "support",
    },
    {
      title: "Customer Satisfaction Guarantee",

      description:
        "Our satisfaction is our top priority. We stand behind the quality of our support services and offer a customer satisfaction guarantee.",
      path: "satisfaction",
    },
    {
      title: "Continuous Improvement",

      description:
        "We are committed to continuously improving our support services based on customer feedback and industry best practices.",
      path: "improvment",
    },
  ];
  const folderNames = [
    {
      name: "Samsung",
      description: "All important files for Samsung device",
    },
    {
      name: "Samsung",
      description: "All important files for Samsung device",
    },
    {
      name: "Samsung",
      description: "All important files for Samsung device",
    },
    {
      name: "Samsung",
      description: "All important files for Samsung device",
    },
    {
      name: "Samsung",
      description: "All important files for Samsung device",
    },
  ];

  return (
    <div className=" ">
      <div className="px-24 pt-14 lg:flex  items-center justify-center">
        {files.map((file) => (
          <BoxWithInfo
            title={file.title}
            description={file.description}
            path={file.path}
          />
        ))}
      </div>
      <p className="w-full text-center pt-10 text-3xl text-orange-400 font-semibold mb-10">
        Recent files
      </p>
      <div className="grid lg:grid-cols-2 mx-auto lg:mb-10 mb-20">
        {folderNames.map((folder) => (
          <div onClick={() => folderClicked(folder.name)}>
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
};

export default ListOfFiles;
