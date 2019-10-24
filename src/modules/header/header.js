import React from 'react';
import './header.css';

export default function Header(props) {
    return (
        <div className="header">
            <div className="humburger" onClick={props.openSideNav}>
                <img src="/images/icons/menu.svg" />
            </div>
            <div className="logo-block">
                <h1>Logo</h1>
            </div>
            <div className="login-profile">
                <button type="button" className="btn btn-orange">Welcome, Lasiter & Lasiter Plumbing <span>|</span>
                    <img src="/images/icons/settings.png" /></button>
            </div>
        </div>
    )
}
