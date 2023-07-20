import React from "react";

import { useState,useEffect,useContext } from "react";
import EditItem from "./editItem";
import ReactModal from 'react-modal';
import { useLocation } from "react-router-dom";

const Home = () => {

const location=useLocation()

  
  const [items,setItems]=useState([])
  const [itemNameState,setItemNameState]=useState("")
  const [show,setShow]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const [itemDescState,setItemDescState] =useState("")
  const[itemQuantityState,setItemQuantityState]=useState("")
  const [userId,setUserId]=useState(0)
  const[Logged,setLogged]=useState(false)
  console.log("location.state")
  useEffect(async ()=>{
    
    if(location.state!=null){
      await fetch(`http://localhost:3001/${location.state}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
    }
    else{
      await fetch("http://localhost:3001")
      .then(res=>res.json())
      .then(data=>setItems(data))
    }


    
  },[])
    
  console.log(items)

  
 




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

const putting=async(id)=>{
  console.log("putting")
  
  
  
  await fetch("http://localhost:3001",{
    method:"PUT",
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({
      id:id,
    item_name: itemNameState,
    description:itemDescState,
    quantity:itemQuantityState

    })
    
  })
  .then(res=>res.json())


}
  
const itemMap=()=>{
console.log(items)

return(
  
  
  items.map((item,index)=>
    <>
  <div key={`${index}`} onClick={()=>deleting(item)}>Delete</div>
  
  
       
  
  <div >
  <div key={`${index}`} id='item' onClick={setIsOpen}>Edit</div>
  <div>
  <ReactModal
      isOpen={isOpen}
      contentLabel="Example Modal"
      onRequestClose={() => setIsOpen(false)}
    >
       <div key={`${index}`} id='editing'>
         This is the content of the pop-up.
       
         <form id='editForm' >
         <label>Enter the item name:
         <input type="text" id='item-nameE'  placeholder={item.item_name} onChange={(e)=>setItemNameState(e.target.value)} ></input>
          
         </label>
         <label> Enter item description:
         <input type='text' id='item-descriptionE' placeholder={item.description} onChange={(e)=>setItemDescState(e.target.value)}/>
         </label>
         <label>Enter quantity
         <input  type='text' id='item-quantityE' placeholder={item.quantity} onChange={(e)=>setItemQuantityState(e.target.value)}/>
         </label>
       
       </form>
          
         <button onClick={async()=> await putting(item.id)} >
         Submit
        </button>
        
       </div>
       </ReactModal>
    {item.item_name}{item.description}{item.quantity}
    </div>
  </div>
  </>
  )
  
  
  )}



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