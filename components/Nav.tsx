import Link from 'next/link';
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';

class Nav extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }

    handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
    this.setState({menuOpen: false})
    }

    render() {

        return (
            <div className="main-nav">
                
                    <MediaQuery maxWidth={992}>
                        <Menu left noOverlay isOpen={this.state.menuOpen}
                            onStateChange={(state) => this.handleStateChange(state)}
                        >
                        <ul>
                        <li>
                            <Link href="/">
                                <a onClick={() => this.closeMenu()}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="about">
                                <a onClick={() => this.closeMenu()}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="work">
                                <a onClick={() => this.closeMenu()}>Work</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="contact">
                                <a onClick={() => this.closeMenu()}>Contact</a>
                            </Link>
                        </li>
                        </ul>
                        </Menu>
                    </MediaQuery>
                    <MediaQuery minWidth={993}>
                        <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work">
                                <a>Work</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                        </ul>
                    </MediaQuery>
            </div>
        );
    }
}

export default Nav;