import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <Router>
    <Navbar title="Textutils" About="About Us" Home="Home"></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3 ">
        <Routes>
          <Route exact path="About" element={<About/>}>
            </Route>
            <Route exact path="/" element={ <Textform ShowAlert={ShowAlert} Heading="Try TextUtils - Word Counter Character counter"></Textform>}>             
            </Route>
        </Routes>   
      </div>
    </Router>
    </>
  );
}
export default App;
