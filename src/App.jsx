import { useState } from "react";
import "./App.css";
import { DATA } from "./Data";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { logo } from "./assets";

function App() {
  const [data, setData] = useState(DATA);

  const handleDelete = (food) => {
    setData(data.filter((item) => item.food !== food));
    console.log(data);
  };

  return (
    <section className="container">
      <div className="section">
        <img src={logo} alt="This is logo" className="logo" />
        <div className="input">
          <input className="search" type="text" placeholder="Add food" />
        </div>
        <ul className="list">
          {data.map((item) => (
            <li key={item.id}>
              <div>
                <h2>{item.food}</h2>
                <span>{item.price} so'm</span>
              </div>
              <button onClick={() => handleDelete(item.food)}>
                <IoClose />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
