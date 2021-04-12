import React from 'react';


class Lions extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        num1: '',
        num2: '',
        result: 0
      };
      // this._changeNum1 = this._changeNum1.bind(this);
      // this._changeNum2 = this._changeNum2.bind(this);
    }
    
    _changeNum1(event) {
      if (event.target.validity.valid) {
        var newNum1 = +(event.target.value)
        this.setState({
            num1: newNum1,
            result: newNum1 + this.state.num2
          }); 
      }
    }
    
      _changeNum2(event) {
      if (event.target.validity.valid) {
        var newNum2 = +(event.target.value)
        this.setState({
            num2: newNum2,
            result: this.state.num1 + newNum2
          }); 
      }
    }
  
    render() {
      return (
        <div className='row'>
          <div className='column'>
          <img src='https://cdn.pixabay.com/photo/2019/05/14/14/31/white-lion-family-4202566_960_720.jpg'/>
          </div>
          <div>
            <p>female Lions:</p>
            <input type="number" value={this.state.num1} onChange={(e) => this._changeNum1(e)}  />
          </div>
          <div>
            <p>Male Lions:</p>
            <input type="number" value={this.state.num2} onChange={(e)=> this._changeNum2(e)} step="any" />
          </div>
          <p>Total Number of Alive Lions: {this.state.result}</p>
        </div>
      )
    }  
  }  
export default Lions;



