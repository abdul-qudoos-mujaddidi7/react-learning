import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [addFriend, setAddFriend] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);

   function selectFriend(friend) {
    setSelectedFriend(friend.name);
  }

  function addFriends(friend) {
    setFriends((friends) => [
      ...friends,friend
    ]);
    setAddFriend(false);
  }

  function splitBill() {
    // Implementation for splitting the bill
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} onClick={selectFriend} />

        {addFriend && (
          <FormAddFriend
            onAddFriends={addFriends}
          />
        )}

        <Button onClick={() => setAddFriend(!addFriend)}>
          {addFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill selectedFriend={selectedFriend} />
    </div>
  );
}

function FriendList({ friends, onClick }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onClick={onClick} />
      ))}
    </ul>
  );
}

function Friend({ friend, onClick }) {

 
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onClick(friend)}>Select</Button>
    </li>
  );
}

function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriends, }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const id = Date.now();
    const newFriend = {
      id: id,
      name: name,
      image: image || `https://i.pravatar.cc/48?u=${id}`,
      balance: 0,
    };
    onAddFriends(newFriend);
    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="https://i.pravatar.cc/48?u="
      />

      <Button type="submit">Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("you");

  const friendExpense = bill ? bill - yourExpense : "";
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend}</h2>

      <label>💰 Bill value</label>
      <input type="text" value={bill} onChange={(e) => setBill(e.target.value)} />

      <label>🧑‍🤝‍🧑 Your expense</label>
      <input type="text" value={yourExpense} onChange={(e) => setYourExpense(e.target.value)} />

      <label>👫 {selectedFriend}'s expense</label>
      <input type="text" disabled value={friendExpense} />

      <label>💵 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{selectedFriend}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
