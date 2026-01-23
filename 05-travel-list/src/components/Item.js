export default function Item({ item, items, setItems }) {
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