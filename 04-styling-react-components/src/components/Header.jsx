import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* this is inline css <p style={{ color: 'red' }} */}
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
