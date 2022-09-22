import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from './Context'
import List from './List'
import ProductForm from './ProductForm'
import Search from './Search'
const Home = () => {
  const navigate = useNavigate()
  // const checkToken = async() => {
  //   try {
  //     const token = localStorage.getItem("usertoken")
  //     const validateToken = await fetch("https://reqres.in/api/login",{
  //     method:"GET",
  //     headers:{
  //       "Accept":"application/json",
  //       "Content-Type":"application/json",
  //       "Authorization":token

  //     }
  //   })
  //   const getData = await validateToken.json();
  //   if(!getData || !token){
  //     navigate("/")
  //   }else{
  //     alert("Welcome")
  //   }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   checkToken();
  // }, [])
  const {isLoggedIn, setIsLoggedIn} = useGlobalContext()
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/")
    }

  })

  return (
    <>
    <ProductForm/>
    <Search/>
    <List/>
    </>
  )
}

export default Home