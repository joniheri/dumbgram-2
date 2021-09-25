import React from "react";

// import components
import SidebarMenuFriend from "./SidebarMenuFriend";
import BrandLeft from "../components/BrandLeft";
import NavbarRight from "../components/NavbarRight";

// import pages
import FeedFriend from "./FeedFriend";

export default function HomeFriendFeed() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
      }}
    >
      {/* Left */}
      <div
        class="left"
        style={{
          padding: "10px 10px 10px 10px",
          borderRight: "1px solid #363536",
          paddingTop: "20px",
          paddingBottom: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* BrandLeft */}
        <BrandLeft />
        {/* EndBrandLeft */}

        {/* LeftContent */}
        <SidebarMenuFriend />
        {/* EndLeftContent */}
      </div>
      {/* EndLeft */}

      {/* Right */}
      <div
        className="right"
        style={{
          paddingTop: "25px",
          paddingLeft: "35px",
          paddingRight: "35px",
        }}
      >
        {/* NavbarRight */}
        <NavbarRight />
        {/* EndNavbarRight */}

        {/* ContentRight */}
        <FeedFriend />
        {/* EndContentRight */}
      </div>
      {/* EndRight */}
    </div>
  );
}
