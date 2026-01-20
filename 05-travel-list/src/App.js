const items = [
  {
    description: "Apple",
    quantity: 10,
    picked: false
  },
  {
    description: "Banana",
    quantity: 5,
    picked: true
  },
  {
    description: "Orange",
    quantity: 8,
    picked: false
  },
  {
    description: "Mango",
    quantity: 12,
    picked: true
  }
];



export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}


function Logo() {
  return <h1>🌴 Far Away Travel 🧳</h1>;
}

function Form() {
  return  <div className="add-form">
    <h3>What do u need for your 😊 trip?</h3>
  </div>
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => <Item key={index} item={item} />)}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return <li >
    <span style={item.picked ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
    <button>❌</button>
    </li>;
}
function Stats() {
  return <footer className="stats">
    <em>You have x item on your list, and you already picked X(X%) </em></footer>;
 
}