import React from "react";
import profile1 from "../assets/images/photo-1.jpg";

const FollowItem = () => {
  return (
    <div className="follow-item d-flex">
      <img src={profile1} height="60" width="60" />
      <div className="content ml-2">
        <h6 className="name">
          planksupport
          <p>who you might know,is on Instagram</p>
        </h6>
      </div>
      <div className="btn">Follow</div>
    </div>
  );
};

export default FollowItem;
