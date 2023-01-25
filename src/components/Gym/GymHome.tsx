import { useState } from "react"


export default function GymHome(){
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [weeks, setWeeks] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)
    const handleClick=(day:string)=>{
       setWeeks(day)
       setDisable(!disable)
    }

    return<>
    <h3>Gym home page</h3>
    <p>select week:</p>
    {days.map((day,idx) => <li key={idx}><button disabled={disable} onClick={()=>handleClick(day)}>{day}</button></li>)}
    <br />
       { <p>{weeks}</p>}
  {disable && <p>change week: <button onClick={()=>setDisable(!disable)}>change week</button></p>}

    </>
}