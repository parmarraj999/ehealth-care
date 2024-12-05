import './App.css';
import Footer from './layout/footer/footer';
import Navbar from './layout/navbar/navbar';
import Home from './page/HomePage/home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
