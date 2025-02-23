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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">lamaadmin</span>
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
          <li>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className="icon"/>
            <span>Products</span>
          </li>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>
    </div>
  );
};

export default Sidebar;
