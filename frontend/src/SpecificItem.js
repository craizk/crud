import { useLocation } from "react-router-dom"
import styled from "styled-components"

const SpecificItem=()=>{
    const location=useLocation()
    console.log("here")
    let item =location.state

    return(
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
    )



}

export default SpecificItem

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