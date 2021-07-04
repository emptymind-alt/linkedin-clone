import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";





function Sidebar() {
    const recentItem = (topic) => (
        <div className ="sidebar_recentItem" >
            <span className = "sidebar_hash">#</span>
            <p> {topic}</p>
            </div>
    );
    return (
        <div className = "sidebar">
            <div className = "sidebar_top">
                <img src = "/nature.jpg" alt = "image"/>
                <Avatar className = "sidebar_top"/>
                <h2>Manas sahoo </h2>
                <h3>sivaaamansss@gmail.com</h3>
                </div>
            <div className = "sidebar_stats">
                <div className = "sidebar_stat">
                    <p>Who viewed you </p>
                    <p className = "sidebar_statNumber">2,342</p>
                    </div>
                    <div className = "sidebar_stat">
                        <p>views on post </p>
                        <p className = "sidebar_statNumber">2,031</p>
                        </div>
                </div>
          <div className = "sidebar_button">
              <p>Recent </p>
              {recentItem('reactJs')}
              {recentItem('Javascript')}
              {recentItem('CSS')}
              {recentItem('GIT')}
              {recentItem('HTML')}
              </div>

              </div>
    
    )
}

export default Sidebar;
