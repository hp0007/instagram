import React from "react";
import profile1 from "../assets/images/photo-1.jpg";

const FollowingItem = () => {
  return (
    <div className="following-item d-flex">
      <img src={profile1} height="60" width="60" />
      <div className="content ml-2">
        <p className="one">harshit gajjar</p>
        <p className="sec">started following you.</p>
      </div>
    </div>
  );
};

export default FollowingItem;
