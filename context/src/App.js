import './App.css';
import {useContext, useState} from 'react';
import Card from './Card';
import UserContext from './stroe/User';



function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const data = useContext(UserContext)


  function onSubmit () {
    if (name === '' || age === '') {
      alert('Please fill each and every field(s)')  
    }
    const esm = {name:name}
    setName(data.push(esm))
    const sen = {age:age}
    setAge(data.push(sen))
    setName("")
    setAge("")
    return data
  }

  return (
    
    <div className="App">
        <input placeholder='name' value={name} autoFocus onChange={(e)=>{
          setName(e.target.value)
        }} 
        />
        <input placeholder='age' type="number" value={age} onChange={(e)=>{
          setAge(parseInt(e.target.value))

        }} />
        <div>
          <input type="submit" value="Update" onClick={onSubmit} autoComplete={'off'}  />
          <input type="submit" value='Submit' onClick={onSubmit} autoComplete={'off'} />
          {/* <button style={{marginLeft:"1rem"}} onClick={del} >Delete</button> */}
        </div>

        <UserContext.Provider value={data}>
          <Card />
          <Card />
        </UserContext.Provider>

    </div>
    
  )
}

export default App;