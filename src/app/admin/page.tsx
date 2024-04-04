export default function UserPage(){
    return(
        <div>
                <div className="flex bg-amber-600  pt-5 pb-12 justify-center items-center">
                    <form className="flex flex-col justify-center gap-3">
                        <label className="font-bold">Email</label>
                        <input type="email" required className="border-2 border-black px-2 py-1 hover:border "/>

                        <label className="font-bold">Password</label>
                        <input type="password" required className="border-2 border-black px-2 py-1 hover:border "/>

                        <label className="font-bold">Type:</label>
                        <select className="border-2 border-black px-2 py-1 hover:border ">
                            <option>Admin</option>
                            <option>Data Enter</option>
                        </select>

                       <div className="flex px-2 py-1 pt-6 justify-center">
                            <button type="submit" className="text-black text-md  px-4 py-1 pt-2 bg-sky-800 hover:bg-gradient-to-r from-amber-700 to-amber-900  rounded-md hover:scale-110">Register</button>
                       </div>
                    </form>
                </div>
        </div>
    )
}