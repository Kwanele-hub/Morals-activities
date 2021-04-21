import React, {useState} from 'react';


function Form() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    workingOn: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, workingOn } = formData;
    if ((firstName, lastName, workingOn)) {
      setFormData({
        firstName: "",
        lastName: "",
        workingOn: "",
      });
    }
  };
  const { firstName, lastName, workingOn } = formData;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="firstName" placeholder="FirstName:"  onChange={handleChange} value={firstName}
        />
        <input
          type="text" name="lastName" placeholder="LastName:"  onChange={handleChange} value={lastName}
        />
        <input
          type="text" name="workingOn" placeholder="WorkingOn:" onChange={handleChange} value={workingOn}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;