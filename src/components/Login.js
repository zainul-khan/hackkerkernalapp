import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './Context'
const Login = () => {
    const navigate = useNavigate()
    const {isLoggedIn, setIsLoggedIn} = useGlobalContext()
    const [err, setErr] = useState("")
    const [userData, setUserData] = useState({email:"", password:""})
    const handleChange = (e)=>{
        setUserData({...userData, [e.target.name]:e.target.value})
    }
    const submitData = async (e)=>{
        e.preventDefault()
        const {email, password} = userData
        if(!email){
            setErr("* Email can't be empty")
        }
        else if(!password){
            setErr("* Password cannot be empty")
        }
        else{
            const res = await fetch("https://reqres.in/api/login",{
                method:"POST",
                headers:{
                    "Content-Type":"Application/json"
                },
                body:JSON.stringify({email, password})
            })
            const data = await res.json()
            if(email==="eve.holt@reqres.in" && password==="pistol" ){
                localStorage.setItem("usertoken", data.token)
                setIsLoggedIn(true)
                navigate("./home")
                console.log(data)
            }
            else{
                alert("Invalid User")
            }
        }
    }
    if(isLoggedIn){
        navigate("./home")
    }
  return (
    <>
    <div className="container mt-5">
        <h3 className='text-center text-primary'>Login to enjoy our services</h3>
    <form>
  <div className="mb-3">
     <div id="emailHelp" className="form-text my-4 text-danger" style={{fontWeight:"bold"}}>{err}</div>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} name="email"  onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={userData.password} name="password" onChange={handleChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
</form>
</div>
    </>
  )
}

export default Login