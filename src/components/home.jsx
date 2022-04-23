import{ useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./home.css"
let Home = ()=>{
 let [home , homeset] = useState([])
// console.log(home)
 useEffect(()=>{
    homedata()
 },[])

 let homedata = async()=>{
     try {
         let res = await fetch("http://localhost:8080/home")
         let data = await res.json()
         homeset(data)
      
     } catch (error) {
         console.log(error)
     }
 }

    return(
        <div>{home.map(e=><div id="homediv"><h2 id="homeh2"><Link to={`/${e.id}`}>{e.id}.{e.name}</Link></h2><img id="homeimg" src={e.img}></img><p id="homep">{e.content}</p></div>)}</div>
    )
}
export {Home}