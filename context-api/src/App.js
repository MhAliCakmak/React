import {ThemeProvider} from "./context/ThemeContext"
import './App.css';
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      

     
    </div>
  );
}

export default App;
