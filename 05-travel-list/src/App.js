import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away Travel 🧳</h1>;
}

function Form({ items, setItems }) {
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

function PackingList({ items, setItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} items={items} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, items, setItems }) {
  function handleCheck() {
    setItems(
      items.map((i) =>
        i.id === item.id ? { ...i, picked: !i.picked } : i
      )
    );
  }

  function handleDelete() {
    setItems(items.filter((i) => i.id !== item.id));
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.picked}
        onChange={handleCheck}
      />
      <span
        style={item.picked ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  const total = items.length;
  const picked = items.filter((item) => item.picked).length;
  const percentage =
    total === 0 ? 0 : Math.round((picked / total) * 100);

  return (
    <footer className="stats">
      <em>
        You have {total} item{total !== 1 ? "s" : ""} on your list, and you
        already picked {picked} ({percentage}%)
      </em>
    </footer>
  );
}
