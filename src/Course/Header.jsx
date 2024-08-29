
function Header({courses}) {
  console.log(courses[0].name,"name")

  return (
    
    <div>
        <h1>{courses[0].name}</h1>

    </div>
  )
}

export default Header