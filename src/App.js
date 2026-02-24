import logo from './logo.svg';
import './App.css';
import Zain from './components/Zain';
import Ghugh from './components/Ghugh';
import Hunain from './components/Hunain';

function App() {
  return (
    <div className="App">
      <div class="alert alert-warning" role="alert">
  Welcome Boys
</div>
     <Zain/>
     <Ghugh/>
     <Hunain/>
    </div>
  );
}

export default App;
