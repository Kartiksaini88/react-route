import { useEffect, useState } from "react"
import "./women.css"
let Men = ()=>{
let [men , setmen] = useState([])

useEffect(()=>{
    mendata()
 },[])

 let mendata = async()=>{
     try {
         let res = await fetch("http://localhost:8080/mens")
         let data = await res.json()
         setmen(data)
      
     } catch (error) {
         console.log(error)
     }
 }


    return(
        <div id="womendiv">{men.map(e=><div><img src={e.img}></img></div>)}</div>
    )
}

export {Men}