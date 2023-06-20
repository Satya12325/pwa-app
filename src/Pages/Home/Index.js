import React, { useState } from 'react'

export default function Home() {
    const [name,setName]=useState("")
    const [nameArr,setNameArr] = useState([])
    const search = (e)=>{
      console.log(e.key);
      if(e.key === "Enter"){
  
        setNameArr([...nameArr,name]);
        setName("")
      }
    }
    const handleChange = (e) =>{
      console.log(e.target.value)
      setName(e.target.value)
    };
   
  return (
    <div style={{marginTop:"90px"}}>
          {/* <input
     value={name}
     onKeyPress={search}
      onChange={handleChange}
     />
     <div>
      {
        nameArr?.map((name)=> <div>{name}</div>)
      }
     </div> */}

     <h1>Home</h1>
    </div>
  )
}
