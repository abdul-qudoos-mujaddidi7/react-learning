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
      List
    </div>
  );
 
}

function Stats() {
  return <footer className="stats">
    <em>You have x item on your list, and you already picked X(X%) </em></footer>;
 
}