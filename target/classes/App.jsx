import React from 'react';
import "../resources/Css/App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import FAQ from './FAQ'
import Contact from './Contact'
import Animals from './Animals'
import '../resources/Css/App.css'
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/animals" element={<Animals/>}/>
        </Routes>
      </Router>
  );
}

export default App;