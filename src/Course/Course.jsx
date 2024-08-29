import Header from './Header'
import Content from './Content'


function Course({courses}) {
    
  return (
    <div>
        <Header courses={courses}/>
        <Content courses = {courses}/>
    </div>
  )
}

export default Course