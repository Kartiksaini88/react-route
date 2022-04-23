import { Link } from "react-router-dom"
import "./nav.css"

let Nav = ()=>{
    return(
        <header class="header">
		<h1 class="logo"><a href="#">Flexbox</a></h1>
      <ul class="main-nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/men"}>Men</Link>
          <Link to={"/women"}>Women</Link>
      </ul>
	</header> 
    )
}
export {Nav}
