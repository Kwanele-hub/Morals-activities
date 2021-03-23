import React from 'react'

const { useEffect, useState } = React;

const useSignUpForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

function Main() {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  const name = "Aphrodita";
  const aboutAthlete = "Hi my name is " + name;
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1>Car Registration Form</h1>
        </div>
        <section>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            value={inputs.firstName}
            placeholder="First Name"
            required={true}
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            value={inputs.lastName}
            placeholder="Second Name"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="interests"
            value={inputs.interests}
            placeholder="Short Bio"
          />
          <input
            onChange={handleInputChange}
            type="url"
            name="photo"
            value={inputs.photo}
            placeholder="Photo URL"
          />
          <input
            onChange={handleInputChange}
            type="text"
            name="location"
            value={inputs.location}
            placeholder="📍 Location"
          />
          <button> Submit</button>
        </section>
      </div>
      <table>
        <tr>
        <div className="header">
          <h1 className="">Athlete Bio</h1>
        </div>
        <div className="form">
          <div className="mainInfo">
            <img
              src={
                inputs.photo
                  ? inputs.photo
                  : ""
              }
              alt="Logo"
            />
            
                <th>{inputs.firstName ? inputs.firstName : "Annie"}</th>
                <th>{inputs.lastName ? inputs.lastName : "Thorisdottir"}</th>
              </div>
              <div className="location">
                <p>📍 {inputs.location ? inputs.location : "Iceland"}</p>
              
          </div>
        </div>
        <div className="interests">
          <p>
            {inputs.interests
              ? inputs.interests
              : ""}
          </p>
        </div>
        </tr>
      </table>
    </div>
  );
}

export default Main
