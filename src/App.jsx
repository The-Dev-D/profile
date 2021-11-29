import './App.css';
import Loader from './Loader';
import Navbar from './components/Navbar'
import Defenitions from './components/Defenitions';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
import {useState} from 'react';
import mypic from './components/alphabgpic.png';


function App() {

  // let darkState = !(localStorage.getItem('theme') === 'false');

  //   if(!darkState)
  //   {
  //       document.querySelector(":root").style.setProperty("--from","#d4f3ff");
  //       document.querySelector(":root").style.setProperty("--to","#97ffc5");
  //       document.querySelector(":root").style.setProperty("--color","#000000");
  //   }

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
        <Defenitions />
        <Profiles />
        <Footer/>
    </>
  )
}
export default App;
