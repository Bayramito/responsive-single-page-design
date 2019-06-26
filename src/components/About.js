import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about-section">
                    <div className="col-md-6 offset-md-6">
                        <div className="slogan">
                            <h1>No paint <br /> property <br /> managment</h1>
                        </div>
                        <div className="information">
                            <div className="info">
                                <i className="fas fa-check"></i>
                                <span>No sale no fee</span>
                            </div>
                            <div className="info">
                                <i className="fas fa-check"></i>
                                <span>20% off legal costs</span>
                            </div>
                            <div className="info">
                                <i className="fas fa-check"></i>
                                <span>Free photography and video</span>
                            </div>
                            <div className="info">
                                <i className="fas fa-check"></i>
                                <span>Professional friendly service</span>
                            </div>
                            <div className="info">
                                <a href="0" className="btn btn-primary">
                                    Find out more
                                </a>
                                <h4>Call 01482 293405 or <a href="0"><u>send us a message</u></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About
