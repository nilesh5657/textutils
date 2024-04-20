
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // setInterval(() => {
      //   document.title = "Textutils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install textutils";
      // }, 1500);
    }
    else {
      document.body.style.backgroundColor = 'white';
      setMode('light')
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    
    

    <>

      {/* <Router> */}
        {/* <Navbar title="Textutils" AboutText="About TU" /> */}
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* </div><Routes> */}
          {/* <Route path="/about" */}

          {/* element={<About />}> */}
          {/* </Route> */}
          {/* <Route path="/" */}
          < TextForm showAlert={showAlert} heading='Enter the text to analyze ' mode={mode} />
          {/* </Route> */}
          {/* </Routes> */}
          {/* here my-3 is for spacing vertically  */}
        </div>
        {/* </Router> */}


      </>

      );
      
      
}
      export default App;