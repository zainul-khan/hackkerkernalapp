import React from 'react'
import { useGlobalContext } from './Context'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = useGlobalContext()
    if(isLoggedIn){
        setIsLoggedIn(false);
        localStorage.removeItem("usertoken")
        navigate("/")
    }
  return (
    <>
    <div className="container text-center">
    <div className='text-primary' style={{marginTop:"20vh", fontSize:"2rem"}}>You Have Been Logged Out</div>
    <button className="btn btn-primary my-4" onClick={()=>navigate("/")}>Home</button>
    </div>
    </>
  )
}

export default Logout