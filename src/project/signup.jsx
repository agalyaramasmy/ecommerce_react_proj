import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signups() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
 const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value, name);
    console.log(value);
    setFormData(prev=>({
      ...prev,
      [name] : value
    }));
    console.log(formData)
    
  };

const handleSubmit =  (e) => {
//   e.preventDefault();
  // debugger
  console.log(formData)
  // debugger
  axios.post("http://localhost:3000/datas", formData).then((res)=>{
    // debugger
    console.log(res);
    alert("Data saved")
    })
    .catch(error => {
        console.error('Error fetching data:', error);
      });


  console.log(formData)
};


  return (
    <div className="login_container">
      <div className="login">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="login_fields">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
            //   value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            //   value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
            //   value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Continue</button>
        </form>

        <p className="login_acc">
          Already have an Account?{' '}
          <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/">
            login here
          </Link>
        </p>
        {/* <div className="signin">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div> */}
      </div>
    </div>
  );
}

export default Signups;


