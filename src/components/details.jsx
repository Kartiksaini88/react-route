import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

let Homedetail = () => {
    let { id } = useParams()

    let [homedatas, sethomed] = useState([])
    console.log(homedatas)
    useEffect(() => {
        homedata()
    }, [])

    let homedata = async () => {
        try {
            let res = await fetch(`http://localhost:8080/home/${id}`)
            let data = await res.json()
            let hoemd = [data]
            console.log(hoemd)
            sethomed(hoemd)

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>{homedatas.map(e => <div id="homediv"><h2 id="homeh2">{e.id}.{e.name}</h2><img id="homeimg" src={e.img}></img><p id="homep">{e.content}</p></div>)}</div>
    )
}
export {Homedetail}