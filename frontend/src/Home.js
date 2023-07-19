import React from "react";

import { useState,useEffect,useContext } from "react";
import EditItem from "./editItem";
const Home = () => {

    
  const [items,setItems]=useState([]);
  const [item,setItem]=useState=({})
  const [show,setShow]=useState(false)

// pull the overall item list
  useEffect(()=>{
    fetch("http://localhost:3001")
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[])




  const posting = async()=>{
     
    
    await fetch("http://localhost:3001",{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        item_name: document.getElementById("item-name").value,
        description:document.getElementById("item-description").value,
        quantity:document.getElementById("item-quantity").value
      })
    })
    .then(res=>res.json())
  }

  const deleting = async(item) =>{
      console.log("deleteing",item)
      await fetch("http://localhost:3001",{
      method:"DELETE",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(item)
  })
  .then(res=>res.json())
}






  
const itemMap=()=>{
return(
  items.map(item=>
    <>
  <div onClick={()=>deleting(item)}>Delete</div>
  <div >Edit</div>
  <div>{item.item_name}{item.description}{item.quantity}</div>
  </>
  )
  
)
}


return(

<>
  <form >
  <label>Enter the item name:
  <input type='text' id='item-name' placeholder='enter item name' />

  </label>
  <label> Enter item description:
  <input type='text' id='item-description' placeholder='enter item description' />
  </label>
  <label>Enter quantity
  <input type='text' id='item-quantity' placeholder='enter item quantity' />
  </label>

</form>

<button id='form-submit' onClick={()=>posting()}>Submit</button>
  {itemMap()}
</>
)
}


export default Home