import React from 'react'


  const { items} = props;
  function items() {
      return (
          <div>
              <div className="list-container">
        {this.state.items.map((item, id) => {
          return <div className='item-container' key={id} >
                    
                      <img src={item.src} alt={item.name} className="img" />
                      <h3>{item.name}</h3>
                    
                    <b>R{(item.cost).toFixed(2)}</b>
                    <button onClick={() => this.add(item.name,item.cost)}>Purchase Car</button>
                    
                </div>
        })}
      </div>
          </div>
      )
  }
  
  export default items
  