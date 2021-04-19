import React from "react";
import profile1 from "../assets/images/photo-1.jpg";

const FollowingItem = () => {
  return (
    <div className="following-item d-flex">
      <img src={profile1} height="60" width="60" />
      <p className="ml-2">harshit gajjar ,</p>
      <p>started following you.</p>
    </div>
  );
};

export default FollowingItem;
