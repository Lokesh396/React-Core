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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
