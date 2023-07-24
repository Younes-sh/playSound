import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routes/Routing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='SideLeft'></div>
        <div className='main'>
          <Routing/>
        </div>
        <div className='SideRight'>

        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
