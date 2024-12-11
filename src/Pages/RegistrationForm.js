import React, { useState } from "react";
import "./RegistrationForm.css"

function RegistrationForm() {
    const [formData, setFormData] = useState({name: "", password: "", confirmPassword: ""});//useState returns an array
    const [updatedErrors, setupdatedErrors] = useState({name: "", password: "", confirmPassword: ""});

    function handleChange(event) {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function passwordStrength() {
        if (!formData.password) {
            return "Password is required!";
        }
    
        const hasUpperCase = /[A-Z]/.test(formData.password);
        const hasLowerCase = /[a-z]/.test(formData.password);
        const hasNumbers = /[0-9]/.test(formData.password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
        const isLongEnough = formData.password.length >= 8;
    
        if (isLongEnough && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar) {
            return "Strong";
        } else if (
            isLongEnough && 
            ((hasUpperCase && hasLowerCase) || (hasLowerCase && hasNumbers) || (hasNumbers && hasSpecialChar))
        ) {
            return "Moderate";
        } else {
            return "Weak";
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        let isValid = true;
    
        const newErrors = { ...updatedErrors };
    
        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required!";
            isValid = false;
        } else {
            newErrors.name = "";
        }
    
        // Validate password
        if (!formData.password.trim()) {
            newErrors.password = "Password is required!";
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
            isValid = false;
        } else {
            newErrors.password = passwordStrength();
        }
    
        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm your Password";
            isValid = false;
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        } else {
            newErrors.confirmPassword = "";
        }
    
        setupdatedErrors(newErrors);
    
        if (isValid) {
            console.log("Form Submitted Successfully:", formData);
        }
    };
    

    // function validatePassword() {
    //     if(formData.password !== formData.confirmPassword) {
    //         alert("Password and Confirm Password must match")
    //     }
    //     else if(formData.password.length < 8) {
    //         alert("Password cannot be less than 8 characters")
    //     }
    // }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={(e) => handleChange(e)}
                />
                <span>{updatedErrors.name}</span>
            </label>
            <br/>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                />
                <span>{updatedErrors.password}</span>
            </label>
            <br/>
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                />
                <span>{updatedErrors.confirmPassword}</span>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default RegistrationForm;