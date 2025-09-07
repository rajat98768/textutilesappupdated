import './App.css';
import Navbar from './component/Navbar';
import NEWform from './component/NEWform';
import { useState } from 'react';
import Alert from './component/Alert';
import About from './component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mystyle,newstyle]= useState({backgroundColor:"white",color:"black"});
  const [text1, newtext1] = useState("Enable dark");
  const [alert1, newalert] = useState("welcome to our website");

  const toggle = () => {
    if (text1 === "Enable dark") {
      newstyle({backgroundColor:"black",color:"white"})
      document.getElementsByTagName("body")[0].style.backgroundColor ="rgba(36, 46, 67, 1)";
      document.getElementsByTagName("body")[0].style.color ="white";
      newstyle();
      newtext1("Disable dark");
      showAlert("Dark mode has been enabled");
    } else {
    document.getElementsByTagName("body")[0].style.backgroundColor ="white";
       document.getElementsByTagName("body")[0].style.color ="black"; 
      newtext1("Enable dark");
      showAlert("Light mode has been enabled");
    }
  };

  const showAlert = (word) => {
    newalert(`Success : ${word}`);
    setTimeout(() => {
      newalert(null);
    }, 1000);
  };

  return (
    <Router>
      
        <Navbar title="Textutiles"  toggle ={toggle}  clr ={text1=="Enable dark"?"white":"dark"}/>
        <Alert alert={alert1} />

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switchCheckDefault"
            onClick={toggle}
          />
         
        </div>

        <Routes>
          <Route path="/" element={<NEWform showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
     
    </Router>
  );
}

export default App;
