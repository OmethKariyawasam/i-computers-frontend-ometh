import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-[120px] bg-accent flex">
      <img src="/logo.png" alt="logo" className="h-full" />
      <div className="w-full h-full flex items-center justify-center gap-[30px]">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
}
