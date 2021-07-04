import React from 'react'
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';



function Header() {
    return (
        <div className = "header">
          
            <div className = "header_left">
                <img src ="/linkedin.png" alt ="img"/>
                <div className = "header_search">
                    <SearchIcon/>
                    <input type ="text"/>
                    </div>
                </div>



                <div className = "header_right">
                    <HeaderOption Icon = {HomeIcon}title ='Home'/>
                    <HeaderOption Icon = {SupervisorAccountIcon}title = "Business"/>
                    <HeaderOption Icon = {BusinessCenterIcon} title = "jobs"/>
                    <HeaderOption Icon = {ChatIcon}title = "Messaging"/>
                    <HeaderOption Icon = {NotificationsIcon }title = "Notification"/>
                    <HeaderOption avatar = "/manas.jpg" title = "me"/>

                </div>
            
        </div>
    )
}

export default Header;
