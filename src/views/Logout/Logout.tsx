import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/loginActions";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  useEffect(()=>{
    handleLogout();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div></div>;
}

export default Logout;
