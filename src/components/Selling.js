import React, { Component } from 'react';

class Selling extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="selling-property">
                    <div className="container">
                        <div className="col-lg-8">
                            <h4 className="s-subtitle">Out agent can make the difference</h4>
                            <p className="py-3">Testt</p>
                        </div>
                        <div className="selling-specs">
                            <div className="selling-spec">
                                <i className="fas fa-database" />
                                <h4>No sale no fee</h4>
                            </div>
                            <div className="selling-spec">
                                <i className="fas fa-box-open" />
                                <h4>20% off legal costs</h4>
                            </div>
                            <div className="selling-spec">
                                <i className="fas fa-camera" />
                                <h4>Free photography and video</h4>
                            </div>
                            <div className="selling-spec">
                                <i className="fas fa-handshake" />
                                <h4>Professional friendly service</h4>
                            </div>
                            <div className="selling-spec">
                                <i className="fas fa-gem" />
                                <h4>3D property walktrough</h4>
                            </div>
                        </div>

                        <div className="contact-agents">
                            <h4>Contact our agents for help</h4>
                            <div className="agent">
                                <img className="img-thumbnail rounded-circle" src="/img/user.png" alt="0" />
                                <div className="agent-info">
                                    <span><strong>Christopher Burkill</strong> - Property sales</span>
                                    <p>
                                        <i className="fas fa-phone" />
                                        01482 238743
                                    </p>
                                    <a href="0">
                                        <i className="fas fa-envelope-square" /><u>Send Chris a message</u>
                                    </a>
                                </div>
                            </div>
                            <div className="agent">
                                <img className="img-thumbnail rounded-circle" src="/img/user2.png" alt="0" />
                                <div className="agent-info">
                                    <span><strong>Frances Burkill</strong> - Property sales</span>
                                    <p>
                                        <i className="fas fa-phone" />
                                        01482 23874
                                    </p>
                                    <a href="0">
                                        <i className="fas fa-envelope-square" /><u>Send Fran a message</u>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Selling
