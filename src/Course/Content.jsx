
function Content({courses}) {

console.log(courses,"courses")
  
  return (


    <div>
      {courses.map(course => {
        const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

        return (
          <div key={course.id}>
            <h3>{course.name}</h3>
            {course.parts.map(part => (
              <p key={part.id}>Part: {part.name}, Exercises: {part.exercises}</p>
            ))}
            <p><strong>Total de ejercicios: {totalExercises}</strong></p>
          </div>
        );
      })}

    </div>
  )
}

export default Content