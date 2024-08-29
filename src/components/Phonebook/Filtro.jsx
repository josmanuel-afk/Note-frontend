import { useEffect, useState } from "react"
import Agenda from "./services/Agenda"

function Filtro() {
    const [filtroOnchange, setfiltroOnchange] = useState([])
  const [filtro, setfiltro] = useState([])
  const [data, setdata] = useState([])



  useEffect(() => {
    Agenda.getAllAgenda().then((data)=>setdata(data))
    
  
  }, [ data])
  
  
    const handlerFiltroChange = (e)=>{
        setfiltroOnchange(e.target.value)  }
      

    const Filtro =()=>{
        const namefilter= data.filter((item)=>{
         return item.name === filtroOnchange
        })
  
        setfiltro(namefilter)
  
      }
  return (
    <div>
filtro: <input onChange={handlerFiltroChange} value={filtroOnchange}></input>
<button type="submit" onClick={Filtro}>filtro</button>

{
        filtro.map((item,index)=>( 
            <ol  key={index}>
              <li>{item.name}</li>
              <li>{item.cel}</li>
            </ol>
        ))
      }
    </div>
  )
}

export default Filtro