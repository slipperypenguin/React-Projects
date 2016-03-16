//This addes the App component to the page.
//It is being added to a container div the the #main id.

var React = require("react");
var App = require("./components/App");

React.render(
  <App />,
  document.getElementById('main')
);
