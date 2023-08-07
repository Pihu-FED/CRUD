import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {
    const[id, setId] = useState(0);
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    const navigate = useNavigate();

useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

},[])

const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put(`https://64c76f9b0a25021fde927960.mockapi.io/crudtops/${id}`,
    {
        name:name,
        email:email,
    }
    ).then(()=>{
        navigate("/read");
    })
}

  return (
    <>
    <h2>Update</h2>
    <form>
    <div className="mb-3">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label for="exampleInputPassword1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputPassword1"
      value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
     
    <button type="submit" class="btn btn-primary" 
    onClick={handleUpdate}
    >
    Update

    </button>
    <Link to="/read"><button className='btn btn-secondary mx-2'>
        Back
    </button>
    </Link>
  </form>
  </>
    
  )
}

export default Update