/**
 * <div id="parent">
 *    <div id="child1">
 *      <h1>I am child1 h1</h1>
 *      <h2>I am child1 h2 </h2>
 *    </div>
 * <div id="child2">
 *      <h1>I am child2 h1</h1>
 *      <h2>I am child2 h2 </h2>
 *    </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am child1 h1"),
    React.createElement("h2", {}, "I am child1 h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child2 h1"),
    React.createElement("h2", {}, "I am child2 h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
