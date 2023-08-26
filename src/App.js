import './App.css';
import Button from './components/Button';
import Filter_Data from './components/Filter_Data';
import MyComponent from './components/Filter_Data2';
import { Navbar } from './components/Navbar/Navbar';

function App() {

  return (
    <div className="App">
    {/* <Filter_Data/> */}
    <Button/>
    <Navbar/>
    <MyComponent/>
    </div>
  );
}

export default App;
