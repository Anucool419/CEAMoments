import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/footer"
import Header from "./components/header"



import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App()  {
  return (
    
   <div className="App">
    

    
      <Router>
      <Navbar/>
      <Header/>
      <Routes>
        <Route path="/"exact element={<Home/>}/>
      
      
      
      </Routes>
      <Footer/>
      </Router> 
    </div>
    
  );
}

export default App;

