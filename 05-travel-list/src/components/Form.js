import { useState } from "react";

export default function Form({ items, setItems }) {
  const [item, setItem] = useState("");
  const [num, setNumber] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!item) return;

    const newItem = {
      id: Date.now(),
      description: item,
      quantity: num,
      picked: false,
    };

    setItems([...items, newItem]);
    setItem("");
    setNumber(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do u need for your 😊 trip?</h3>
      <select value={num} onChange={(e) => setNumber(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={item}
        placeholder="Item..."
        onChange={(e) => setItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}