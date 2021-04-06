
import {useEffect, useState } from "react"
import { auth } from "../../utils/firebase";

import "./Register.css"



const Register = ({
    history
}) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // const username = e.target.username.value;
        // const firstName = e.target.firstName.value;
        // const lastName = e.target.lastName.value;
        // const coutry = e.target.country.value;
        // const town = e.target.town.value;
        // const avatar = e.target.avatar.value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log('Register');
                history.push('/');
            });
    }

    return(
        <div className="form-wrapper">
            <h1>Register</h1>
            <form onSubmit={onRegisterSubmitHandler}>
            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    placeholder="Enter your e-mail" />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    placeholder="Enter your username" />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    placeholder="Enter your First Name" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    placeholder="Enter your Last Name" />
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <input 
                    type="text" 
                    name="country" 
                    id="country"
                    placeholder="Enter your Country" />
            </div>
            <div className="form-group">
                <label htmlFor="town">Town</label>
                <input 
                    type="text" 
                    name="town" 
                    id="town"
                    placeholder="Enter your Town" />
            </div>
            <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input 
                    type="text" 
                    name="avatar" 
                    id="avatar"
                    placeholder="Enter your avatar link" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="Enter your password" />
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword"
                    placeholder="Enter your password" />
            </div>
            <input type="submit" value="Register"/>
            </form>
        </div>
    );
}

export default Register;