import React from "react";
import "./Home.css" 
import { useState,useEffect,useContext } from "react";
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { useLocation } from "react-router-dom";

const Home = () => {

const location=useLocation()

  const[addNew,setAddNew]=useState(false)
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
      setUserId(location.state)
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
     
    
    await fetch(`http://localhost:3001/${location.state}`,{
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
  return(
    items.map(item=>
    <My_Templates id="itemsNon">
    {item.item_name}{item.description}{item.quantity}
    </My_Templates>
    ))
  
}







const itemMapLogged=()=>{
console.log(items)

return(
  
  
  items.map((item,index)=>
    <My_Templates>
  <Delete key={`${index}`} onClick={()=>deleting(item)}>Delete</Delete>
  <Edit key={`${index}`} id='item' onClick={setIsOpen}>Edit</Edit>
  
       
  
  <div >
  
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
          
         <button onClick={async()=> {await putting(item.id); window.location.reload(false)}} >
         Submit
        </button>
        
       </div>
       </ReactModal>
       <div >
    Item Name:{ item.item_name}<br></br> 
    Description:{item.description}<br></br>  
    Quantity:{item.quantity}
    </div>
    </div>
  </div>
  </My_Templates>
  )
  
  
  )}



return(

<>
{userId!=0 &&(
<button id="addingItem" onClick={setAddNew }>Add New</button>
)}
{addNew &&(
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
<button id='form-submit' onClick={async()=>{await posting();setAddNew(false);window.location.reload(false)}}>Submit</button>
</>
)}


  {userId==0? itemMap():itemMapLogged()}
</>
)
}


export default Home

const My_Templates=styled.div`
width:300px;
display: grid;
  grid-rows:1;
  grid-columns:8;
  grid-gap: 10px;
  flex-wrap: wrap;
background-color: #86d5e8a3;

margin: 13px;
padding: 10px;

border: 2px solid grey;
border-radius:15px;
box-shadow: 0px 8px 16px 4px rgba(0,0,0,0.3);
word-wrap: break-word;

 &:hover{
    background-color: #28a6c5a3;
}

`
const Delete =styled.div`

&:hover{
  background-color: red;
}

`
const Edit=styled.div`

&:hover{
  background-color: yellow;
}

`