import React from "react";
import { useSelector } from "react-redux";
import Notifications from "react-notification-system-redux";

const Notification = (props) => {
  const notification = useSelector((state) => state.notifications);
  const style = {
    NotificationItem: {
      DefaultStyle: {
        margin: "10px 5px 2px 1px",
      },
      success: {
        color: "green",
        // backgroundColor:'#4FB64B'
      },
      error:{
        color:"red",
        // backgroundColor:"#ff0505"
      }
    },
  };
  return <Notifications notifications={notification} style={style} />;
};

export default Notification;
