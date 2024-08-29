import { useEffect, useState } from "react"

function Notificacion({notificacion}) {

    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        if(notificacion !== null){
            setTimeout(()=>{
                  setVisible(false); 
           
             },4000)
        }
      
      return () => {
         clearTimeout()
      }
    }, [notificacion])
    

  if(notificacion === null || !visible){
    return null
  }
  
  return (
    <> 
        
        <div className="error">  {notificacion}   </div>
        
        </>
  )
}

export default Notificacion