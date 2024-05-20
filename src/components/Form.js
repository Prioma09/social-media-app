import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuanity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!desc) return;
    const newItem = { desc, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDesc("");
    setQuanity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for trip✈?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuanity(Number(e.target.value))}
      >
        {[...Array(20)].map((_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
