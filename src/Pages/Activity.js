import React from "react";
import FollowItem from "../components/FollowItem";
import FollowingItem from "../components/FollowingItem";

const Activity = () => {
  return (
    <div className="activity">
      <div className="container-fluid">
        <h6>Activity</h6>
        <div className="follow-request d-flex">
          <div className="profiles text-dark">2</div>
          <div className="content">
            <h6>Follow Request</h6>
            <p>Approve or ignore request</p>
          </div>
        </div>
        <h6>Today</h6>
        <FollowItem />
        <FollowingItem />
        <h6>This Month</h6>
        <FollowItem />
        <h6>Earlier</h6>
        <FollowItem />
        <FollowItem />
        <FollowItem />
        <h6>Suggestions for you</h6>
      </div>
    </div>
  );
};

export default Activity;
