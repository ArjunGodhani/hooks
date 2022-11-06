import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {
    return (
        <>
            <div className="html-container" />
            <div className="html-section">
                <div className="html-project">
                    <div className="navigation">
                        <nav>
                            <ul className="nav-type">

                                <li><a target="_blank"
                                    className="active1"><NavLink exact activeClassName="active_class" to="/"> APIDataCTS </NavLink></a></li>
                                <li><a target="_blank" className="active2"><NavLink exact activeClassName="active_class" to="/APIDatastate"> APIDatastate </NavLink></a></li>
                                <li><a target="_blank" className="active3"><NavLink exact activeClassName="active_class" to="/APIDatatested"> APIDatatested </NavLink></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Menu;