import { useState } from "react";
import "./App.css";
import { DATA } from "./Data";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { logo } from "./assets";

function App() {
  const [data, setData] = useState(DATA);
  const [food, setFood] = useState();
  const [cart, setCart] = useState([]);

  const handleDelete = (food) => {
    setData(data.filter((item) => item.food !== food));
  };

  const handleAdd = (event) => {
    const foundFood = data.find(
      (item) => item.food.toLowerCase() === event.toLowerCase()
    );

    setFood(foundFood);
  };

  const handleAddToCart = () => {
    setCart([...cart, food]);
    setFood(null);
  };

  return (
    <section className="container">
      <div className="section">
        <img src={logo} alt="This is logo" className="logo" />
        <div className="input">
          <input
            onChange={(e) => handleAdd(e.target.value)}
            className="search"
            type="text"
            placeholder="Add food"
          />
        </div>
        <ul className="list">
          {food ? (
            <li>
              <div>
                <h2>{food.food}</h2>
                <span>{food.price}</span>
              </div>
              <button className="add_btn">
                <FaPlus />
              </button>
            </li>
          ) : (
            <h2 className="no_food">Find Foods</h2>
          )}
        </ul>
      </div>
    </section>
  );
}

export default App;
