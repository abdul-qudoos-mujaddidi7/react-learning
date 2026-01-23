import { useState } from "react";
import Item from "./Item";
export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if(sortBy === "description"){
    sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
  }

  if(sortBy === "picked"){
    sortedItems=items.slice().sort((a,b)=>Number(a.picked) - Number(b.picked))
  }

  function handleClearList() {
    if (window.confirm("Are you sure you want to clear the list?")) {
      setItems([]);
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} items={items} setItems={setItems} />
        ))}
      </ul>
      <div className="actions" >
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Input order</option>
          <option value="description">Description</option>
          <option value="picked">Picked status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}