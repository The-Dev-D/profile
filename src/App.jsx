import './App.css';
import Loader from './Loader';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Defenitions from './components/Defenitions';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
import {useState} from 'react';

let fetchTheme=false;
const now =localStorage.getItem('theme');
if(now!==null)
{
    if(now==="true")
    {
        fetchTheme = true;
        document.querySelector(":root").style.setProperty("--theme","#0f111c");
        document.querySelector(":root").style.setProperty("--color","#ffffff");
    }
}
const ShowContent = (props) => {
  return (
    <>
      <Navbar themeAccent={props.theme}/>
      <Main coverPhoto={props.mainCover}/>
      <Defenitions/>
      <Profiles/>
      <Footer/>
    </>
  )
}

function App() {
 
  const [load,setLoad] = useState(false);
  const coverUrl = new Image();
  coverUrl.src = "https://images.hdqwalls.com/wallpapers/linux-programmer-pixel-art-4k-ld.jpg";
  coverUrl.onload = () => {
      setLoad(true)
  }
  return (
    <>
      {
        load? <ShowContent mainCover={coverUrl.src} theme={fetchTheme}/> : <Loader theme={fetchTheme} />
      }
    </>
  );
}

export default App;
