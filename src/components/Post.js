import React, { useState } from "react";

const Post = (props) => {
  let [count, setCount] = useState(props.likes);
  let [stop, setStop] = useState(true);

  let like = () => {
    if (stop) {
      setCount(count + 1);
      document.getElementById(props.id).style.color = "rgb(235,7,96)";
    }
    setStop(false);
  };
  return (
    <div className="particular-post" key={props.id}>
      <div className="heading d-flex">
        <img src={props.src} height="60" width="60"></img>
        <div className="content">
          <h6>{props.name}</h6>
          <p>Location and other</p>
        </div>
        <i className="ml-auto">{props.more}</i>
      </div>
      <div className="mainphoto">
        <img src={props.src} key={props.id} onDoubleClick={like} />
      </div>
      <div className="icons">
        <i id={props.id}>{props.heart}</i>
        <span>{count}</span>
        <i>{props.comment}</i>
        <span>{props.comments}</span>
        <i>{props.share}</i>
        <i className="ml-auto">{props.save}</i>
      </div>
    </div>
  );
};

export default Post;
