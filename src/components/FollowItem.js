import React from "react";
import profile1 from "../assets/images/photo-1.jpg";

const FollowItem = () => {
  return (
    <div className="follow-item d-flex">
      <img src={profile1} height="60" width="60" />
      <div className="content">
        <h6 className="name">planksupport</h6>
        <p>who you might know,is on Instagram</p>
      </div>
      <div className="btn">Follow</div>
    </div>
  );
};

export default FollowItem;
