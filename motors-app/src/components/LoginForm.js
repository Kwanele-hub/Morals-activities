import React, {useState} from 'react'
import { Link } from "react-router-dom";


function LoginForm() {
    const [state, setState] = useState({
      fname: "",
      lname: "",
      email: "",
      password:"",
      
      
    });
  
    const handleChange = (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setState({
        ...state,
        [e.target.name]: value,
      });
    };
  
    return (
      <div>
        <h1>Welcome!</h1>
        <section >
        <form>
          <label>
            First Name:{" "}
            <input
              type="text"
              name="fname"
              value={state.fname}
              onChange={handleChange}
            />
          </label>{" "}
          <label>
            Last Name:{" "}
            <input
              type="text"
              name="lname"
              value={state.lname}
              onChange={handleChange}
              
            />
          </label>
          
          <label>
            Email address:{" "}
            <input
              type="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required={true}
            />
          </label>
        </form>
        </section>
        <table>
            <tr>
            <th>Name</th>
          <th>Surname</th>
          <th>Email address</th>
          <th>Password</th>
            </tr>
            <td>{state.fname} </td>
          <td>{state.lname}</td>
          <td>{state.email} </td>
          <td>{state.password}</td>
        </table>
        <Link to="/about"> 
      <button>SUBMIT</button>
      </Link>
        
        
      </div>
    );
  }
export default LoginForm
