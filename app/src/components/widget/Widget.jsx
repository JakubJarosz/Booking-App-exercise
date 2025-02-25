import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21321</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="percentage negative">
            <KeyboardArrowUpIcon/>
            20%
        </div>
        <PersonIcon className="icon"/>
      </div>
    </div>
  )
}

export default Widget
