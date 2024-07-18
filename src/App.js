import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Description from './components/Description/description';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div  className="App" >
      <Navbar />
      <Intro />
      <Description />
      <Footer />
    </div>
  );
}

export default App;

