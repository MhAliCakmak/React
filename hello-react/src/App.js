import "./App.css";
import Header from "./components/Header";
import User from "./components/User";

const friends=[
  {
    id: 1,
    name: "Ahmet",
    surname: "Çakmak",
  },
  {
    id: 2,
    name: "Mehmet",
    surname: "Çakmak",
  },
  {
    id: 3,
    name: "Ali",
    surname: "Çakmak",
  },
  {
    id: 4,
    name: "Veli",
    surname: "Çakmak",
  },
]
function App() {
  return (
    <div className="App">
      <h1>React Learn</h1>
      <Header />
      <User
        name="Mehmet" 
        surname="Çakmak"
        age={20}
        isLoggedIn={false}
        friends={friends}
      />
    </div>
  );
}

export default App;
