import holberton_logo from './holberton_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <p>
          School dashboard
        </p> 
      </header>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <hr />
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
