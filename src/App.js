import React,{useEffect, useState} from 'react'
import './App.css';
let people = [];
function App() {
 
  const [searchedText,setSearchedText] = useState('')
  const [filteredList, setFilteredList] = useState(people);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(result=>{
      result.map((elem)=>people.push(elem.name))
      const filtered = people.filter((elem)=>elem.toLowerCase().includes(searchedText.toLowerCase()))
      setFilteredList(filtered)
    })
  },[searchedText])

  const searchHandler = (e) =>{
    setSearchedText(e.target.value);
  }
  return (
    <div className='App'>
        <input type="text" onChange={(e)=>searchHandler(e)}/>
        <ul>
          {
            filteredList.map((elem,index) => {
                return <li key={index}>{elem}</li>           
            })
          }
        </ul>
    </div>
  )
}
export default App;
