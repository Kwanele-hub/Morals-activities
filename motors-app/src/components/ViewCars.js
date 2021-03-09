import React from 'react'
import {Link} from 'react-router-dom';
import Search from './data';

export default class ListOfCars extends React.Component {
  state = {
          items: [
            { id: 'item_1001',
              name:'Maserati' ,
              src: 'https://cdn.pixabay.com/photo/2016/09/06/13/37/maserati-gran-turismo-1649119_960_720.jpg',
              cost: 100000.000,
              qty: 0,
              location:"Fourways",
            },
            { id: 'item_1002',
              name:'BMW' ,
              src: "https://cdn.pixabay.com/photo/2019/10/21/03/48/bmw-4565066_960_720.jpg",
              cost: 50000,
              qty: 0,
              location:"Fourways"
            },
            { id: 'item_1003',
              name:'Porsche' ,
              src: "https://cdn.pixabay.com/photo/2018/04/22/17/24/porsche-911-3341711_960_720.jpg",
              cost: 130000.00,
              qty: 0,
              location:'RandPark Ridge'
            },
            { id: 'item_1004',
              name:'Infinty' ,
              src: 'https://cdn.pixabay.com/photo/2019/11/02/19/24/car-4597207_960_720.jpg',
              cost: 50000.99,
              qty: 0,
              location:"Sandton"
            },
            {
              id: 'item_1005',
              name:'Ford' ,
              src: 'https://cdn.pixabay.com/photo/2020/04/30/23/30/car-5114930_960_720.jpg',
              cost: 780000.80,
              qty: 0,
              location:"Randburg"
            },
            {
              id: 'item_1006',
              name:'BMW' ,
              src: 'https://cdn.pixabay.com/photo/2016/08/24/15/07/bmw-1617168_960_720.jpg',
              cost: 10000.00,
              qty: 0,
              location:"Midrand"
            },
            { id: 'item_1007',
              name:'Audi' ,
              src: 'https://cdn.pixabay.com/photo/2018/04/08/07/48/car-3300587_960_720.jpg',
              cost: 100000.50,
              qty: 0,
              location:"Douglasdale"
            },
            { id: 'item_1008',
              name:'Mercedes Benz' ,
              src: 'https://cdn.pixabay.com/photo/2016/03/30/20/20/auto-1291492_960_720.jpg',
              cost: 3000000,
              qty: 0,
              location:"Oliven"
            },
            
          ],
          total_items: 0,
          total:0,
          packaging: 0,
          popup:false,
          thank_popup:false,
      }
  add = (name,cost) => {
   
    this.state.items.map((item, id) => {
        if (item.name == name) {
            item.qty += 1;
        }
      

    })
    this.setState({
      total_items: this.state.total_items + 1,
      total: this.state.total + cost,
    });
    
  }
  

  popup = () => {
    this.setState({
      popup: !this.state.popup
    });
  }
  thank_popup = () => {
    this.setState({
      thank_popup: !this.state.thank_popup
    });
  }
  reload = () => {
      window.location.href = window.location.href;
  }
  render() {
    return (
      <div>
        <div className='navbar'>
            {/* <Search/> */}
            <h1>SPHE'S MOTORS</h1>
          <button className="popup_btn">
          {this.state.total_items != 0 ? (<span>{this.state.total_items}</span>):null }</button>
        </div>
        <div className="list-container">
        {this.state.items.map((item, id) => {
          return <div className='item-container' key={id} >
                    
                      <img src={item.src} alt={item.name} className="img" />
                      <h3>{item.name}</h3><br></br>
                      <h3>{item.location}</h3>
                    
                    <b>R{(item.cost).toFixed(2)}</b>
                    <button onClick={() => this.add(item.name,item.cost)}>Purchase Car</button>
                    
                </div>
        })}
      </div>
        <div >
          {
          this.state.total_items != 0 ? (<div className="popup" >
            <div className="cart">
              <h2>Your Request</h2>
                {this.state.items.map((item1, id1) => {

                  return(
                    <div key={id1}>
                      {item1.qty != 0 ?
                        (<div key={id1} className="cart_item">
                           <span><h3>{item1.name} ({item1.qty})</h3>
                           <h3>R{(item1.cost ).toFixed(2)}</h3></span>
                        </div>): null}
                    </div>
                  );

                })}
              </div>
            <div>
              <div className="final_price">
              </div>
              <div className="final_price">
                <h3>Total Price:</h3>
                <h3>R{(this.state.total + this.state.packaging).toFixed(2)}</h3>
              </div>
              <Link>
              </Link>
              <button className="order_btn" onClick={() => this.popup()}>Purchase now</button>
            </div>
          </div>) : (<div className="popup" ></div>)}
        </div>
        <div className="orderpage">

          {
            this.state.popup ?
          (this.state.total_items != 0 ? (<div className="order" >
            <div className="cart">
              <h1>Your Request</h1>
                <div className="cart_left">
                    {this.state.items.map((item1, id1) => {

                      return(
                        <div key={id1}>
                        {item1.qty != 0 ?
                          (<div key={id1} className="cart_item">
                             <img src={item1.src} />
                             <span className="cart_info">
              
                             </span>
                          </div>): null}
                        </div>
                        );})}
                  </div>
                </div>
                <div className="cart_right">
                  <div className="final_price">
                  </div>
                  <div className="final_price">
                    <h3>Total Price:</h3>
                    <h3>R{(this.state.total ).toFixed(2)}</h3>
                  </div>
                <Link to="./paypal">
                <button className="order_btn" onClick={() => this.thank_popup()}>Purchase</button>
                </Link>
                </div>
          </div>) : null):null}

          {
            this.state.thank_popup ? (<div className="thank_you">
              <h1>thank you</h1>
              <p>We belive in gratitude and appreciation.</p>
              <Link to="./">
              <button className="order_btn" >LOGOUT</button>
              </Link>
             
            </div>) : null
          }
        </div>        
      </div>
    );

  }
}