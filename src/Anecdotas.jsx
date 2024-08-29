import { useState } from "react"

function Anecdotas() {

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]

      const [selected, setSelected] = useState(0)
      const [voto, setVoto] = useState([])
    
    
       const handleGenerateNumber = () => {
        const numeroAleatorio = Math.floor(Math.random() * 8);
        console.log(numeroAleatorio);
        setSelected(numeroAleatorio);
    };

    const handlerVoto = ()=>{
    setVoto((prevVoto)=>[ 
      ...prevVoto,
     {  indice: selected,
      voto:1 }
    ])
    }

   
  return (
    <div>
      <h3> 
      {anecdotes[selected]}
      </h3>
        <button onClick={handleGenerateNumber}>Next Anecdotas </button>
        <button onClick={handlerVoto}>Voto</button>
        <p>han votado :{voto.map((item,index)=>(
          <> 
          <p key={index}>{item.voto}</p>
          <p key={index}>{item.indice}</p>
          </>
        ))}</p>
    </div>
  )
}

export default Anecdotas