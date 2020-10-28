import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import Avatar from '@material-ui/core/Avatar'
import logo from '../../images/logo.png';
import styles from './styles.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <MenuIcon />
                    <img
                        className="header__logo"
                        src={logo}
                        alt="ST Logo"
                    />
                </div>
                <div className="header__input">
                    <input type="text"/>
                    <SearchIcon className="header__inputButton"/>
                </div>
                    <div className="header__icons">
                    <VideoCallIcon />
                    <NotificationsIcon />
                    <Avatar
                        alt="user"
                        src=""
                    />
                </div>
            </div>
        );
    }
}

