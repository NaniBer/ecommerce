//This component lists all of the folders in a directory
import { Icon } from "@iconify/react";
const FolderView = (props) => {
  return (
    <div
      className="flex items-center justify-center lg:mb-14 mb-12 cursor-pointer ml-24 mr-10  "
      key={props.folderName}
    >
      <Icon icon="mdi:folder" color="#384461" width="60" height="60" />
      <div className="ml-4">
        <p className="lg:text-4xl text-xl font-semibold mb-{4px}">
          {props.folderName}
        </p>
        <p className="tracking-wide lg:text-lg text-sm ">
          {props.folderDescription}
        </p>
      </div>
    </div>
  );
};
export default FolderView;
