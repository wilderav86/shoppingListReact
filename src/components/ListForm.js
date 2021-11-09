import React from "react";

const ListForm = ({ setItems, items, setInput, input }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    setItems([
      ...items,
      {
        text: input,
        id: Math.floor(Math.random() * 1000),
        isComplete: false,
        quantity: 1,
      },
    ]);

    setInput("");

    console.log(items.text);
  };

  return (
    <div className="ui container">
      <form className="form" onSubmit={HandleSubmit}>
        <div>
          <input
            className="form input"
            type="text"
            placeholder="Add Item"
            value={input}
            onChange={handleChange}
          />
          <button className="form button" type="submit" value="Add Item">
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </form>
    </div>
  );
};
export default ListForm;
