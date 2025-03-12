import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] =  useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [userrole,setUserrole] = useState('User')
    const [error,setError] = useState('')

    const navigate = useNavigate();


    const handleSignup = async(e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/signup',{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    FirstName:firstname,
                    LastName:lastname,
                    UserName:username,
                    Password:password,
                    UserRole:userrole
                })
            });
            if(!response.ok){
                const errData = await response.json();
                throw new Error(errData.msg || 'Signup Failed')
            }
            navigate('/login')
        }
        catch(error){
            setError(error.message || 'Signup failed : please try again')
        }
    }
  return (
   <>
   <div className="flex justify-center mt-52">
   <div className="bg-gray-800 w-[400px] h-[600px] pt-9 rounded-2xl shadow-lg shadow-gray-800 text-white">
        <h1 className="text-3xl  text-center">Sign Up</h1>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSignup}>
        <div className="pl-20 pt-5 mb-3">
            <label >First Name</label>
        </div>
        <input type="text" 
        id='firstname'
        name='firstname'
        className="w-[240px] ml-20 border  border-sky-500" 
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}/>
        <div  className="pl-20 pt-5 mb-3">
            <label  >Last Name</label>
        </div>
        <input type="text" 
        id='lastname'
        name='lastname'
        className="w-[240px] ml-20 border  border-sky-500"
        value={lastname}
        onChange={(e) =>setLastname(e.target.value)} />
      
        <div className="pl-20 pt-5 mb-3">
            <label >User Name</label>
        </div>
        <input type="text" 
        id='username'
        name='username'
        className="w-[240px] ml-20 border  border-sky-500"
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        <div className="pl-20 pt-5 mb-3">
            <label >Password</label>
        </div>
        <input type="password" 
        name="password" 
        id="password" 
        className="w-[240px] ml-20 border  border-sky-500"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
        <div className="pl-20 pt-5 mb-3">
            <label >Role</label>
        </div>
        <select  
        id='userrole'
        name='userrole'
        className="w-[240px] ml-20 border  border-sky-500"
        value={userrole}
        onChange={(e) =>setUserrole(e.target.value)}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
        </select>
        <div className="border boder-1 border-white w-16 ml-44 mt-5 text-center">
            <button>Sign Up</button>
        </div>
        <div className="flex ml-24 mt-3">
            <p className="">Don't have an account? </p> <Link to='/login' className=' pl-2 text-sky-300'>Login</Link>
        </div>
        </form>
    </div>
  
   </div>
   
   </>
  )
}

export default Signup
