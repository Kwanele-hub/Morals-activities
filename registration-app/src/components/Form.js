import React from 'react';

class Form extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            name:'',
            surname:'',
            Id: '',
            age:'',
            allergies: '',
            address: '',
        }
        // this.handleSubmit=this.handleSubmit()

    }



    render(){
        return(
            <div className='form'>
                <fieldset>
                <form>
                    <input type='text' placeholder='name' value={this.name}></input>
                    
                    <input type='text' placeholder='surname' value={this.surname}></input>
                    
                    <input type='text' placeholder='Id' value={this.Id}></input>
                    
                    <input type='text' placeholder='Age' value={this.age}></input>
                    
                    <input type='text' placeholder='Allergies' value={this.allergies}></input>

                    <input type='text' placeholder='Address' value={this.address}></input>

                    <input type='submit'></input>
                </form>

                </fieldset>
                
            </div>
        )
    }
}
export default Form
