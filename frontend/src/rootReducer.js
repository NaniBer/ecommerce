import { combineReducers } from "redux";
import clickedFoldersReducer from "./clickedFolderReducer";

const rootReducer = combineReducers({
  clickedFolders: clickedFoldersReducer,
});

export default rootReducer;
