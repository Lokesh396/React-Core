import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "React Core"),
    React.createElement("h2", {}, "by Lokesh"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child2 h1"),
    React.createElement("h2", {}, "I am child2 h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
