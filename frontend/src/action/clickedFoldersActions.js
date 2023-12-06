// actions/clickedFoldersActions.js

// Action Types
export const ADD_CLICKED_FOLDER = "ADD_CLICKED_FOLDER";
export const REMOVE_FOLDER = "REMOVE_FOLDER";
export const RESET_FOLDERS = "RESET_FOLDERS";

// Action Creators
export const addClickedFolder = (folderName) => ({
  type: ADD_CLICKED_FOLDER,
  payload: folderName,
});

export const removeFolder = () => ({
  type: REMOVE_FOLDER,
});

export const resetFolders = () => ({
  type: RESET_FOLDERS,
});
