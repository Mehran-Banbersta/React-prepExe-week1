import React from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
