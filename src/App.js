import './styles/App.css';
import Navbar from "./components/UI/navbar/Navbar";
import MyButton from "./components/UI/button/MyButton";
import DishItem from "./components/DishItem";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="main">
            <MyButton>Подобрать блюдо</MyButton>
            <DishItem/>
        </div>
    </div>
  );
}

export default App;
