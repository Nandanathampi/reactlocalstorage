import React, { Component } from 'react';
export default class LocalData extends Component {
        priceData;
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleFormSubmit = this.handleFormSubmit.bind(this);
            this.state = {
                title: '',
                description: '',
                price: ''
            }
        }
     
    handleChange= (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
   
    handleFormSubmit(e) {
        e.preventDefault()
       localStorage.setItem('price',JSON.stringify(this.state));
    }
     
    
    componentDidMount() {
        this.priceData = JSON.parse(localStorage.getItem('price'));
     
        if (localStorage.getItem('price')) {
            this.setState({
                title: this.priceData.title,
               description: this.priceData.description,
               price: this.priceData.price
        })
    } else {
        this.setState({
            title: '',
            description: '',
            price: ''
        })
    }
    }
     
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleFormSubmit} style={{ 'background-color': 'red', 'width': '180px', 'margin-left': '-40px', 'margin-top': '40px', 'height': '60px' }}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange}  />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
    }
    
