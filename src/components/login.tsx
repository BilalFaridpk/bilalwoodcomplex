'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Login(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('/api/userz').then((res)=>res.json()).then(()=>setUsers(users))
  },[]);

    return(
<div>
  {
    users.map((user)=>user.email)
  }
                    <div className="flex pt-6  justify-start pl-36 bg-gradient-to-r from-amber-700 to to-amber-950 ">
                         <p className="text-white text-md font-italic">Fill form to get User Access</p>  
                    </div>
  <div className="flex flex-col justify-items items-center pl-24 pt-8 pb-24  bg-gradient-to-r from-amber-700 to-amber-950 ">
          <div>
                <h1 className="text-2xl text-white font-bold">LOGIN</h1>
          </div>
          <div>
              <h2 className="text-md text-white font-bold pt-12 ">User id</h2>
              <input type="text" placeholder="user Id/email/number" className="border-2 border-black px-1 py-1 hover:border"/>
          </div>

          <div>
          
                <h2 className="text-md text-white font-bold pt-6 ">Password</h2>
                <input type="password"placeholder="password" className="border-2 border-black px-2 py-1 hover:border "/>
          </div>
          
          <div className="flex pt-6 gap-8">
          <Link href = "/reg">
            <button className="text-white text-md  px-4 py-1 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900 rounded-md hover:scale-110">Resgister</button>
          </Link>

          <Link href = "/signin">
            <button className="text-white text-md  px-4 py-1 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900  rounded-md hover:scale-110">Sign up</button>
          </Link>
          </div>  
          

  </div>
        

</div>
    

    )
}
