// import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav'
import Body from './components/Body'
import { UserProvider } from './context/user';

function App() {
  return (
      <UserProvider>
        <Nav />
        <Body />
      </UserProvider>
  );
}

export default App;
