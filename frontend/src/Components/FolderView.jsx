//This component lists all of the folders in a directory

const FolderView = (props) => {
  return (
    <div
      className="flex items-center justify-center mb-10 cursor-pointer"
      key={props.folderName}
    >
      <img src={require("../Assets/folder.png")} className="h-16 w-16" alt="" />
      <div className="ml-4">
        <p className="w-10 text-4xl font-semibold mb-{4px}">
          {props.folderName}
        </p>
        <p className="tracking-wide text-lg ">{props.folderDescription}</p>
      </div>
    </div>
  );
};
export default FolderView;
