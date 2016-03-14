// Let's create a "real-time search" component
var SearchExample = React.createClass({
    getInitialState: function(){
        return { searchString: '' };
    },

    // If this is left out, the text box will not change its value.
    // Because in React, an input can't change independently of the value that was assigned to it
    // In our case this is  this.state.searchString
    handleChange: function(e){
        this.setState({searchString:e.target.value});
    },


    render: function() {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();

        // We are searching. Filter the results.
        if(searchString.length > 0){
            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });
        } //dont need to have 'else'
        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
                    <ul>
                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                          })
                        }
                    </ul>
                </div>;
    }
});


var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

// Render the SearchExample component on the page
ReactDOM.render(
    <SearchExample items={ libraries } />,
    document.getElementById('container')
);
