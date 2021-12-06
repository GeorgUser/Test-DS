import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../style/App.css';
import Header from "./Header";
import HeroSection from "./HeroSection";
import ContactForm from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
