import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure tou want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleToggleItem}
        onClearlist={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// state :internal data,owned by component --component memory --can be updated by the component itself
// update of state cause the component re-rendering, used to make component interactive
// props :external data,owned by parent component --similar to function parameter -- read only, receiving new props causes component to re render
