import React, { useState } from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
    const {newEntry, setNewEntry, data, setData} = useGlobalContext();
    const [query, setQuery] = useState()
    const handleChange = (e)=>{
        setQuery(e.target.value)
    }
    const submit = (e)=>{
        e.preventDefault();
        const notExist = newEntry.some((elem)=> elem.productName===query )
        if(!notExist){
            alert("Product not found")
            return
        }
        const found = newEntry.find((elem)=>elem.productName === query)
        const newArray = Array(found)
       setData(newArray)
       console.log(newArray)
       
    }
  return (
    <div className='container text-center'>
        <h3 className='text-success'>Search Product</h3>
        <form>
            <input type="text" value={query} onChange={handleChange} className="form-group m-4"/> 
            <button className="btn btn-success" onClick={submit}>Search</button>
        </form>
    </div>
  )
}

export default Search