import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>I am a title</h1>;

const HeadingComponent = () => {
  return (
    <>
      {Title()}
      <Title /> // Component Composition
      <h1>This is HeadingComponent</h1>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const RestaruantCard = () => {
  return (
    <>
      <div className="res-card">
        <img
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/03/10/0/FNK_BEST-CHICKEN-AND-RICE-H_s4x3.jpg.rend.hgtvcom.1280.1280.85.suffix/1583851621211.webp"
          alt="restaruant"
        />
        <h5>Meghana Foods</h5>
        <h6>Asian, Biryani, Mexican, Chinese</h6>
        <h6>34 Minutes</h6>
        <h6>4.4 stars</h6>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
        <RestaruantCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
