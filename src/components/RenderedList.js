import React from "react";
import ListItem from "./ListItem";

const RenderedList = ({ items, setItems }) => {
  const mapItems = items.map((item) => {
    return (
      <ListItem
        setItems={setItems}
        text={item.text}
        key={item.id}
        items={items}
        item={item}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className="list-container">
      <ul className="item-list">{mapItems}</ul>
    </div>
  );
};

export default RenderedList;
