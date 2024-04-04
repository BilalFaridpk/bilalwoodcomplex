import Link from "next/link"
export default function Input(){
    return(
     
<div>
                    <div className="flex justify-start px-36 pt-6 bg-gradient-to-r from-amber-700 to-amber-950">
                         <p className=" text-white">Fill form to Get items</p>
                    </div>
                    <div className="flex justify-center gap-12 pl-32 bg-gradient-to-r from-amber-700 to-amber-950 pt-6">
                         <Link href="/input" className="text-md px-4 text-white hover:scale-105 hover:text-yellow-500">Home</Link>
                         <Link href="" className="text-md px-4 text-white hover:scale-105 hover:text-yellow-500"> Register Users</Link>
                         <Link href="" className="text-md px-4 text-white hover:scale-105 hover:text-yellow-500"> Enteris</Link>
                         <Link href="" className="text-md px-4 text-white  hover:scale-105 hover:text-yellow-500">About</Link>
                    </div>
     <div className=" flex  justify-center items-center pl-24 bg-gradient-to-r from-amber-700 to to-amber-950  py-12 ">
                    
                    <div className="py-6">
                          <h1 className="text-md font-bold ">Date</h1>
                    <div className=" py-2">
                         <input type="month" placeholder="" className="px-7 py-1 border-black  border-2  hover:border-sky-600 hover:border" />
                    </div>

                          <h1 className="text-md font-bold">Description</h1>
                    <div className=" py-2">
                         <input type="text" placeholder="" className="px-1 py-1 border-black  border-2  hover:border-sky-600 hover:border" />
                    </div>

                         <h1 className="text-md font-bold">Munds</h1>
                    <div className=" py-2">
                         <input type="number" placeholder="" className="px-1 py-1 border-black  border-2  hover:border-sky-600 hover:border" />
                    </div>


                         <h1 className="text-md font-bold">KG</h1>
                    <div className=" py-2">
                         <input type="number" placeholder="" className="px-1 py-1 border-black border-xl  hover:border-sky-600  hover:border" />
                    </div>

                    <h1 className="text-md font-bold">Price / 40kg</h1>
                    <div className=" py-2">
                         <input type="text" placeholder="" className="px-1 py-1 border-black   border-2  hover:border-sky-600 hover:border" />
                    </div>


                         <h1 className="text-md font-bold">Total</h1>
                    <div className=" py-2">
                         <input type="text" placeholder="" className="px-1 py-1 border-black border-2  hover:border-sky-600 hover:border" />
                    </div>

                   

                         <h1 className="text-md font-bold">Recived</h1>
                    <div className=" py-2">
                         <input type="text" placeholder="" className="px-1 py-1 border-black   border-2  hover:border-sky-600 hover:border" />
                    </div>

                    <div className="pt-12 px-8">
                         <button className="text-xl text-white bg-sky-800 hover:bg-gradient-to-r from-yellow-600 to-amber-900   rounded-md hover:scale-110 py-1 px-12 ">Sumit</button>
                    </div>
               </div>
          </div>
               
</div>
    )
}