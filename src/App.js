import './App.css';
import Navbar from './components/navbar';
import Intro from './components/intro';
import Description from './components/description';
import Footer from './components/footer';

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

