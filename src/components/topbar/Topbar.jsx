import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Filmy Geeks</span>
        </div>
        <div className="topRight">
          <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlsbSUyMHJlZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
