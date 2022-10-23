import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [users,setUsers] = useState([]);
  let cnt = 1;

  const getFirstName = (userInfo)=>{
     const {name: {title,first,last} } = userInfo;
     return `${title} ${first} ${last}`
  }

  const getUsersData=(page)=>{
    fetch(`https://randomuser.me/api?page=${page}`)
    .then(response=>response.json())
    .then(res=>
      {
        
        setUsers(prevState=>[...prevState,...res.results])
      })
    .catch(error=>console.log(error))
  }

  useEffect(()=>{
    getUsersData(cnt);
  },[cnt])


  return (
    <div className='App'>

       <hr/>
       <button onClick={()=>getUsersData(cnt++)}>Load More</button>
       <hr/>
       {
       
       users.map((user,index)=>{
        
        return (
          <div className='user' key={Math.random()}>
            <img src={user.picture.large} alt="No pic"/>
            <div>
            <strong>{getFirstName(user)}</strong>
              </div>

          </div>
          
        )
       })
       
       }
    </div>
  )
}

export default App;
