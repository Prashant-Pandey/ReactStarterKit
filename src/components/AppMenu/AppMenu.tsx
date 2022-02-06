import { Avatar, Menu, MenuItem, Typography } from "@material-ui/core";
import "./AppMenu.scss";
import * as React from "react";
import { PrimaryIconButton } from "../AtomComponents";
import { Link } from "react-router-dom";

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <div className="app-menu">
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Typography>
          <Link to="/contact">Contact</Link>
        </Typography>
        <Typography>
          <Link to="/dashboard">Dashboard</Link>
        </Typography>
        <Typography>
          <Link to="/login">Login</Link>
        </Typography>
        <PrimaryIconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar>M</Avatar>
        </PrimaryIconButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar />
          <Link to="/profile">Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/logout">Logout</Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
