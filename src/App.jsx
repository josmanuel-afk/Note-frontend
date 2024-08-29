
import Notas from "./components/Notas"


const App = () => {



  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('http://localhost:3001/notes')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setNotes(response.data)
  //     })
  // }, [])
 
  

  return (
    <div>
      <h2>Holaa</h2>
      <Notas/>
    </div>
  )
}

export default App