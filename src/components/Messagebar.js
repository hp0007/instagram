import React from "react";
import List from "./List";
import { AiOutlineSearch } from "react-icons/ai";

const Messagebar = (props) => {
  return (
    <div className="messagebar">
      <div className="top">
        <h6 className="">Messages</h6>
        <div class="input-group">
          <AiOutlineSearch className="search" />
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>
      </div>
      <List itemData={props.value} />
    </div>
  );
};

export default Messagebar;
