import React from 'react'

const Demo = () => {
    const name = 'john';
    const x=10;
    const y= 20;
     
    const names = ['Ram','Akhil','sarah','Mary'];

    const passed = false;
    
  return (
    <>
     <div>Demo</div>
     <p>Hello {name}</p>
     <p>The {x} and {y} sums to {x+y}</p>
     <ul>
        {names.map((name,index)=>(
            <li key={index}>{name}</li>
        ))}
     </ul>
     {passed ? <h1>You have passed</h1>:<h1>You have failed</h1>}
    </>
   
  )
}

export default Demo
