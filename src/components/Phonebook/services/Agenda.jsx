import axios from "axios";


const URL = 'http://localhost:3001/Phonebook'


const getAllAgenda=()=>{
    const data = axios.get(URL)
    return data.then((data)=> data.data)
}

const addAgenda=(newObject)=>{
    const add = axios.post(URL,newObject)
    return add.then((data)=>data.data)
}

const updateAgenda=((id,newObject)=>{
    const update = axios.put(`${URL}/${id}`,newObject)
    return update.then((data)=>data.data)

})

const deleteAngenda =((id)=>{
    const eliminar = axios.delete(`${URL}/${id}`)
    return eliminar.then((data)=>data.data)

})





export default {getAllAgenda,addAgenda,updateAgenda,deleteAngenda}