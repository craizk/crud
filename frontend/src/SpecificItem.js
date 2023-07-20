import { useLocation } from "react-router-dom"


const SpecificItem=()=>{
    const location=useLocation()
    console.log("here")
    let item =location.state

    return(
        <div>
            <div>
                Name: {item.item_name}
            </div>
            <div>
                Descr:{item.description}
            </div>
            <div>
                Quantity: {item.quantity}
            </div>
        </div>
    )



}

export default SpecificItem