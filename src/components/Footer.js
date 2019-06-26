import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="footer-section">
                    <div className="container">
                        <div className="fs-items text-center">
                            <div className="fs-item">
                                <h3><i className="fas fa-door-open"></i>Property</h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsa totam
                                    blanditiis temporibus tempora animi, sequi sapiente est minima fugiat minus excepturi
                                    non perspiciatis sint amet odio molestiae quod! Repellat.
                            </p>
                                <div className="social-links">
                                    <a href="0">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="0">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="0">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="0">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                    <a href="0">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="fs-item">
                                <h4>Buying</h4>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                            </div>
                            <div className="fs-item">
                                <h4>Selling</h4>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                            </div>
                            <div className="fs-item">
                                <h4>Landlords</h4>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                                <p>- Lorem, ipsum dolor sit</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer
