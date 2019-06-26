import React, { Component } from 'react'

class Feedback extends Component {

    constructor() {
        super();

        this.state = {
            feedBacks: []
        }
    }

    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then(feedBacks => this.setState({ feedBacks }, () => console.log(feedBacks)));
    }
    render() {
        return (
            <React.Fragment>
                <div className="feedback-section">
                    <div className="container">
                        <h1>People are talking about us</h1>
                        <div className="row">
                            <div className="col-md-10">
                                <h3>And we think its great news</h3>
                            </div>
                            <div className="col-md-2 arrows">
                                <a href="0">
                                    <i className="fas fa-arrow-left"></i>
                                </a>
                                <a href="0">
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="feeds">
                            {this.state.feedBacks.map(feedBack =>
                                <div key={feedBack.id} className="feed">
                                    <img src="/img/user.png" alt="0" />
                                    <div className="feed-message">
                                        <h2>{feedBack.title}</h2>
                                        <p>{feedBack.message}</p>
                                        <span>{feedBack.action}</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Feedback
