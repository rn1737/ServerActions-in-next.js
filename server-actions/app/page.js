import fs from "fs/promises";
export default function Home() {
  const submitAction=async(e)=>{ 
    "use server"
    console.log(e.get("name"),e.get("add")) 
    let a= await fs.writeFile("ritesh.txt",`Name is ${e.get("name")} and Address is ${e.get("add")}`)  
    console.log(a);
  } 

  return (
    <div className="w-2/3 mx-auto my-12"> 
    <form action={submitAction}> 
    <div> 
      <label html for="name">Name</label>
      <input name="name" id="name" className="text-black mx-4" type="text"/>
      </div>

      <div> 
      <label html for="add">Address</label>
      <input name="add" id="add" className="text-black mx-4" type="text"/>
      </div>

      <div> 
        <button className="border border-black px-3">Submit</button>
      </div>

      </form>
   </div>
  );
}
