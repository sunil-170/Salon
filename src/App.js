import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import About_us from './components/About_us';
import Book_section from './components/Book_section';
import Working_days from './Working_days';
import Testimonals from './Testimonals';
import Join_us from './Join_us';
import Footer_end from './Footer_end';


function App() {
  return (
    <div>
      <Hero />
      <About_us />
      <Book_section />
      <Working_days />
      <Testimonals />
      <Join_us />
      <Footer_end />
    </div>
  );
}

export default App;
