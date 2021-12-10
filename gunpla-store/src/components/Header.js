import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header(props) {
  return (
    <header className="header">
      <h1 className="header-title">Gabe's Gunpla Garage</h1>
      <div className="user-buttons">
        <a href="#/cart">
          <ShoppingCartIcon sx={{ color: "black" }}></ShoppingCartIcon>
        </a>
        <a href="#/signup" className="sign-up-button">
          Sign Up
        </a>
      </div>
    </header>
  );
}

export default Header;
