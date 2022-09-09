import { useContext, useState } from "react"
import UserContext from "./stroe/User"

const Detail = () => {
  const [state,setState] = useState("1")
  try{
    let data = useContext(UserContext)
    const name = data.map(e=>e.name).join('')
    const age = data.map(e=>e.age).join('')


    function del (name,age) {
      data=[]
      console.log(data)
    }

  return <>

      <div>
        <input style={{width: "70px", textAlign:"center", marginInline:'.5rem'}} type={"text"} value={name} />
        is 
        <input style={{width:"35px" , textAlign:"center" ,marginInline:'.5rem'}} type={"text"} value={age}/>
        years old
       <button onClick={del}>delete</button>
       </div>

  </>
  } 
   catch{
      console.error("its empty")
  }
}
export default Detail