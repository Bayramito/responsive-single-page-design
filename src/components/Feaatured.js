import React, { Component } from 'react'

class Feaatured extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="featured-section">
                    <div className="container">
                        <div className="featured-active">
                            <div className="col-lg-8 m-auto">
                                <div className="row">
                                    <span className="featured-title"><i className="fas fa-rocket"></i> FEATURED PROPERTIES</span>
                                </div>
                                <div className="row bg-light-t">
                                    <div className="featured-inner col-md-8">
                                        <div className="location pl-5">
                                            <span>
                                                <i className="fas fa-map-marker-alt"></i> Hornsea
                                        </span>
                                            <span>
                                                <i className="fas fa-home"></i> Semi-detached
                                        </span>
                                            <h1 className="pt-3 ">12 Cheyene Walk</h1>
                                        </div>
                                        <div className="pl-5 pt-3 text-center d-flex specs">
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
                                    <div className="featured-prize col-md-3 d-flex text-center">
                                        <a className="btn-status" href="0">FOR SALE</a><a className="btn-price"
                                            href="0">£175,000</a>
                                    </div>
                                </div>
                                <div className="row bg-light-t">
                                    <div className="f-details col-12">
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            4 Bedroom Detached Home
                                    </span>
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            Amazing Views Over Hornsea
                                    </span>
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            Elegant Interior
                                    </span>
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            Large Gardens
                                    </span>
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            Extensive Garages Outbuildings
                                    </span>
                                        <span className="f-detail">
                                            <i className="fas fa-check"></i>
                                            Viewing is Essential
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="featured-list">
                            <a href="1" className="f-list-item active">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>CHEYENE WALK, HORNSEA</h4>
                                    <span>4 BED ROOMS</span>
                                </div>
                            </a>
                            <a href="2" className="f-list-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>WESTWOOD AV, HORNSEA</h4>
                                    <span>3 BED ROOMS</span>
                                </div>
                            </a>
                            <a href="3" className="f-list-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>MAIN ROAD, HORNSEA</h4>
                                    <span>2 BED ROOMS</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Feaatured
