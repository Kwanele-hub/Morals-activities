import React from 'react';


class Form extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            formData: {firstName: '',surname: '',identity: '',age: '',allergies: '',address: '',},
            personalDetails:[]


            
    }
    
    }
    // namehandler = (event) => {
    //     this.setState({
    //         firstName: event.target.value
    //     });

    // }

    // surnamehandler = (event) => {
    //     this.setState({
    //         surname: event.target.value
    //     });
    // }

    // identityhandler = (event) => {
    //     this.setState({
    //         identity: event.target.value

    //     })
    // }
    // agehandler = (event) => {
    //     this.setState({
    //         age: event.target.value
    //     })
    // }

    // allergehandler = (event) => {
    //     this.setState({
    //         allergies: event.target.value
    //     })
    // }

    // homeAddresshandler = (event) => {
    //     this.setState({
    //         address: event.target.value

    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            personalDetails: [...this.state.personalDetails, this.state.formData]
        })
        console.log('this is from the state',this.state)
       
        // this.state.data.split('').map(function(item, data){
        //     return <li key={item}>Test</li>
        //   })

    
    }
     handleChange = (e) => {
        var { formData } = this.state
    
        this.setState({ formData: { ...formData, [e.target.name]: e.target.value } })
      }


    savePersonalInfo(event) {
        this.setState({ status: event.target.value })
    }
    
    




    render() {
        // const { firstName, surname, age, identity, address,allergies } = this.state.formData
        return (
            <div className='form'>
              
    
            
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='name' value={this.state.firstName} onChange={this.handleChange}></input>

                        <input type='text' placeholder='surname' value={this.state.surname} onChange={this.handleChange}></input>
                        <input type='number' placeholder='Identity' value={this.state.identity} onChange={this.handleChange}></input>

                        <input type='number' placeholder='Age' value={this.state.age} onChange={this.handleChange}></input>

                        <input type='text' placeholder='Allergies' value={this.state.allergies} onChange={this.handleChange}></input>

                        <input type='text' placeholder='Address' value={this.state.address} onChange={this.handleChange}></input>

                        <button type='submit'>Submit</button>
                        
                        <div onChange={(event) => this.savePersonalInfo(event)}></div>
                        
                    </form>
                    <table style={{ width: "50%" }}><tbody>
                    {this.state.personalDetails.map((student, index) => <tr>
          <td>{student.firstName} </td>
          <td>{student.surname} </td>
          <td>{student.age} </td>
          <td>{student.identity} </td>
          <td>{student.age} </td>
        </tr>)}
                    </tbody>
        
      </table>

                </fieldset>

            </div>
        )
    }
}
export default Form
