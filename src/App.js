
import './App.css';
import  React,{ useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import Alert from './components/Alert';


import { BrowserRouter, Route,Routes
  
} from "react-router-dom";

function App() {



  
  const [ mode , setMode] = useState("light");
  const [ alert , setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null)

    } , 2000)
  }



  const toggleMode = () =>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success")
      
    }
   else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has been enabled" , "success");

   }
    
  }
return (
  <>
     <BrowserRouter> {/* <Navbar title ="TestUtilis2" about = "3"/> */}
      <Navbar  mode = { mode} toggleMode ={toggleMode}  />
      <Alert  alert ={ alert}   />
  
      <div className="container">
        <Routes>
          <Route  path='/about' element= { <About/>}  />    
          <Route  path='/' element= { <TextForm mode = {mode} showAlert ={showAlert} heading = 'enter the text'/>}  />    
        </Routes>
     
  
      
      </div>
      </BrowserRouter>
  
    
      
    
 
  
    
   </>
  

   
)
}

export default App;
