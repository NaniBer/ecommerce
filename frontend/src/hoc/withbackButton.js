import React, { useEffect } from "react";
import { connect } from "react-redux";
import { removeFolder, resetFolders } from "../action/clickedFoldersActions";
const withBackButton = (WrappedComponent) => {
  const WithBackButton = ({ removeFolder, resetFolders, ...props }) => {
    useEffect(() => {
      const handlePopstate = () => {
        removeFolder();
      };

      window.addEventListener("popstate", handlePopstate);

      return () => {
        window.removeEventListener("popstate", handlePopstate);
        resetFolders();
      };
    }, [removeFolder, resetFolders]);

    return <WrappedComponent {...props} />;
  };

  return connect(null, { removeFolder, resetFolders })(WithBackButton);
};

export default withBackButton;
