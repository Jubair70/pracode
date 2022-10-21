import './App.css';
import {useState,Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      show:true
    }
  }
  
  render(){
    return (
      <div className='App'>
          <button onClick={()=>this.setState((prevState)=>({...prevState,show: !prevState.show})
          )}>Toggle:{this.state.show?'Hide':'Show'}</button>
          {
            this.state.show && <h1>Hello world</h1>
          }
      </div>
    )
  }
  
}

export default App;
