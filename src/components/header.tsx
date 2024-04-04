import Link from "next/link"
export default function Header(){
    return(
<div>

                    <div className="flex flex-row justify-between px-24 bg-gradient-to-r from-amber-800 to-amber-950 py-6 drop-shadow-2xl shadow-black">
                         
                         <h1 className="text-3xl text-white font-extrabold  px-12 ">Bilal Wood Complex</h1>
                         <Link href="/login" className=" text-white  text-md  px-3 py-1 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900 rounded-md hover:scale-110">Login</Link>
                    </div>


                   
                

</div>
)}