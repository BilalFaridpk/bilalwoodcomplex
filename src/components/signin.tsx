'use client'
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react"

export default function Login(){

  const [data, setData] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/api/userz')
    .then((res) => {
      res.json()
      .then((data) => {setData(data)})
    })
  },[]) 

  const [loginid, setLoginid]=useState("");
  const [password, setpassword]=useState("");

  const checkData = ()=>{
    data.map((user)=>{
      if(loginid===user.email && password===user.password){
        alert("User found")
      }else{
        alert("User not found")
      }
    });
    
  }
    return(

<div>
                    <div className="flex pt-6  justify-start pl-36 bg-gradient-to-r from-amber-700 to to-amber-950 ">
                         <p className="text-white text-md font-italic">Fill form to get User Access</p>  
                    </div>
<div className="flex flex-col justify-items items-center pl-24 pt-12 pb-24 bg-gradient-to-r from-amber-700 to-amber-950 ">
    <div>
          <h1 className="text-2xl font-bold text-white">SIGN IN</h1>
    </div>
          <div>
            {loginid}
              <h2 className="text-md font-bold pt-12 ">User id</h2>
            <input required onChange={(e)=>{
                setLoginid(e.target.value);
            }}   type="text" placeholder="user Id/email/number" className="border-2 border-black px-1 py-1 hover:border"/>
          </div>

          <div>
            {password}
                <h2 className="text-md font-bold pt-6 ">Password</h2>
                <input onChange={(p)=>{
                 setpassword(p.target.value);
            }} type="password"placeholder="password" className="border-2 border-black px-2 py-1 hover:border "/>
          </div>
          <Link href = "/input">
          <div className="flex pt-6 gap-8">
            <button onClick={()=>checkData()} className="text-black text-md  px-4 py-1 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900  rounded-md hover:scale-110">Signin</button>
          </div>  
          </Link>

  </div>
        
</div>
    

    )
}
