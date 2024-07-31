import './App.css';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Description from './components/Description/description';
import Footer from './components/Footer/footer';

import Favicon from '../src/img/favicon.png'
import Favicon from "react-favicon";

const App = () => {
  const [faviconUrl, setFaviconUrl] = useState(
    Favicon
        );
  return (
    <div  className="App" >
      <Navbar />
      <Intro />
      <Description />
      <Footer />
    </div>
  );
};

export default App;

