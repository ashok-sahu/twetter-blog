import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import { searchTweet,allTweet } from "../containers/Homepage/HomepageReducer";
import { detailTweet } from '../containers/Tweets/TwitsReducer'

const rootReducer = combineReducers({
  notifications,
  search: searchTweet,
  allTweet:allTweet,
  detail:detailTweet
});

export default rootReducer;
