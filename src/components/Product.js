import React, { Component } from 'react';
import json from '../products.json';

//Class Component

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], len: 0, quant: 1, cartItems: [] };
        this.state.cartItems = (localStorage.getItem('mycart'))
    }

    componentDidMount() {
        this.setState({ proData: json.products })
    }

    addCart = (obj) => {
        window.onbeforeunload = function (e) { localStorage.clear(); };

        if (localStorage.getItem('mycart') != undefined) {
            const arr = JSON.parse(localStorage.getItem('mycart'));

            let idArrays = [];
            // Get list of all ids
            arr.forEach(data => {
                idArrays.push(data.id);
            });

            // check if the product is present
            if (idArrays.includes(obj.id)) {
                arr.forEach(data => {
                    if (data.id === obj.id) {
                        data.quantity += 1;
                        alert("Product Quantity Increased")
                    }
                });
            }
            // if not then just add the product
            else {
                arr.push(obj);
                alert("Product Added to Cart");
            }

            //console.log(arr);
            localStorage.setItem('mycart', JSON.stringify(arr));
            this.setState({
                len: this.state.len + 1,
                cartItems: arr
            })
        }
        else {
            const arr = [];
            arr.push(obj);
            localStorage.setItem('mycart', JSON.stringify(arr));
            alert("Product Added to Cart");
            this.setState({
                len: this.state.len + 1,
                cartItems: arr
            })

        }
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h2 className="text-center">Shopping.com</h2>
                    <hr />
                    <div>
                        <nav className="nav">
                            <a className="nav-link active" href="abc">Active</a>
                            <a className="nav-link" href="abc">Products</a>
                            <button style={{ border: 'none', backgroundColor: 'lightblue' }}><i className="fas fa-shopping-cart"></i> Cart <span className="text-danger">({this.state.len})</span></button>
                        </nav>

                        <div className="row">
                            {this.state.proData.map((value, id) =>
                                <div className="col-3 m-auto" key={id}>
                                    <div className="card" style={{ width: '15rem', marginTop: '30px' }}>
                                        <img className="card-img-top" src={value.image} alt="not found" height='150px' width="150px" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.pname}</h5>
                                            <p className="card-text">Price: {value.price}</p>
                                            <button className="btn btn-primary" onClick={() => this.addCart(value)}>
                                                <i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='jumbotron'>
                    <h2 className="text-center">Cart</h2>
                    <div className="row">
                        {/* <Cart displayCart={this.displayCart()}/> */}

                        {this.state.cartItems != null ? this.state.cartItems.map((value, index) => {

                            console.log(value);
                            return (
                                <div>
                                    <div className="col-3 m-auto" key={index}>
                                        <div className="card" style={{ width: '15rem', marginTop: '20px' }}>
                                            <img className="card-img-top" src={value.image} alt="not found" height='150px' width="150px" />
                                            <div className='card-body'>
                                                <h5 className="card-title">{value.pname}</h5>
                                                <p className="card-text">Price: {value.price}</p>
                                                <p className="card-text">Quantity: {value.quantity}</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            )
                        }
                        ) : ""}
                    </div>
                    <div >
                        <hr />
                        {/* <p>Total Price : {this.state.cartItems.price}</p> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
