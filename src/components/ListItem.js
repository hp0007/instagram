import React from "react";
import Profile from "../assets/images/photo-6.jpg";

const ListItem = (props) => {
  return (
    <div className="item d-flex">
      <img src={props.img} height="50" width="50" />
      <div className="content mt-2">
        <p className="title">{props.name}</p>
        <p className="share">Shared Post By Fashion_0007 </p>
      </div>
      <i>{props.icon}</i>
    </div>
  );
};

export default ListItem;
