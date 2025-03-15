import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [authenticated, setAuthenticated] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="shadow bg-white sticky top-0 z-10">
      <div className="flex justify-between items-center p-5  w-4/5 mx-auto">
        <div className="flex gap-3 items-center">
          <img className="w-15" src={LOGO_URL} alt="logo" />
          <h1 className="text-orange-500 font-bold text-2xl">ES Foods</h1>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>onlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() =>
                setAuthenticated(authenticated === "Login" ? "Logout" : "Login")
              }
            >
              {authenticated}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
