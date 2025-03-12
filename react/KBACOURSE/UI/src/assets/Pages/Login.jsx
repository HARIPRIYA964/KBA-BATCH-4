import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();
        try{

            const response = await fetch('/api/login',{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    UserName:username,password:password})
                    
            });

            if(response.ok){
                const errData = await response.json();
                throw new Error(errData.msg || 'Login Failed')
            }
            navigate('/dashboard')
        }
        catch(error){
            setError(error.message || 'Inavlid credential : please try again')
        }
    }
  return (
    <>
    <div className="flex justify-center mt-52">
     <div className="bg-gray-800 w-[350px] h-[400px] pt-9 rounded-2xl shadow-lg shadow-gray-800 text-white">
        <span className=" pl-20  text-2xl">Login</span>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleLogin}>
            
        <div className="pl-16 pt-5 mb-3">
            <label>User Name:</label>
        </div>
        <input 
        type="text"
         id='username'
         name='usename'
         className="w-[210px] ml-16 border  border-sky-500"
         value={username}
         onChange={(e) => setUsername(e.target.value)} />
        <div className="pl-16 pt-5 mb-3"><label >Password</label></div>
        <input type="password"
        id='password'
        name='password'
         className="w-[210px] ml-16 border  border-sky-500"
         value={password}
         onChange={(e) => setPassword(e.target.value)} />
        <div className="border boder-1 border-orange-white w-16 ml-36 mt-5 text-center">
            <a href="homepage.html"><button>Login</button></a>
        </div>
        <div className="ml-16 mt-5"> 
            <a href="" >Forgot Password?</a>
        </div>
        <div className="flex ml-16 mt-3">
            <p className="">Don't have an account? </p><a href="signup.html" className="pl-2 text-sky-300"> Sign Up</a>
        </div>
        </form>

    </div>
</div>
    </>
   
  )
}

export default Login
