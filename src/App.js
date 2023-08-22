import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls) 
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#010893'
      showAlert('dark mode has been enabled', 'success')
      // document.title = "TextUtils - Dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      // document.title = "TextUtils - Light mode"
    }
  }
  return (
    <>
      <Router basename='/textutils'>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes> 
            <Route  path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse " mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse " mode={mode} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
