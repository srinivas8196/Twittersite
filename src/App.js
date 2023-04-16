import './App.css';
import Leftsidebar from './custom_component/Leftsidebar';
import Rightsidebar from './custom_component/Rightsidebar';
import Mainfeed from './custom_component/Mainfeed';


function App() {
  return (
    <div className='twitter'>
    <Leftsidebar/>
    <Mainfeed/>
    <Rightsidebar/>
   </div>
    
  );
}

export default App;
