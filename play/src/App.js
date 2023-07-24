import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routes/Routing';
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import Header from './Components/Header';
function App() {
  return (
    <div className="App  ">
      <BrowserRouter>
        <div className='GlaceMorphosm d-flex'>
          <div className='SideLeft  ' style={{width:'15%'}} >
            <Navbar />
          </div>
          <div className='main   ' style={{width:'70%'}} >
            <Task />
            <Header />
            <Routing/>
          </div>
          <div className='SideRight  ' style={{width:'15%'}} >

          </div>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
