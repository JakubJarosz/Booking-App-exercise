import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReorderIcon from '@mui/icons-material/Reorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{  textDecoration: "none"}}>
        <span className="logo">lamaadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{  textDecoration: "none"}}>
          <li>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{  textDecoration: "none"}}>
          <li>
            <InventoryIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <ReorderIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <SignalCellularAltIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <LocalHospitalIcon className="icon"/>
            <span>Systen Health</span>
          </li>
          <li>
            <WebStoriesIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsInputComponentIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AssignmentIndIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>

      </div>
    </div>
  );
};

export default Sidebar;
