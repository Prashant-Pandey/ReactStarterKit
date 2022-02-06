import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import "./AppMenu.scss"
import { PersonAdd, Settings } from "@material-ui/icons";
import * as React from "react";
import { PrimaryIconButton } from "../AtomComponents";

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
        <Typography style={{ minWidth: 100 }}>Contact</Typography>
        <Typography style={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <PrimaryIconButton
            onClick={handleClick}
            size="small"
            style={{ marginLeft: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar style={{ width: 32, height: 32 }}>M</Avatar>
          </PrimaryIconButton>
        </Tooltip>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            marginTop: 1.5,
            // '& .MuiAvatar-root': {
            //   width: 32,
            //   height: 32,
            //   ml: -0.5,
            //   mr: 1,
            // },
            // '&:before': {
            //   content: '""',
            //   display: 'block',
            //   position: 'absolute',
            //   top: 0,
            //   right: 14,
            //   width: 10,
            //   height: 10,
            //   bgcolor: 'background.paper',
            //   transform: 'translateY(-50%) rotate(45deg)',
            //   zIndex: 0,
            // },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>{/* <Logout fontSize="small" /> */}</ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}