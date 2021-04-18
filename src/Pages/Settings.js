import React from "react";
import { BsPersonPlus, BsLock } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSecurityScan, AiOutlineQuestionCircle } from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  RiAccountCircleLine,
  RiAccountBoxLine,
  RiAccountPinBoxLine,
} from "react-icons/ri";
import { BiHelpCircle } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const Settings = () => {
  return (
    <div className="settings">
      <div className="container-fluid">
        <h5>Settings</h5>
        <div className="content-1">
          <h6>
            <i>
              <BsPersonPlus />
            </i>
            Follows and Invite Friends
          </h6>
          <h6>
            <i>
              <IoMdNotificationsOutline />
            </i>
            Notification
          </h6>
          <h6>
            <i>
              <BsLock />
            </i>
            Privacy
          </h6>
          <h6>
            <i>
              <AiOutlineSecurityScan />
            </i>
            Security
          </h6>
          <h6>
            <i>
              <HiOutlineSpeakerphone />
            </i>
            Ads
          </h6>
          <h6>
            <i>
              <RiAccountCircleLine />
            </i>
            Account
          </h6>
          <h6>
            <i>
              <BiHelpCircle />
            </i>
            Help
          </h6>
          <h6>
            <i>
              <AiOutlineQuestionCircle />
            </i>
            About
          </h6>
          <h6>
            <i>
              <AiOutlineBgColors />
            </i>
            Theme
          </h6>
        </div>
        <h5>Logins</h5>
        <div className="content-2 d-flex flex-column">
          <a href="">
            <i>
              <RiAccountPinBoxLine />
            </i>
            Add account
          </a>
          <a href="">
            <i>
              <FiLogOut />
            </i>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
