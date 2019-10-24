import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar(props) {
    return (
        <div className={props.menuOpen ? "sidenav sideHide" : "sidenav sideOpen"}>
            <div className="nav-group">
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/adminstration" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Adminstration
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/activities" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Activities
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/messages" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Messages
                            </span>
                            <span className="badge-message">10</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className="sub-nav">
                            <span data-toggle="collapse" data-target="#sunLink" className="btn payment-button" onClick={props.iconChangeClick}>Payment<span className="arrow-select">{props.iconChange === true ? <img src="/images/icons/downArrow.svg" /> : <img src="/images/icons/upArrow.svg" />}</span></span>
                            <div id="sunLink" className="collapse subnav-group">
                                <ul>
                                    <li>
                                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/purchase-orders" >
                                            <span className="nav-icons">
                                                <img src="" alt="" />
                                            </span>
                                            <span>
                                                Purchase Orders

                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/backcharges" >
                                            <span className="nav-icons">
                                                <img src="" alt="" />
                                            </span>
                                            <span>
                                                Backcharges
                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/remittance" >
                                            <span className="nav-icons">
                                                <img src="" alt="" />
                                            </span>
                                            <span>
                                                Remittance

                            </span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/fpo-requests" >
                                            <span className="nav-icons">
                                                <img src="" alt="" />
                                            </span>
                                            <span>
                                                FPO Requests

                            </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" onClick={props.hideSideNav} to="/bid-requests" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Bid Requests
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <span>Coming Soon</span>
                    </li>
                    <li>
                        <NavLink exact to="" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Forecasted Starts
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="" >
                            <span className="nav-icons">
                                <img src="" alt="" />
                            </span>
                            <span>
                                Warranty
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div >
        </div >
    )
}
