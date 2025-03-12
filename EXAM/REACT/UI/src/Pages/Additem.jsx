import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'

const Additem = () => {
    const [ItemName,setItemName] =useState('')
    const [Category,setCategory] =useState('')
    const [Quantity, setQuantity] = useState('')
    const [Price,setPrice] =useState('')
    const navigate = useNavigate()

    const handlingSubmit = async (e) => {
        e.preventDefault()
        try{
            const formData = new FormData()
          
            formData.append('ItemName',ItemName)
            formData.append('Category',Category)
            formData.append('Quantity',Quantity)
            formData.append('Price',Price)
            
            const response = await fetch('/api/additem', {
                method: 'POST',
                body: formData,
                credentials:"include",
                });
                const data = await response.json()
                if(data){
               
                    alert('Item Added Successfully')
                    navigate('/viewitem')

               
                    setItemName("");
                    setCategory("");
                    setQuantity("");
                    setPrice("");
                }
                else{
                    alert('Failed to Add Item')
                    }
                    }
                    catch(error){
                        console.error(error)
                        }
        }
  return (
    <>
     <div className='bg-black h-screen'>
        <Navbar />
        <div className='bg-gray-300  w-[400px] text-black h-[600px] ml-[700px] mt-[150px] rounded'>
            <h1 className='text-3xl text-center pt-5'>Add Item</h1>
            <form  onSubmit={handlingSubmit}>
    
                <span className='ml-18 '>Item Name</span><br /><br />
                <input type="text" 
                 className='border ml-18 '
                 value={ItemName}
                 onChange={(e) => setItemName(e.target.value)}/><br /><br />
                <span className='ml-18'>Category</span><br /><br />
                <select name="" id="" className='border ml-18' 
                value={Category}
                 onChange={(e) => setCategory(e.target.value)}>
                    <option value="Select Category">Select Category</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Flower">Flower</option>
                    <option value="Electorics">Electorics</option>

                </select><br /><br />
                <span className='ml-18 '>Quantity</span><br /><br />
                <input type="number"  className='border ml-18 '
                value={Quantity}
                onChange={(e) => setQuantity(e.target.value)}/><br /><br />
                <span className='ml-18 '>Price</span><br /><br />
                <input type="number"  className='border ml-18 '
                value={Price}
                onChange={(e) => setPrice(e.target.value)}/><br /><br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-[150px] rounded'>Add Item</button>

            </form>
            

        </div>

    </div>
    </>
  )
}

export default Additem
