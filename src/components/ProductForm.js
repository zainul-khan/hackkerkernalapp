import React,{useState} from 'react'
import { useGlobalContext } from './Context'

const ProductForm = () => {
    const {newEntry, setNewEntry} = useGlobalContext()
    const [prodDetails, SetProdDetails] = useState({productName:"", price:""})
    const [id, setId] = useState(0)
    // const [newEntry, setNewEntry] = useState([])
    const [err, setErr] = useState("")

    const handleChange = (e)=>{
        SetProdDetails({...prodDetails, [e.target.name]:e.target.value})
    }
    const submitData = async (e)=>{
        e.preventDefault()
        setId(id + 1);
        const {productName, price} = prodDetails;
        if(!prodDetails){
            setErr("*Product name can't be empty")
        }
        else if(!price){
            setErr("*Price cannot be empty")
        }
        else{
            const newData = {id, productName, price}
            const found = newEntry.some((element)=> element.productName === productName)
            if(found){
                alert("Product already exist")
                return
            }
           setNewEntry([...newEntry, newData])
           SetProdDetails({productName:"", price:""})
        }
        console.log(newEntry)
    }
   
    return(
        <>
        <div className="container mt-5">
        <h3 className='text-center text-success'>Add Products</h3>
        <form>
            <div className="mb-3">
            <div id="emailHelp" className="form-text my-4 text-danger" style={{fontWeight:"bold"}}>{err}</div>
            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={prodDetails.productName} name="productName"  onChange={handleChange}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
            <input type="text" className="form-control" id="exampleInputPassword1" value={prodDetails.price} name="price" onChange={handleChange}/>
        </div>
            <button type="submit" className="btn btn-success" onClick={submitData}>Submit</button>
        </form>
        {/* <table className='container mt-4'>
            <thead>
                <tr>
                <th>Product</th>
                <th>Price</th>
                </tr>
            </thead>
        <tbody className="my-3">
            {
                newEntry.map((values)=>{
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
        </table> */}
        </div>
        </>
    )
}

export default ProductForm