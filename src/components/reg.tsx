import Link from "next/link"
export default function Register(){
    return(
<div>
                    <div className="flex pt-6  justify-start pl-36 bg-gradient-to-r from-amber-700 to to-amber-950 ">
                         <p className="text-white text-md font-italic">Fill form to get User Access</p>  
                    </div>
  <div className="flex flex-col justify-items items-center pl-24 pt-12 pb-24 bg-gradient-to-r from-amber-700 to-amber-950 ">
    <div>
          <h1 className="text-2xl font-bold text-white">CREATE User</h1>
    </div>
          <div>
          
              <h2 className="text-md font-bold pt-12 ">first Name </h2>
            <input type="text" placeholder="first name" className="border-2 border-black px-1 py-1 hover:border"/>
          </div>

          <div>
          
            <h2 className="text-md font-bold pt-6 ">last Name </h2>
            <input type="text" placeholder="last name" className="border-2 border-black px-1 py-1 hover:border"/>
        </div>

        
        <div>
          
          <h2 className="text-md font-bold pt-6 ">Password </h2>
          <input type="password" placeholder="password" className="border-2 border-black px-1 py-1 hover:border"/>
      </div>

          <div>
          
                <h2 className="text-md font-bold pt-6 "> Confirm Password</h2>
                <input type="password"placeholder="confirm" className="border-2 border-black px-2 py-1 hover:border "/>
          </div>
          
          <div className="flex pt-6 gap-8">
            <Link href = "/input">
                <button className="text-black text-md  px-4 py-1 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900 rounded-md hover:scale-110">Create</button>
            </Link>
          </div> 

        </div>
        
</div>
    )
}