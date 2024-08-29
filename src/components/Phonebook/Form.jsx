import { useEffect, useState } from 'react'
import Numbers from './Numbers'
import Filtro from './Filtro'
import Agenda from './services/Agenda'
import Notificacion from '../notificacion'

function Form() {


    const [newName, setNewName] = useState([])
    const [noti, setnoti] = useState(null)

  
    const [data , setdata] = useState([])
    
  
    useEffect(() => {
      Agenda.getAllAgenda().then((data)=>setdata(data))
      
    
    }, [ data])
    
  
    const handlerNameChange = (e)=>{
      setNewName((name)=>({
        ...name,
        name: e.target.value
      }))
    }
  
  
    
    const handlerCelChange = (e)=>{
      setNewName((name)=>({
        ...name,
        cel: e.target.value
      }))
    }
  
  
    
    const addName=(e)=>{
      e.preventDefault()
   const nombreRepetidos = data.some((item)=> item.name === newName.name)
console.log(nombreRepetidos)
  const addName= {
        name : newName.name,
        cel: newName.cel
      }

  
  if(nombreRepetidos){
      const filter = data.filter((data)=>{
        if(data.name === newName.name ){
          return data.id
        }

      })

      const userConfirm =confirm(`${newName.name}  is already to phonebook, replace the old number`)
     if(userConfirm){
      Agenda.updateAgenda(filter[0].id,addName)
      
      setNewName((item)=>({
        ...item,
        name:" ",
        cel:" "
      }))
     }
  
  }else{
   

    Agenda.addAgenda(addName)

    setNewName((item)=>({
      ...item,
      name:" ",
      cel:" "
    }))

    
 setnoti( `Phonebook ${newName.name} ha sido registrada`)
  }

    }
  
  return (
    <div>
          <Notificacion notificacion={noti}/>

         <form>
        <div>
          name: <input onChange={handlerNameChange}  value={newName.name}/>
          cel: <input onChange={handlerCelChange}  value={newName.cel}/>

        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <Numbers/>
      <Filtro/>    

          </div>
  )
}

export default Form