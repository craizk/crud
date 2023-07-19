import React from "react";
import { useState } from "react";


const EditItem =(theItem)=>{
    console.log("made it")
    const[itemName,setItemName]=useState(theItem.item_name);
    const [itemDesc,setItemDes]=useState(theItem.description);
    const [itemQuan,setItemQuan]=useState(theItem.quantity);

    console.log(itemName,itemDesc,itemQuan)

    return (
        <>
        {console.log("made it")}
        </>
    )








}



export default EditItem