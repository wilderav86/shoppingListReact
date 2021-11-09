import React, { useState } from "react";
import ListForm from "./ListForm";
import RenderedList from "./RenderedList";
import Header from "./Header";
import "../App.css";

const App = () => {
  //State
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div>
      <Header />

      <div className="ui container">
        <div>
          <ListForm
            setItems={setItems}
            items={items}
            setInput={setInput}
            input={input}
          />
        </div>
        <div>
          <RenderedList setItems={setItems} items={items} />
        </div>
      </div>
    </div>
  );
};

export default App;
