import axios from "axios"
import { useEffect, useState } from "react"


function Api() {
const [data, setdata] = useState(null)
const [current, setcurrent]= useState()
const [value, setvalue]= useState()




useEffect(() => {
    if(current){
        
        axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${current}`)
        .then((info)=>{
            setdata(info.data)
        })
    }

}, [current])

const handelOnchange=(e)=>{
    setvalue(e.target.value)
}

const search=(e)=>{
    e.preventDefault()
    setcurrent(value)

}

  return (
    <div>
        <form onSubmit={search}>
            <label>filter pais </label>
            <input value={value} onChange={handelOnchange} />
            <button type="submit">buscar</button>
        </form>
        <div>
        {
          !data ? " " : 
         
            <div>
               
                <h3>name: {data.name.common}</h3>
                <h3> lenagua: {Object.entries(data.languages).map(([key,value])=>( 
                     <div key={key}>
                     <h3>{value}</h3> 
                   </div>

                ))
                    
                    }</h3>
                <h3> capital: {data.capital}</h3>
                <h3> area: {data.area}</h3>
                <img src={data.flags.png}/>

            </div>

        }
        </div>


    </div>
  )
}

export default Api