import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function ClientID () {

   const [claim , setClaim] = useState()
   axios.defaults.withCredentials = true;


    return (
        <div>
             <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
             <div className="bg-white p-3 rounded w-25">

                <h2 className="text-center">Claim ID</h2>
                <form>           
                    <div className="mb-3 space-between justify-content">
                          <label htmlFor="Claim">
                            <strong>Claim Id</strong>
                          </label>
                         <input 
                            type="text"
                            placeholder="Ex: 49024"
                            autoComplete="off"
                            name="Claim"
                            className="form-control rounded-0"
                            onChange={(e) => setClaim(e.target.value)}
                          /> 
                    </div>
                    <div className="d-grid"><Link  className="btn btn-success w-100 rounded-0" to={`/dashboard/${claim}`}>Get Details</Link></div>
                    
                </form>
                </div>
             </div>
        </div>
    )
}

export default ClientID