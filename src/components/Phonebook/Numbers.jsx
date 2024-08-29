import { useEffect, useState } from "react"
import Agenda from "./services/Agenda"

function Numbers() {

  const [data, setdata] = useState([])



  useEffect(() => {
    Agenda.getAllAgenda().then((data)=> setdata(data))
  }, [data])
  

const eliminar=(id)=>{
  Agenda.deleteAngenda(id)

}
  return (

    <div>
      <h2>Numbers</h2>
      {
        data.map((item)=>( 
            <div  key={item.id}>
              <li>{item.name}</li>
              <li>{item.cel}</li>
              <button onClick={()=>eliminar(item.id)}>Eliminar</button>
            </div>
        )) 
      }
    </div>
  )
}

export default Numbers