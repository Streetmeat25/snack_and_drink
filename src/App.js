import './styles/App.css';
import Navbar from "./components/UI/navbar/Navbar";
import MyButton from "./components/UI/button/MyButton";
import DishItem from "./components/DishItem";
import DishList from "./components/DishList";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="main">
            <MyButton>Подобрать блюдо</MyButton>
            <DishList/>
        </div>
    </div>
  );
}

export default App;
