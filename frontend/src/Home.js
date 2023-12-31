import React from "react";
import "./Home.css" 
import { useState,useEffect,useContext } from "react";
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
const Navigate=useNavigate()
const location=useLocation()
  const [showAll,setShowAll]=useState(false)
  const[addNew,setAddNew]=useState(false)
  const [items,setItems]=useState([])
  const [itemNameState,setItemNameState]=useState("")
  
  const [isOpen,setIsOpen]=useState(false)
  const [itemDescState,setItemDescState] =useState("")
  const[itemQuantityState,setItemQuantityState]=useState("")
  const [userId,setUserId]=useState(0)
  
  const [all,setAll]=useState([])
  
  useEffect(async ()=>{
    console.log("here",location.state)
    
      setUserId(location.state)
      await fetch(`http://localhost:3001/item/${location.state}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
    
    


    
  },[])
    
  useEffect(()=>{
    fetch("http://localhost:3001")
    .then(res=>res.json())
    .then(data=>setAll(data))
  },[])

  
 




  const posting = async()=>{
     let temp=location.state
    
    await fetch(`http://localhost:3001/item/${temp}`,{
      method:"POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        user_account_id:location.state,
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
  
  
  
  await fetch(`http://localhost:3001/item/${location.state}`,{
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
    all.map(item=>
    <My_Templates id="itemsNon" onClick={()=>{Navigate(`/specific/item/${location.state}`,{state:item} ); window.location.reload(false)}}>
      
    <div>
          Name: {item.item_name}
      </div>
      <Desc >
          Descr:{item.description}
      </Desc>
      <div>
          Quantity: {item.quantity}
      </div>
      
    </My_Templates>
    ))
  
}



const itemMapLogged=()=>{
console.log(items)

return(
  <>
  

  {items.map((item,index)=>
    <>
  <Delete key={`${index}`} onClick={()=>{deleting(item);window.location.reload(false)}}>Delete</Delete>
  <Edit key={`${index}`} id='item' onClick={()=>{
    setItemQuantityState(item.quantity);
    setItemDescState(item.description);
    setItemNameState(item.item_name);
    setIsOpen(true)}
    }>Edit</Edit>
  
       
  
  <div >
  
  <div>
  <ReactModal
      className="modal"
      isOpen={isOpen}
      contentLabel="Example_Modal"
      onRequestClose={() => setIsOpen(false)}
    >
       <div key={`${index}`} id='editing'>
         Edit Your Item.
       
         <form id='editForm' >
         <label>Enter the item name:
         <input type="text" id='item-nameE'  placeholder={item.item_name} onChange={(e)=>setItemNameState(e.target.value)} ></input>
         </label><br></br>
         <label> Enter item description:
         <input type='text' id='item-descriptionE' placeholder={item.description} onChange={(e)=>{setItemDescState(e.target.value)}}/>
         </label><br></br>
         <label>Enter quantity
         <input  type='text' id='item-quantityE' placeholder={item.quantity}  onChange={(e)=>setItemQuantityState(e.target.value)}></input>
         </label>
       
       </form>
          
         <button onClick={async()=> {await putting(item.id); window.location.reload(false)}} >
         Submit
        </button>
        
       </div>
       </ReactModal>
       </div>
       <div onClick={()=>{Navigate(`/specific/item/${location.state}`,{state:item} ); window.location.reload(false)}} >
            <My_Templates>
            <div>
                Name: {item.item_name}
            </div>
            <Desc >
                Descr:{item.description}
            </Desc>
            <div>
                Quantity: {item.quantity}
            </div>
            </My_Templates>
            
    
    </div>
  </div>
  </>
  
  )}
  
  </>
  )

}



return(

<>
  <>
  <button onClick={setShowAll}>Show all</button>
  {showAll&&(
    <div>
    {itemMap()}
    </div>
  )
  
  }
  </>
<button id="addingItem" onClick={setAddNew }>Add New</button>

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


  {itemMapLogged()}
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
text-overflow: ellipsis
border: 2px solid grey;
border-radius:15px;
box-shadow: 0px 8px 16px 4px rgba(0,0,0,0.3);
word-wrap: break-word;

 &:hover{
    background-color: #28a6c5a3;
}

`
const Delete =styled.div`
width:75px;
&:hover{
  
  background-color: red;
}

`
const Edit=styled.div`
width:75px;
&:hover{
  background-color: yellow;
}

`





const Desc=styled.div`
Max-Length:100;
overflow-x:hidden;
text-overflow: ellipsis;
white-space: nowrap;

&:hover{
    
    white-space:wrap
}



`
