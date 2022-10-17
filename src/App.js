import './App.css';
import users from './assets/users-data.js'

function App() {
  return (
    <div className='App'>
       {
        users.map((user,index)=>{
          return (
            <p className="user">
              <h3>{user.name}</h3>
              <p>{user.location}</p>
              <p>{user.car}</p>
            </p>
          )
          
        })
       }
    </div>
  )
}

export default App;
