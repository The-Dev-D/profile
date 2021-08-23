import './App.css';
import Loader from './Loader';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Defenitions from './components/Defenitions';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
import {useState} from 'react';

function App() {

  let darkState = !(localStorage.getItem('theme') === 'false');

    if(!darkState)
    {
        document.querySelector(":root").style.setProperty("--from","#d4f3ff");
        document.querySelector(":root").style.setProperty("--to","#97ffc5");
        document.querySelector(":root").style.setProperty("--color","#000000");
    }

  const [load,setLoad] = useState(false);
  const coverUrl = new Image();
  coverUrl.src = "https://images.hdqwalls.com/wallpapers/linux-programmer-pixel-art-4k-ld.jpg";
  const [start, setStart] = useState(false);
  coverUrl.onload = () => {
      setLoad(true)
  }
  console.log(darkState);
  return (
    <>
      {
        load? <ShowContent appearState={start} appearMethod={setStart} mainCover={coverUrl.src} theme={darkState}/> : <Loader />
      }
    </>
  );
}
const ShowContent = (props) => {
  return (
    <>
      <Navbar themeAccent={props.theme}/>
      <Main appearState={props.appearState} appearMethod={props.appearMethod} coverPhoto={props.mainCover}/>
      <Defenitions appearState={props.appearState} />
      <Profiles appearState={props.appearState}/>
      <Footer/>
    </>
  )
}
export default App;
