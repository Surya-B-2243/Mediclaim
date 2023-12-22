import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link , useNavigate} from 'react-router-dom'
import AppNavbar from "./topbar";


function Signup() {
    const [name , setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name, email, password})
      // eslint-disable-next-line no-unused-vars
      .then(res => {
        navigate('/login')
      }).catch(err => console.log(err))
    }

    return(
      <div>
      <AppNavbar/>
        <div className="lgin-template d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="form-container bg-white p-3 rounded w-25">
                <h2 className="text-center">Register</h2>
                <form onSubmit = {handleSubmit}>
                    <div className="mb-3">
                          <label htmlFor="name">
                            <strong>Name</strong>
                          </label>
                         <input 
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                          /> 
                    </div>
                    <div className="mb-3">
                          <label htmlFor="email">
                            <strong>Email</strong>
                          </label>
                         <input 
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                          /> 
                    </div>
                    <div className="mb-3">
                          <label htmlFor="password">
                            <strong>Password</strong>
                          </label>
                         <input 
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                          /> 
                    </div>
                    <button type="submit" className="btn btn-secondary w-100 rounded-0">Register</button>
                </form>
                <Link to="/login" ><div className="text-end">Already have an account ?</div></Link>
            </div>
        </div>
        </div>
    )
}

export default Signup;



