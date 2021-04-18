import React from "react";
import Profile from "../assets/images/photo-6.jpg";

const ListItem = (props) => {
  return (
    <div className="item d-flex">
      <img src={props.img} height="60" width="60" />
      <div className="content">
        <p className="title">{props.name}</p>
        <p className="share">Shared Post By Fashion_0007 </p>
      </div>
    </div>
  );
};

export default ListItem;
