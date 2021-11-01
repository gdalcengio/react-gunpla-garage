import "./App.css";

import Header from "./components/Header";
import Item from "./components/Item";
import data from "./components/data/gunpla.json";

function App() {
  const gunplaList = data.gunpla;

  return (
    <div className="App">
      <Header />

      <div className="item-container">
        {gunplaList.map((gunpla) => {
          return <Item key={gunpla.name} gunpla={gunpla} />;
        })}
      </div>
    </div>
  );
}

export default App;
