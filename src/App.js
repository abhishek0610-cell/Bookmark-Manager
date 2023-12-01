import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';
import Features from './components/Features';
import Download from './components/download';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />  
      <Download />
      <Footer />
     
    </div>
  );
}

export default App;
