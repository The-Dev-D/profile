import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Defenitions from './components/Defenitions';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
import {useState} from 'react';
import {useEffect} from 'react';

function App() {
 
  const [load,stopLoad] = useState(false);
  useEffect(() => {
    console.log("loaded..."+load)
  }, [load])
  return (
    <>
      <Navbar/>
      <Main toggle={stopLoad} />
      <Defenitions/>
      <Profiles/>
      <Footer/>
    </>
  );
}

export default App;
