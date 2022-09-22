import React, { useEffect, useState } from 'react'
import { useGlobalContext } from './Context'

const List = () => {
    const {newEntry, setNewEntry, data, setData} = useGlobalContext();
    // const [data, setData] = useState(newEntry);
    const delProd = (id)=>{
        // names.filter((name)=>{
        //     names!==name
        // })
        console.log(id)
        const newList = newEntry.filter((item) => item.id !== id);
        setNewEntry(newList)
    }
    useEffect(()=>{
        setData(newEntry)
    },[newEntry])
    
  return (
    <div>
        {newEntry.length === 0? <h4 className='text-danger text-center mt-4'>No Product Is Added Yet</h4> :""}
        <table className='container mt-4'>
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                </tr>
            </thead>
        <tbody className="my-3">
            {
                data.map((values)=>{
                    return(
                        <>
                        <tr>
                            <td>{values.productName}</td>
                            <td>{values.price}</td>
                            <td><button className="btn btn-danger" onClick={()=>{delProd(values.id)}}>X</button></td>
                            </tr>
                        </>
                    )
                })
            }
        </tbody>
        </table>
    </div>
  )
}

export default List