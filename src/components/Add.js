import React, { Component } from 'react'

class Add extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="add-property">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 ap-left">
                                <h3>We'll email your property</h3>
                            </div>
                            <div className="col-lg-8 ap-right">
                                <form action="" method="POST">
                                    <div className="row ap-fields">
                                        <input type="text" name="" />
                                        <input type="text" name="" />
                                        <button type="submit" className="btn-join btn-primary">
                                            <i className="fas fa-envelope"></i>
                                            Join</button>
                                    </div>
                                    <div className="row ap-options">
                                        <label htmlFor="houses">
                                            <input type="checkbox" name="" id="houses" />
                                            <span>Houses</span>
                                        </label>
                                        <label htmlFor="flats">
                                            <input type="checkbox" name="" id="flats" />
                                            <span>Flats</span>
                                        </label>
                                        <label htmlFor="for_sale">
                                            <input type="checkbox" name="" id="for_sale" />
                                            <span>For sale</span>
                                        </label>
                                        <label htmlFor="for_rent">
                                            <input type="checkbox" name="" id="for_rent" />
                                            <span>For rent</span>
                                        </label>
                                        <label htmlFor="price">
                                            <input type="text" name="" id="price" placeholder="£" />
                                            <span>Prices around</span>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Add
