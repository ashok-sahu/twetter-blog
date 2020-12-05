import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import { searchTweet } from "../containers/Homepage/HomepageReducer";

const rootReducer = combineReducers({
  notifications,
  search: searchTweet,
});

export default rootReducer;
