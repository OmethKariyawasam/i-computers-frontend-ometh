import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/productCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProductCard name="Laptop" image="laptop" price="100,000" />
      <ProductCard name="Mobile Phone" image="phone" price="90,000" />
      <ProductCard name="Watch" image="watch" price="10,000" />
    </>
  );
}

export default App;
