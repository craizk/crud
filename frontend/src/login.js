import React from "react";



const Login=()=>{






    const posting = async()=>{
       
      
        await fetch("http://localhost:3001/user",{
          method:"POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            Firstname: document.getElementById("Firstname").value,
            Lastname:document.getElementById("lastname").value,
            username:document.getElementById("username").value,
            password:document.getElementById("password").value,
          })
        })
        .then(res=>res.json())
      }



    return (
        <>
        <form >
        
        <label> Enter Firstname:
        <input type='text' id='Firstname' placeholder='enter Firsntame' />
        </label>
        <label>Enter lastname
        <input type='text' id='lastname' placeholder='enter Lastname' />
        </label>
        <label>Enter username:
        <input type='text' id='username' placeholder='enter username' />
    
        </label>
        <label>Enter password:
        <input type='text' id='password' placeholder='enter password' />
    
        </label>
        </form>
        <button id='form-submit' onClick={()=>posting()}>Submit</button>
        </>
    )






   
}
  export default Login