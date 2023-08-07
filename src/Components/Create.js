import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const history = useNavigate();
const header = {"Access-Control-Allow-Origin": "*"};
const handleSubmit = (e) => {
e.preventDefault();
    console.log("clicked");
axios.post(
    'https://64c76f9b0a25021fde927960.mockapi.io/crudtops',
    {name: name, 
      email: email,
    header
    })
    .then(()=>{
      history("/read");
    })
    
}

  return (
<>
<div className='d-flex justify-content-between m-2'>
    <h2>Create</h2>
    <Link to="/read">
    <button className='btn btn-secondary'>Show Data</button>
    </Link>
    </div>
    <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        onChange={(e)=>setName(e.target.value)}
      />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputPassword1"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
     
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
  </>
  )
}

export default Create