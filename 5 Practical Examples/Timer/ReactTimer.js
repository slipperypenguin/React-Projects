//Make sure file is a JavaScript(JSX) format
var TimerExample = React.createClass({

    //This is called before our render function. The object thats returned is assigned
    //  to   this.state   so we can use it later.
    getInitialState: function(){
        return { elapsed: 0 };
      },

    //componentDidMount is called by React when the component has been rendered on the page.
    // We can set the interval here:
    componentDidMount: function(){
        this.timer = setInterval(this.tick, 50);
      },

    //This method is called immediately before the component is removed from the page and deleted
    // We can clear the interval here:
    componentWillUnmount: function(){
        clearInterval(this.timer);
      },

    //This function is called every 50ms. It updates the elapsed counter.
    //Calling setState causes the component to be re-rendered(refreshed/reloaded)
    tick: function(){
        this.setState({elapsed: new Date() - this.props.start});
      },


    render: function() {
        //This will give a number with one digit after the decimal dot: (xx.x)
        var elapsed = Math.round(this.state.elapsed / 100);

        //Although we return an entire <p> element, React will smartly update only the changed parts
        var seconds = (elapsed / 10).toFixed(1);

        // Although we return an entire <p> element, react will smartly update which contain the seconds variable.
        return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
      }
});


ReactDOM.render(
    <TimerExample start={Date.now()} />, document.getElementById('container')
);
