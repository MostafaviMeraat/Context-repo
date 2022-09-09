import './App.css';
import Loading from './components/Loading';
import React,{useContext,useState,useEffect} from 'react';
import Data from './store/Data';
import User from './components/User';


function App() {

  let users = useContext(Data)
  const [list,setList] = useState([])
  const [check, setCheck] = useState(false)
  const result = useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setList(data))
    .then(setCheck(true))
  }
  ,[])
  users = list
  return (
    <div className="App">
        {check ? <Data.Provider value={users}>
          <User />
        </Data.Provider> : 
        <Loading />}
    </div>
  );
  
}

export default App;
