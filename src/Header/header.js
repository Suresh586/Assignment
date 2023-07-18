import React from "react";
import bellIcon from "../vector.png";
import Avatar from "../avatar.png";
import "./header.css";
import { Fragment } from "react";
import Headings from "./headings";

import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div style={{ display: "flex", justifyContent: "flex-end",margin:'30px',alignItems:'center'}}>
          <div className="search">
            
            <FaSearch  className="icon"/>
           
            <input
              type="text"
              placeholder="Search....."
              className="searchInput"
            />
          </div>
          <div className="bell">
          <img src={bellIcon} alt="Bell Icon"  />
          </div>
          <div className="bell">
          <img src={Avatar} alt="Avatar Icon" />
          </div>
        </div>
      </header>

      <Headings />
    </Fragment>
  );
};

export default Header;

// style={{
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     fontSize: '16px',
//     width:'971px',
//     height:'28px',
//    background: 'var(--white, #FFF)'
//     // Add any other styles you want to apply
//   }}
