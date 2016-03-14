var MenuExample = React.createClass({//This is the component

    getInitialState: function(){
        return { focused: 0 };
    },

    // The clicked handler will update the state with the index of the focused menu entry
    clicked: function(index){
        this.setState({focused: index});
    },

    //Here we read the items property, which was passed as an attribute when the component was created
    render: function() {

      // The map method will loop over the array of menu entries,and will
      //  return a new array with <li> elements.
        var self = this;
        return (
            <div>
                <ul>{ this.props.items.map(function(m, index){
                    var style = '';
                    if(self.state.focused == index){
                        style = 'focused';
                    }
                    // Notice the use of the bind() method.
                    // It makes the index available to the clicked function:
                    return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
                    })
                  }
                </ul>

                <p>Selected: {this.props.items[this.state.focused]}</p>
            </div>
        );
    }
});

// Render the MenuExample component on the page, and pass an array with menu options
ReactDOM.render(
    <MenuExample items={ ['Home', 'Services', 'About', 'Contact us'] } />,
    document.getElementById('container')
);
