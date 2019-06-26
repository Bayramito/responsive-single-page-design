import React, { Component } from 'react'

class Latest extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="latest-section">
                    <div className="latest-title container">
                        <div className="col-md-8 col-lg-9 p-0">
                            <h2> Latest properties...</h2>
                        </div>
                        <div className="col-md-4 col-lg-3 text-center p-0">
                            <a href={"latest"} className="btn btn-lg btn-primary">View all properties</a>
                        </div>
                    </div>

                    <div className="latest-items container">
                        <div className="latest-item">
                            <div className="item-head">
                                <img src={"img/building-4.jpg"} alt="" />
                                <div className="item-status">
                                    <a className="btn-status" href="1">FOR SALE</a><a className="btn-price" href="1">£175,000</a>
                                </div>
                            </div>
                            <div className="item-description pt-3">
                                <div className="location p-3">
                                    <h2 className="text-center">16 Westwood Ave.</h2>
                                    <span>
                                        <i className="fas fa-map-marker-alt" /> Hornsea
                                 </span>
                                    <span>
                                        <i className="fas fa-home" /> Semi-detached</span>
                                </div>
                                <div className="p-3 text-center specs">
                                    <span>
                                        <h2>4</h2> Bedrooms
                                    </span>
                                    <span>
                                        <h2>2</h2> Bathrooms
                                    </span>
                                    <span>
                                        <h2>1</h2> Parking
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="latest-item">
                            <div className="item-head">
                                <img src="img/building-2.jpg" alt="" />
                                <div className="item-status">
                                    <a className="btn-status" href="2">FOR SALE</a><a className="btn-price" href="2">£175,000</a>
                                </div>
                            </div>
                            <div className="item-description pt-3">
                                <div className="location p-3">
                                    <h2 className="text-center">16 Westwood Ave.</h2>
                                    <span>
                                        <i className="fas fa-map-marker-alt" /> Hornsea
                                    </span>
                                    <span>
                                        <i className="fas fa-home" /> Semi-detached</span>
                                </div>
                                <div className="p-3 text-center specs">
                                    <span>
                                        <h2>4</h2> Bedrooms
                                    </span>
                                    <span>
                                        <h2>2</h2> Bathrooms
                                    </span>
                                    <span>
                                        <h2>1</h2> Parking
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="latest-item">
                            <div className="item-head">
                                <img src="img/building-3.jpg" alt="" />
                                <div className="item-status">
                                    <a className="btn-status" href="3">FOR SALE</a><a className="btn-price" href="3">£175,000</a>
                                </div>
                            </div>
                            <div className="item-description pt-3">
                                <div className="location p-3">
                                    <h2 className="text-center">16 Westwood Ave.</h2>
                                    <span>
                                        <i className="fas fa-map-marker-alt" /> Hornsea
                                    </span>
                                    <span>
                                        <i className="fas fa-home" /> Semi-detached</span>
                                </div>
                                <div className="p-3 text-center specs">
                                    <span>
                                        <h2>4</h2> Bedrooms
                                    </span>
                                    <span>
                                        <h2>2</h2> Bathrooms
                                    </span>
                                    <span>
                                        <h2>1</h2> Parking
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Latest;
