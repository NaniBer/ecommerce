import {
  ADD_CLICKED_FOLDER,
  REMOVE_FOLDER,
  RESET_FOLDERS,
} from "./action/clickedFoldersActions";

const initialState = {
  clickedFolders: [],
};

const clickedFolderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLICKED_FOLDER:
      return {
        ...state,
        clickedFolders: [...state.clickedFolders, action.payload],
      };
    case REMOVE_FOLDER:
      return {
        ...state,
        clickedFolders: state.clickedFolders.slice(0, -1),
      };
    case RESET_FOLDERS:
      return {
        ...state,
        clickedFolders: [],
      };
    default:
      return state;
  }
};
export default clickedFolderReducer;
