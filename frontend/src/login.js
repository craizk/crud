
import React, { useEffect } from "react";
import { useState,useRef } from "react";
import { BrowserRouter,useNavigate } from 'react-router-dom';
import { Button, OutlinedInput, FormControl, InputLabel, IconButton, InputAdornment } from '@mui/material';//Conponent function follows
import "./login.css"

const Login=()=>{

  

const [password,setPassword]=useState("")
const [username,setusername]=useState("")  
const [newUseState,setNewUseState]=useState(false)
const [userID,setUserId]=useState(0)
const[datas,setdata]=useState([])
const[newData,setNewData]=useState([])
const [logIn,setLogIn]=useState(false)
const[user,setUser]=useState({})
const navigate =useNavigate()



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
        .then(data=>console.log(data))    
      }

      const handleNav=async(data)=>{
        console.log("data",data)
        
        let temp= data.filter(elem=> {
          if((elem.username==username)&&(elem.password==password)){
            return elem
          }
        })
        
        navigate(`/${temp[0].id}`,{state:temp[0].id})
        
        
       
      }
    



      const loggingIn= async () =>{
        
       await fetch("http://localhost:3001/user")
        .then(res=>res.json())
        .then( data=>{return handleNav(data)}) 
        
      }

       

    return (
        <>
        <Button id="new-user" onClick={async()=>await setNewUseState(true) }>New User</Button>
        <Button id="sign-in" onClick={async()=> setLogIn(true) }>Sign in</Button>
        {logIn && (
          <>
        <form id="form-box" >
        
        <label> Enter username:
        <input type='text' id='Firstname' placeholder='username' onChange={async(e)=> await setusername(e.target.value)}/>
        </label>
        <label>Enter password
        <input type='text' id='lastname' placeholder='password' onChange={async (e)=> await setPassword(e.target.value)} />
        </label>
        </form>
        <button id='logIn'  onClick={async()=> await loggingIn()}>Login</button>
        </>
        )
        }
        {newUseState && (
          <>
        <form >
        
        <label> Enter Firstname:
        <input type='text' id='Firstname' placeholder='enter Firsntame' />
        </label>
        <label>Enter lastname
        <input type='text' id='lastname' placeholder='enter Lastname' />
        </label>
        <label>Enter username:
        <input type='text' id='username' placeholder='enter username' onChange={(e)=>setusername(e.target.value)}/>
    
        </label>
        <label>Enter password:
        <input type='text' id='password' placeholder='enter password' />
    
        </label>
        </form>
        <button id='form-submit' onClick={()=>posting()}>Submit</button>
        </>
        )
        }
        </>
    )






   
}
  export default Login