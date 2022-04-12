// import logo from './logo.svg';
import './App.css';
import Joinn from './components/Joinus'
import Joinnn from './components/Setting'
import Login from './components/Login';
import Conta from './components/Contact';
import Ser from './components/Search';
import Help from './components/Help';
import Home from './components/Home';
import Down from './components/Down';
function App() {
  return (
    <div className="App">
      <div class="nick">
     <Joinn />
     <Login />
     <Ser />
    < Home />
     </div>
     <div class="nick1">
     <Joinnn />
     <Conta />
     <Help />
     < Down />
     </div>
    </div>
  );
}

export default App;
