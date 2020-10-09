import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import FlagIcon from "@material-ui/icons/Flag";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStateValue } from "../store/StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      {/* header-left part contain both icon and search input */}
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* middle of header */}
      <div className="header_middle">
        <div className="header_option header_option_active">
          <HomeIcon />
        </div>
        <div className="header_option">
          <FlagIcon />
        </div>
        <div className="header_option">
          <SubscriptionsIcon />
        </div>
        <div className="header_option">
          <StorefrontIcon />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      {/* header left */}
      <div className="header_left">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
