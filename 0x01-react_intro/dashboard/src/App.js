import holb_logo from './holb_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holb_logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p> 
      </header>
      <hr className="App-hrtop" />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
      <hr className="App-hrb" />
        {/* Use getFooterCopy function */}
        {/* Use getFullYear function to get the current */}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
