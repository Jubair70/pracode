import { useState } from 'react';
import './App.css';
import Child from './Child.component';
function App() {
  const data = [
    { name: "Delhi",
      cities: ["Siri", "Sultanpur", "Tughlqabad", "Jahanpanah", "Firozobad"]
    },
    { name: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Jalgaon"]
    },
    { name: "West Bengal",
      cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Baharampur"]
    },
    { name: "Tamil Nadu",
      cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"]
    }
  ];

  const [lists,setList] = useState([])
  
  const loadItem=(e)=>{

    console.log(e.target.options[e.target.selectedIndex].text);
    const d = data.filter(elem=>elem.name ===e.target.options[e.target.selectedIndex].text)
    console.log(d)
    
    setList((
     prevState=> data.filter((elem)=>elem.name===e.target.options[e.target.selectedIndex].text)[0].cities
      
    ))


  }


  return (
    <div className='App'>
      
      <select onChange={(e)=>loadItem(e)}>
        {
          data.map((elem,index)=>{
            return <option key={Math.random()}>{elem.name}</option>
          })
        }
        
      </select>

<hr/>
<select >
        {
          lists.map((elem,index)=>{
            
            return <option key={Math.random()}>{elem}</option>
          })
        }
        
      </select>
        
    </div>
  )
}

export default App;
