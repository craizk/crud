import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';





const NotLoggedin =()=>{

    const Navigate=useNavigate();
    const [items,setItems]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3001")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])



    const itemMap=()=>{
        return(
          items.map(item=>
          <My_Templates id="itemsNon" onClick={()=>{Navigate(`/specific/item/${0}`,{state:item} ); window.location.reload(false)}}>
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

      return(
        <>
        {itemMap()}
        </>
      )

}



export default NotLoggedin

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


const Desc=styled.div`
Max-Length:100;
overflow-x:hidden;
text-overflow: ellipsis;
white-space: nowrap;

&:hover{
    
    white-space:wrap
}



`