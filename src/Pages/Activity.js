import React from "react";
import FollowItem from "../components/FollowItem";
import FollowingItem from "../components/FollowingItem";
import SuggestionItem from "../components/SuggesionItem";
import profile1 from "../assets/images/photo-1.jpg";
import profile2 from "../assets/images/photo-3.jpg";
import profile3 from "../assets/images/photo-5.jpg";
import profile4 from "../assets/images/photo-7.jpg";
import profile5 from "../assets/images/photo-9.jpg";

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
        <FollowItem
          img={profile1}
          name="harshit gajjar"
          content="who you might know,is on instagram"
        />
        <FollowingItem
          img={profile2}
          name="Harsh Gohel"
          content="started following you."
        />
        <h6>This Month</h6>
        <FollowItem
          img={profile1}
          name="Harshit Gajjar"
          content="who you might know,is on instagram"
        />
        <h6>Earlier</h6>
        <FollowItem
          img={profile1}
          name="Harshit Gajjar"
          content="who you might know,is on instagram"
        />
        <FollowItem
          img={profile3}
          name="Nitant Joshi"
          content="who you might know,is on instagram"
        />
        <FollowItem
          img={profile4}
          name="Vatsal Dendpara"
          content="who you might know,is on instagram"
        />
        <h6>Suggestions for you</h6>
        <SuggestionItem img={profile1} name="David Brooks" nickname="......." />
        <SuggestionItem
          img={profile2}
          name="Matthew Hinkle"
          nickname="......."
        />
        <SuggestionItem img={profile3} name="Ed Morris" nickname="......." />
        <SuggestionItem img={profile4} name="Paul Pinnock" nickname="......." />
      </div>
    </div>
  );
};

export default Activity;
