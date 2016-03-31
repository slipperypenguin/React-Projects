/*****Comment Box*****/
//  This is written in JSX, it's a different version of JavaScript. Below, we pass methods in a
//JavaScript object into React.createClass() to create a new React component. The most important of
//these methods is called render. It returns a tree of React components that will eventually render to
//HTML.
//  The <div></div> tags are not actial DOM nodes; they are instantiations of React div components.
//Think of these as markers (or piees of data) that React knows how to handle. React is SAFE.
//We are not generating HTML strings, so no XSS protection is the default!
//  You do not have to return basic HTML. You can return a tree of compenents that you(or someone else)
//built. This is what makes react COMPOSABLE: a key to maintainable frontends.
//  ReactDOM.render() instantiates the root component, starts the framework, and injects the markup
//into a raw DOM element, provided as the second argument.
//  The ReactDOM module exposes DOM-specific methods, while React has the core tools shared by React
//on different platforms (like React Native!).
//  It is important that ReactDOM.render remain at the bottom of the script!!
//ReactDOM.render should only be called after the composite components have been defined.
var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="CommentBox">
        <h1>Comments</h1> // 2. component
        <CommentList/> // 2. component
        <CommentForm/> // 2. component
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox/>,
  document.getElementById('content') //This makes it so the app is created in the 'content' div in HTML
);



/*****CommentList and CommentForm skeleton*****/
// 2. component
//  This is made of simple <div></div> parts!. Add both of them to the file and then add to the above
//CommentBox declaration. Keep the ReactDOM.render call the same
//  Notice that we made HTML tags and compnents we've built. HTML components are regular React
//components, just like the ones you define, with one difference. The JSX compiler will automatically
//rewrite HTML tags to React.createElement(tagName) expressions and leave everything wlse alone. This
//is to prevent the pollution of the global namespace.
var CommentList = React.createClass({
  render: function(){
    return(
      <div className="CommentList">
        <Comment author="Brady Paterson">This is a comment</Comment> // 4. component
        <Comment author="Mike Maholias">Here is *another* comment</Comment> // 4. component
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="CommentForm">
        Well, hi there! I am a CommentForm.
      </div>
    );
  }
});



/*****Comment Component*****/
//3. Component
// This will depend on data passed in from its parent. Data passed in from a parent component is
//available as a 'property' on the child component. These 'properties' are accessed through
//this.props.  Using props, we will be able to read the data passed to the 'Comment' from the
//'CommentList', and render some markup.
//  By surrounding a JavaScript expression in braces inside JSX(as either an attribute or child),
//you can drop text or React components into the tree. We access named attributes passed to the
//component as keys on 'this.props' and any nested elements as 'this.props.children'
var Comment = React.createClass({
  render: function() {
    return(
      <div className="Comment">
        <h2 className="CommentAuthor">
          {this.props.author}
        </h2>
      </div>
    );
  }
});



/*****Component Properties*****/
//4. Component
//  Now that we have degined the 'Comment' component, we will want the author name and
//comment text passed to it. This allows us to reuse the same code for each unique comment!
//Now lets add some comments within our CommentList.
//  Note that we have passed some data from the parent 'CommentList' component to the child 'Comment'
//components. For example, we passed Brady Paterson(via an attribute) and This is a Comment(via an
//XML-like child node) to the first 'Comment'. As noted above, the 'Comment' component will access
//these 'properties' through 'this.props.author', and 'this.props.children'.



/*****Adding Markdown*****/
// 5. Component
