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
  getInitialState: function() { // 8. component
    return {data: []};          // 8. component
  },

  render: function(){
    return(
      <div className="CommentBox">
        <h1>Comments</h1> // 2. component
        //<CommentList data={this.props.data}/>  // 2. component. and 6. component
        <CommentList data={this.state.data} />   // 8. component
        <CommentForm/> // 2. component
      </div>
    );
  }
});
ReactDOM.render( //This should be at the end of everything. It packages things up to be called
  //<CommentBox data={data}/>, // 6. component. replaced with URL to fetch server data
  <CommentBox url="/api/comments" />, // 7. component.
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
var CommentList = React.createClass({ // 6. component
  render: function(){ // 6. component
    var commentNodes = this.props.data.map(function(comment){ // 6. component
        return(
          <Comment author={comment.author} key={comment.id}> // 6. component
            {comment.text} // 6. component
          </Comment>       // 6. component
        );                 // 6. component
    });                    // 6. component
    return(
      <div className="CommentList">
        //The comments here are re-made dynamically in the data component!
        //<Comment author="Brady Paterson">This is a comment</Comment> // 4. component.
        //<Comment author="Mike Maholias">Here is *another* comment</Comment> // 4. component
        {commentNodes}     // 6. component
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
// 3. Component
// This will depend on data passed in from its parent. Data passed in from a parent component is
//available as a 'property' on the child component. These 'properties' are accessed through
//this.props.  Using props, we will be able to read the data passed to the 'Comment' from the
//'CommentList', and render some markup.
//  By surrounding a JavaScript expression in braces inside JSX(as either an attribute or child),
//you can drop text or React components into the tree. We access named attributes passed to the
//component as keys on 'this.props' and any nested elements as 'this.props.children'
var Comment = React.createClass({ // 5. component
  rawMarkup: function(){          // 5. component
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true}); // 5. component
    return { __html: rawMarkup }; // 5. component
  },

  render: function() {
    return(
      <div className="Comment">
        <h2 className="CommentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} /> // 5. component
      </div>
    );
  }
});



/*****Component Properties*****/
// 4. Component
//  Now that we have degined the 'Comment' component, we will want the author name and
//comment text passed to it. This allows us to reuse the same code for each unique comment!
//Now lets add some comments within our CommentList.
//  Note that we have passed some data from the parent 'CommentList' component to the child 'Comment'
//components. For example, we passed Brady Paterson(via an attribute) and This is a Comment(via an
//XML-like child node) to the first 'Comment'. As noted above, the 'Comment' component will access
//these 'properties' through 'this.props.author', and 'this.props.children'.



/*****Adding Markdown*****/
// 5. Component
//Markdown is a simple way to format your text inline. For example, surrounding text with
//asterisks(***) will make it emphasized.
//  Here, we use a third-party library called Marked, which takes Markdown text and converts it
//to raw HTML. We already included this library with the original markup for the page, so we can
//start using it. Lets convert the 'Comment' text to Markdown and output it with:
// {marked(this.props.children.toString())}
//  All we're doing here is caling the marked library. We need to convert 'this.props.children'
//from React's wrapped text to a raw string that the Marked library will understand, so we explicitly
// call 'toString()'.
//  There is a problem here!! Our rendered comment shows the tags in the browser when we want to
//render the tags as HTML. i.e. "<p> Hello <em>there!</em> I am a sentence </p>" shows. This is
//a result of React protecting you from an XSS attack. There is a way around this, but be very
//carefull when you decide to use it.
//  To enable this add this to the Comment component:
// rawMarkup: function(){
//    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
//    return { __html: rawMarkup};
//},
//  Also add this to the render function within the Comment Component:
// <span dangerouslySetInnerHTML={this.rawMarkup()} />
//  This is a special API that intentionally makes it difficult to insert raw HTML, but for the
//Marked library, we'll take advantage of this backdoor
//  !!Remember!! by using this feature you're relying on the Marked library to be secure. In this
//case, we pass 'sanitize: true' which tells the Marked library to escape any HTML markup in the
//source insread of passing it through unchanged.



/*****Hook Up The Data Component*****/
// 6. Component
//  So far we've been inserting the comments directly into the source code. Instead, lets render a
//blob of JSON data into the comment list. Eventually this will come from the server, but for now,
//write it in your source.
var data = [
  {id: 1, author: "Brady Paterson", text: "This is a comment"},
  {id: 2, author: "Mike Maholias", text: "Here is *another* comment"}
];
//  we need to get this data into 'CommentList' in a modular way. Modify 'CommentBox' and the
//'ReactDOM.render()' call to pass this data into the CommentList via props:
//  <CommentList data={this.props.data} />  into the function
//  <CommentBox data={data} />  into the ReactDOM.render
//this makes the data availible in the 'CommentList.' now we need to render the contents dynamically
//by adding the following to 'CommentList':
//   var commentNodes = this.props.data.map(function(comment){
//       return(
//         <Comment author={comment.author} key={comment.id}>
//           {comment.text}
//         </Comment>
//       );
//    });
//And in the return <div> for 'ComentList', replace the manual comments with:
//  {commentNodes}
//this allows the comments to be dynamic



/*****Fetching from the Server*****/
// 7. Component
//Here we will replace the hard-coded data with some dynamic data from the server. We will remove
//the data prop and replace it with a URL to fetch:
//  <CommentBox url="/api/comments"/>,
//  This component is different from prior components because it will have to re-render itself.
//The component won't have any data until the request from the server omes back, at which point
//the component may need to render some new comments. Note: the code will not be working at this step



/*****State Component*****/
// 8. Component
//  **Set Initial State**
// So far, based on each of the props, each component has rendered itself once.
//'props' are immutable: they are passed from the parent and are "owned" by the parent. To
//implement interactions, we introduce mutable state to the component. 'this.state' is private to the
//component and can be changed by calling 'this.setState()'. When the state updates the component
//rerenders itself!
//  'render()' methods are written declaratively as functions of 'this.props' and 'this.state'. The
//framework guarantees the UI is always consistent with the inputs.
//  When the server fetches data, we will be changing the comment data we have. Let's add an array of
// comment data to the 'CommentBox' component as its state:
//  getInitialState: function(){
//    return {data: []};
//  },
//  In the render function of 'CommentBox' add:
//  <CommentList data={this.state.data} />
//  By adding this, 'getInitialState()' executes exactly once during the lifecycle of the component
//and sets up the initial state of the component.
//  **Update the State**
// When the compeonent is first created, we want to GET some JSON from the server and update the
//state to reflect the latest data. We're going to use jQuery to make an asynchronous(start at
//a different time) request to the server we started earleir to fetch the data we need. The data is
//already included in the server you started (based on the 'comments.json' file), so once it's
//fetched, 'this.state.data' will look something like this:
