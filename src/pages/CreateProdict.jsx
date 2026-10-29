import React from 'react'
import "../style/CreateProdict.css"
const CreateProdict = () => {
  return (
   <div className="product-container">
      
             <form className="register-form">
            <h2>Create Account</h2>
            <p class="subtitle">Register to get started</p>

            <div className="form-group">
                <label for="name">Product Name</label>
                <input type="text" id="name" name="name"
                       placeholder="Enter your full name" required />
            </div>
             
              <div className="form-group">
                <label for="Img">Product Img</label>
            <input type="file" id="Img" 
                       placeholder="Enter your full Img" required />
            </div>

              <div className="form-group">
                <label for="Price">Product Price</label>
                <input type="file" id="Price" 
                       placeholder="Enter your full Price" required />
            </div>

             <div className="form-group">
                <label for="Price">Product Description</label>
                <textarea type="file" id="Price" 
                       placeholder="Enter your full Price" required />
            </div>


            

            


            <button type="submit">Create Product</button>

          
        </form>

       
    </div>
  )
}

export default CreateProdict
