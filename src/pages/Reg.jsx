import React from 'react'
import "../style/reg.css"
const Reg = () => {
  return (
    <div className="reg-container">
      
             <form className="register-form">
            <h2>Create Account</h2>
            <p class="subtitle">Register to get started</p>

            <div className="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name"
                       placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username"
                       placeholder="Choose a username" required />
            </div>

            <div className="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email"
                       placeholder="Enter your email" required />
            </div>

            <div className="form-group">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone"
                       placeholder="Enter phone number" required />
            </div>

            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password"
                       placeholder="Create a password" required />
            </div>

            <div className="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword"
                       name="confirmPassword"
                       placeholder="Confirm your password" required />
            </div>

            <div className="form-group">
                <label>Gender</label>
                <div className="radio-group">
                    <label><input type="radio" name="gender"
                                  value="Male" required /> Male</label>
                    <label><input type="radio" name="gender"
                                  value="Female" /> Female</label>
                    <label><input type="radio" name="gender"
                                  value="Other" /> Other</label>
                </div>
            </div>

            <div className="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" required />
            </div>

            <div className="form-group">
                <label for="course">Select Course</label>
                <select id="course" name="course" required>
                    <option value="">Choose a course</option>
                    <option value="HTML CSS">HTML & CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React JS</option>
                    <option value="MERN">MERN Stack</option>
                </select>
            </div>

            <div className="form-group">
                <label for="address">Address</label>
                <textarea id="address" name="address"
                          placeholder="Enter your address"
                          rows="3" required></textarea>
            </div>

            <div className="terms">
                <input type="checkbox" id="terms" required />
                <label for="terms">I agree to the terms and conditions</label>
            </div>

            <button type="submit">Create Account</button>

            <p className="login-link">
                Already registered? <a href="#">Login</a>
            </p>
        </form>

       
    </div>
  )
}

export default Reg
