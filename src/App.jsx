import './App.css';
import Loader from './Loader';
import Navbar from './components/Navbar'
import Cardspace from './components/Cardspace';
import {useState} from 'react';
import mypic from './components/alphabgpic.png';
import Definitions from './components/Defenitions';


function App() {

    const [load,setLoad] = useState(false);
    
    const pic = new Image();
    pic.src = mypic;
    pic.onload = () => {
        setLoad(true)
    }
    return (
      <>
      {
        load?<ShowContent pic={setLoad}/>:<Loader />
      }
      </>
    );
}
const ShowContent = (props) => {
  return (
    <>
        <Navbar pic={props.pic}/>
        <Cardspace />
        <Definitions />
    </>
  )
}
export default App;
