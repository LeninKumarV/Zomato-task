import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Label from './Components/Label';
import GetApp from './Components/GetApp';
import Comp from './Components/Comp';
import Faq from './Components/Faq';
import Footer from './Components/Footer';

function App() {
  const [locat, setLocation] = useState("Namakkal");

  return (
    <div className="App">
      <Header setLocation={setLocation} locat={locat}/>
      <Card/>
      <Label locat={locat} />
      <GetApp/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
