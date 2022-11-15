import {ThemeProvider} from "./context/ThemeContext"
import './App.css';
import {UserProvider} from "./context/UserContext"
import Header from "./components/Header";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
        <Header />
        <Profile />
        </UserProvider>
      </ThemeProvider>
      

     
    </div>
  );
}

export default App;
