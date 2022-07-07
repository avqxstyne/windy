import './App.css';
import './LoginPage.css';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
function App() {
  const loggedIn = false
  return (
    <div className="App">
      {loggedIn ? (
        <Navbar />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
