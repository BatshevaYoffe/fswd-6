import React, { useState } from 'react';
import './login.css';
import { Outlet, json } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputsN, setName] = useState({name: ""});
    const [inputsP, setPass] = useState({password: ""});
    const [inputsiexist, setinputsiexist] = useState(false);

    const navigate = useNavigate();

    const handleChangeName = (event) => {
        const name = event.target.value;
        setName({name:name});
    }

    const handleChangePass = (event) => {
        const value = event.target.value;
        setPass({password:value});
    }

    const handleSubmit = async(event) => {
        console.log(inputsP.password);
        console.log(inputsN.name);
        // fetch(`localhost:3000/aa`)
        event.preventDefault();
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: 
          JSON.stringify(
            {
            name: "bat7",
            password: "1234"
         })
        })
        .then(response => {
          if(response.status==200){
            console.log(response.status); // הדפסת הסטטוס
            // localStorage.setItem("myData", JSON.stringify('bat'));
            setinputsiexist(true);
            navigate(`/content/user/5`);
          }
        })
          .catch(error => console.error(error));
    }

    const g = (num) => {
        let str = num.toString(); // ממיר את המספר למחרוזת
        let decimalIndex = str.indexOf('.'); // מוצא את המיקום של הנקודה במחרוזת
        let decimalPart = str.substring(decimalIndex + 1); // מחזיר את החלק העשרוני של המספר
        return decimalPart;
    }

    return (
        <div className="form-container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label className="label">Username:</label>
              <input
                type="text"
                name="name"
                value={inputsN.name}
                onChange={handleChangeName}
                className="input"
              />
            </div>
            <div className="input-container">
              <label className="label">Password:</label>
              <input
                type="password"
                name="password"
                value={inputsP.password}
                onChange={handleChangePass}
                className="input"
              />
            </div>
            <div className="button-container">
              <input type="submit" value="Submit" className="submit-button" />
            </div>
          </form>
        </div>
      </div>
    )
}; 
export default Login;