import React, { Component } from 'react';
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="foot">
            <footer className="footer">
                <div className="container">
                    <span id="footer-text">Google Books Search App &nbsp;<i id="react" class="fab fa-react"></i></span>
                </div>
            </footer>
            </div>
        )
    }
}

export default Footer;