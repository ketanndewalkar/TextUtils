import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Textform from './components/Textform.js';
import Alert from './components/alert.js'

function App() {
  const [alert, setalert] = useState(null);
  
  const showAlert = (message,type) => {
    setalert({
      msg:message,type:type
    });
    console.log("showalert ran");
  }

  return (
    <div className="container my-4">
      <Alert alert={alert}/>
      <Textform heading="Enter the tex to analyze" fun={showAlert}/>
    </div>

  );
}

export default App;

