
import './App.css';
import Home from './screens/Home';
import Blog from './screens/Blog';
import SinglePost from './screens/SinglePost';

import {BrowserRouter as Router, Route, Routes, useParams ,Link  } from 'react-router-dom';
import Navs from './components/nav';
import Footer from './components/Footer';

 

function App() {
  
  return (
    <Router>
        <Navs />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Blog/:slug" element={<SinglePost />}/>
        </Routes>
        
      </Router>
  );
}
export default App;
