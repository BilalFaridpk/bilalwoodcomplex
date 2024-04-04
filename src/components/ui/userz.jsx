'use client'
import { useEffect,useState } from "react";
export default function Userz() {
  const [data,setData] = useState([]);
  const [myEmail, setMyEmail] = useState("");
  useEffect(()=>{
    fetch('http://localhost:3000/api/userz')
    .then((res) => {
      res.json()
      .then((data) => {setData(data)})
    })
  },[]) 

  const AuthenticateUser = (uemail, demail)=>{
    if(uemail === demail){
        return(
            <>
            <p>user available</p>
            </>
        )

    }
  }
  return(
    <div>
        <input onChange={(e)=>{setMyEmail(e.target.value)}}/>
      {
        data && data.map((data)=>{
          return(
            <div>
                {AuthenticateUser(data.email, myEmail)

                }
                <p>{data.email}</p>
                <p>{myEmail}</p>
            </div>
          )
          })}
    </div>
    );
        }