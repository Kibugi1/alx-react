import holb_logo from './holb_logo.jpg';
import './App.css';

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
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
