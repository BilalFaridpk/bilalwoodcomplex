import { query } from '@/lib/db';

export async function GET(request){
    const userz = await query({
        query: "select * from userz where id=${id}",

        values: []   
     });

    let data = JSON.stringify(userz);

    return new Response(data,{status:200,});

}
  
export async function POST(request){

const { emails, passwords } = await request.json();
const updateCustomers = await query({
query: "insert into customers (emails, passwords) values (?, ?)",
    values: [emails, passwords],
});

const result = updateCustomers.affectedRows;
let messege = "";
if(result){
messege = "success";
}else{
messege = "error";
}
const userz = {
userz: userz,
};
return new Response(JSON.stringify({
    messege:messege,
    status: 200,
    userz: userz,
}));
}
