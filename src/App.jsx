import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Defenitions from './components/Defenitions';
import Profiles from './components/Profiles';
import Footer from './components/Footer';
// import {useState} from 'react';

function App() {
  // const [load, setload] = useState(false);
  return (
    <>
      <Navbar/>
      <Main/>
      <Defenitions/>
      <Profiles/>
      <Footer/>
    </>
  );
}

export default App;
