import React, { useState,useContext,useEffect } from 'react'
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [newEntry, setNewEntry] = useState([])
    const [data, setData] = useState(newEntry);

  const checkToken = async() => {
    try {
      const token = localStorage.getItem("usertoken")
      const validateToken = await fetch("https://reqres.in/api/login",{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Authorization":token

      }
    })
    const getData = await validateToken.json();
    if(!getData || !token){
        console.log("No Token")
    }else{
    console.log("You are logged in")
      setIsLoggedIn(true)
    }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    checkToken();
  }, [])
  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, newEntry, setNewEntry, data, setData}}>{children}
     </AppContext.Provider>
  )
}
const useGlobalContext = ()=>{
  return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};