import React, {useState} from 'react';
import './index.css';

function App() {
  const[values, setValues] = useState({
    firstName : "",
    lastName : "",
    email : "",
  })

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})
  } 
  const handleLastNameInputChange = (event) => {
    setValues({...values, lastName: event.target.value})
  } 
  const handleemailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.firstName &&  values.lastName && values.email){
      setValid(true);
    }
    setSubmit(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
      {submit && valid ? <div className='success-message'>Registration Successful!</div> : null} 
        <input type="text" className="form-field" id="first-name" placeholder="First Name" value={values.firstName} onChange={handleFirstNameInputChange}/>{submit && !values.firstName ? <span>please enter name</span> : null}
        <input type="text" className="form-field" id="last-name" placeholder="Last Name" value={values.lastName} onChange={handleLastNameInputChange}/>{submit && !values.lastName ? <span>please enter last name</span> : null}
        <input type="text" className="form-field" id="email" placeholder="E-mail" value={values.email} onChange={handleemailInputChange}/>{submit && !values.email ? <span>please enter email</span> : null}
        <button type="submit" className="form-field">Submit</button>
      </form>
    </div>
  );
}

export default App;
