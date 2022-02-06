import { Avatar, Menu, MenuItem, Typography } from "@material-ui/core";
import "./AppMenu.scss";
import * as React from "react";
import { PrimaryIconButton } from "../AtomComponents";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/loginActions";
import { useDispatch, useSelector } from "react-redux";

const menuOptions = [
  {
    label: "Home",
    link: "/",
    loginRequired: false,
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    loginRequired: true,
  },
  {
    label: "Contact",
    link: "/contact",
    loginRequired: false,
  },
  {
    label: "Logout",
    link: "/logout",
    loginRequired: true,
  },
  {
    label: "Login",
    link: "/login",
    loginRequired: false,
  },
];

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const loginState = useSelector((state: any) => state.loginState);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const isUserLoggedIn = loginState?.login === "login";
  return (
    <>
      <div className="app-menu">
        {menuOptions.map((menuOption) => {
          if (menuOption.loginRequired && !isUserLoggedIn) return null;
          return (
            <Typography key={menuOption.link}>
              <Link
                to={menuOption.link}
                className="app-menu-item"
                onClick={handleClose}
              >
                {menuOption.label}
              </Link>
            </Typography>
          );
        })}
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
    </>
  );
}
