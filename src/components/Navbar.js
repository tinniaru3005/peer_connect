import React, { Component } from 'react';
import blockies from 'ethereum-blockies';
import './Navbar.css';

class Navbar extends Component {
    render() {
        const { account } = this.props;

        // Generate the avatar
        const avatar = blockies.create({
            seed: account, // seed used to generate icon data, default: random
            size: 8, // width/height of the icon in blocks, default: 8
            scale: 4, // width/height of each block in pixels, default: 4
        }).toDataURL();

        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="http://www.dappuniversity.com/bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Peer Connect
                </a>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                        <small>
                            <img
                                src={avatar}
                                alt="avatar"
                                className="avatar"
                            />
                            <span id="account">{account}</span>
                        </small>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;