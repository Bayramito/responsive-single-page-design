import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="overlay" />
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <div className="container">
                            <a href="/" className="navbar-brand">
                                <i className="fas fa-door-open"></i> Property
                    </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse"
                                data-target="#responsiveNavbar">
                                <span className="navbar-toggler-icon light"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="responsiveNavbar">
                                <ul className="navbar-nav ml-auto top-navigation">
                                    <li className="nav-item"><a href="1" className="nav-link">Buy</a></li>
                                    <li className="nav-item"><a href="2" className="nav-link">Rent</a></li>
                                    <li className="nav-item"><a href="3" className="nav-link">Sell</a></li>
                                    <li className="nav-item"><a href="4" className="nav-link">Landlords</a></li>
                                    <li className="nav-item"><a href="5" className="nav-link">Auctions</a></li>
                                    <li className="nav-item"><a href="6" className="nav-link">Contact</a></li>
                                </ul>
                            </div>

                        </div>
                    </nav >

                    <div className="hero-section container">
                        <h1 className="p-5 mb-4">Your search starts here.</h1>
                        <div className=" col-md-6 search-wrapper mb-3">
                            <input type="text" placeholder="Searach by location or postcode" />
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="popular col-md-6">
                            Popular...
                    <div className="popular-item">
                                <a href="1">Northgate</a>
                            </div>
                            <div className="popular-item">
                                <a href="2">HU18</a>
                            </div>
                            <div className="popular-item">
                                <a href="3">Level</a>
                            </div>
                            <div className="popular-item">
                                <a href="4">Hornsea</a>
                            </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;
