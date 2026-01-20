import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>  
}

function Header() {
    return <header className="header">
        <h1>Fast React Pizza Co.</h1>
    </header>
    
}

function Menu() {
    return <main className="menu">
       <h2>Our menu</h2>
         <Pizza />
    </main>
}

function Footer() {
    return <footer className="footer"> {new Date().toLocaleTimeString()} We're currently open!</footer>
}

function Pizza() {
    return <div className="pizza"> 
        <img src="pizzas/spinaci.jpg" alt="Pizza" />
        <div className="pizza-info">
        <h3>Spinaci</h3>
        <p>Tomato sauce, mozarella, and basil. 10$</p>
        </div>
    </div>
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);