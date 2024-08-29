import axios from "axios"
import { useEffect, useState } from "react"
import notes from "../services/notes"


function Notas() {



  const [newNote, setNewNote] = useState("a  new note")
const [showAll, setShowAll] = useState(true)


  // const courses = [
  //   {
  //     name: 'Half Stack application development',
  //     id: 1,
  //     parts: [
  //       {
  //         name: 'Fundamentals of React',
  //         exercises: 10,
  //         id: 1
  //       },
  //       {
  //         name: 'Using props to pass data',
  //         exercises: 7,
  //         id: 2
  //       },
  //       {
  //         name: 'State of a component',
  //         exercises: 14,
  //         id: 3
  //       },
  //       {
  //         name: 'Redux',
  //         exercises: 11,
  //         id: 4
  //       }
  //     ]
  //   }, 

  //   {
  //     name: 'Node.js',
  //     id: 2,
  //     parts: [
  //       {
  //         name: 'Routing',
  //         exercises: 3,
  //         id: 1
  //       },
  //       {
  //         name: 'Middlewares',
  //         exercises: 7,
  //         id: 2
  //       }
  //     ]
  //   }
  // ]


  useEffect(() => {
    notes.All().then((res)=>setNote(res))
  }, [])



  const notas = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]

  const [Note, setNote] = useState(notas)

  // const notesToShow =  Note.filter(note => note.important === true )

  console.log(Note,"notes")

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random()<0.5,
    }

    
    setNote((item)=>([ 
      ...item,
      noteObject
  
  ]))

    setNewNote(" ")

    notes.Create(noteObject)

    // axios
    // .post('http://localhost:3001/notes', noteObject)
    // .then(response => {
    //   console.log(response)
    // })

  }

  const handlerNotasChange=(e)=>{
    setNewNote(e.target.value)
  }


    const label = Note.important
    ? 'make not important' : 'make important'


  return (

    <div> 

<h2>Notas</h2>
        {Note.map((notes)=>( 
        
          <div key={notes.id}>
            <h3>{notes.name}:<br/>{notes.number}</h3>
         
          </div>
        ))
        }
   <button>{label}</button>



<br/>
    <form onSubmit={addNote}>
      <input  onChange={handlerNotasChange} value={newNote}/>
      <button type="submit">save</button>
          </form>

</div>
  )
}

export default Notas