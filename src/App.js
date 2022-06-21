// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import { UserProvider } from './context/user';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <UserProvider>
        <Nav />
        <Body />
      </UserProvider>
    </>
  );
}

export default App;
