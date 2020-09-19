import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const name = "Darshil";
const JsElement = <h1>I am {name}</h1>;
const jsxElement = <div>I Love JSX!</div>;
const jsxElementWithChild = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);
function giveNumber(bakery) {
  return bakery.cakes + bakery.icecream;
}
const bakery = {
  cakes: 10,
  icecream: 20,
};
const jsElement = <h1>{giveNumber(bakery)}</h1>;

const JsxWithClass = <div className="Hi">I am div tag with classname hi</div>;
ReactDOM.render(
  [JsElement, jsxElement, jsxElementWithChild, JsxWithClass, jsElement],
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
