//HTML Part
<body>
<div id="app">
  <h1>Hello, World! :)</h1>
</div>
</body>

//React Part
<body>
<div id="app"></div> //this is our "mount" component, because we will be mounting(or inserting) our React into this <div>
**insert scripts here**
<script type ="text/babel"> //This <script> tag holds our entire React application
  var HelloComponent = React.createClass({ // var '...' This variable named '...' is a component. just like <div>, <p>, or <h1>, we are defining a new tag/component
    render: function(){ //MUST HAVE RENDER FUNCTION. It produces the HTML output of our component.
      return (// inside of return(...) is where we put our HTML.
        <h1>Hello, World! :)</h1>
      )
    }
  })
  ReactDOM.render(<HelloComponent />, document.querySelector('#app')) //tells ReactDOM to render the component, and put it in the <div> with id of app
</script>
</body>
//when you define a new component with React.createClass({...}):
//- we have a variable called React that has other functions and variables held within it
//- one of those functions is createClass()
//- to call a function, call it like this: createClass()
//  -- i.e. to pass a variable into it called foo, then we would call createClass(foo)
//  -- if we defined foo like this: var foo = {...}
//    --- when we pass foo to createClass, we are simply passing what it is equal to, which is {...}
/////
//the last thing to do is call ReactDOM and tell it to render the component

////////////////////////

//this is the actual react.js library. It makes the React variable availible, so we can callReact.createClass()
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.js"></script>

//this gets a library called React DOM. (Document Object Model). It is the structure that holds all the information about how to take the HTML on your page and display it
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.js"></script>

//this script parses something called JSX. looks like HTML, but isnt. It converts JSX into an HTML syntax
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
