import './App.css';
import Purchase from './component/Purchase.component'
import Cart from './component/Cart.component'
import Total from './component/Total.component';

function App() {
  return (
    <div className='App'>
        <Purchase/>
        <Cart/>
        <Total/>
    </div>
  )
}

export default App;
