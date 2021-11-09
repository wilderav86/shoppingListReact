import React from "react";

const ListItem = ({ text, item, items, setItems, quantity }) => {
  //Event handlers
  const deleteItem = () => {
    setItems(items.filter((el) => el.id !== item.id));
  };

  const completeItem = () => {
    setItems(
      items.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            isComplete: !el.isComplete,
          };
        }
        return el;
      })
    );
  };

  const increaseQuantity = () => {
    setItems(
      items.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: (el.quantity += 1),
          };
        }
        return el;
      })
    );
  };

  const decreaseQuantity = () => {
    setItems(
      items.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            quantity: (el.quantity -= 1),
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="item-container">
      <div className="increment-button-container">
        <button onClick={increaseQuantity} className="increase-btn">
          <i className="fas fa-plus"></i>
        </button>
        <button onClick={decreaseQuantity} className="decrease-btn">
          <i className="fas fa-minus"></i>
        </button>
      </div>
      <div className="quantity-container">
        <p className="quantity">{quantity}</p>
      </div>
      <li className={`list-item ${item.isComplete ? "completed" : ""}`}>
        {text}
      </li>
      <div className="complete-delete-btn-container">
        <button onClick={completeItem} className="complete-btn">
          <i className="fas fa-check-circle"></i>
        </button>
        <button onClick={deleteItem} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ListItem;
