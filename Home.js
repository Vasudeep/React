import React, {Component} from 'react'

import { Link } from 'react-router-dom'

export class Home extends Component {
    render() {
        return (
            <div className="home">

            <header className="App-header">
            <div className="link">
                
                <Link to="/" className="la"><img src="logo-01.png"></img></Link>
                <Link to="/Credit-card" className="credit-card">Credit Card</Link>
                <Link to="/Saving-account" className="saving-account">Saving Account</Link>
                <Link to="/Loan" className="loan">Loan</Link>
                <Link to="/Instant-loan" className="instant-loan">Instant Loan</Link>
                <Link to="/Investment" className="investment">Investment</Link>
                <Link to="/Gst-software-app" className="gst">GST Software App</Link>
                <Link to="/Blogs" className="blogs">Blogs</Link>
                <Link to="/Contact" className="contact">Contact Us</Link>
                
            </div>
            </header>
            <br></br>
            <br></br>
            
            <div className="section1">
            <br></br>
          <h3><hr></hr>Your Customized Online Banking Partner</h3>
          <p>Plan your financial future. Compare, analyse & apply for various banking, credit
            and investment solutions based on your specific requirements.

            <hr></hr>
            </p>
          
        </div>
                
            </div>
        )
    }
}

export default Home