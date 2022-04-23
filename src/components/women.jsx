import { useEffect, useState } from "react"
import "./women.css"
let Women = ()=>{
let [women , setWomen] = useState([])

useEffect(()=>{
    Womendata()
 },[])

 let Womendata = async()=>{
     try {
         let res = await fetch("http://localhost:8080/Women")
         let data = await res.json()
         setWomen(data)
      
     } catch (error) {
         console.log(error)
     }
 }


    return(
        <div id="womendiv">{women.map(e=><div ><img src={e.img}></img></div>)}</div>
    )
}

export {Women}