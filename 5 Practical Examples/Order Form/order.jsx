// This is more complex example that uses two components -
// a ServiceChooser form, and the individual services inside it.
var ServiceChooser = React.createClass({

  getInitialState: function() {
    return {total: 0};
  },

  addTotal: function(price) {
    this.setState({
      total: this.state.total + price
    });
  },

  render: function() {
    var self = this;

    // Create a new Service component for each item in the items array.
    // Notice that the self.addTotal function is passed to the component.
    var services = this.props.items.map(function(s) {
      return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal}/>;
    });

    return <div>
      <h1>Our services</h1>

      <div id="services">
        {services}

        <p id="total">Total
          <b>${this.state.total.toFixed(2)}</b>
        </p>

      </div>

    </div>;

  }
});//end of the ServiceChooser component.


var Service = React.createClass({

  getInitialState: function() {
    return {active: false};
  },


  clickHandler: function() {
    var active = !this.state.active;
    this.setState({active: active});

    // Notify the ServiceChooser, by calling its addTotal method
    this.props.addTotal(active
      ? this.props.price
      : -this.props.price);
  },


  render: function() {
    return <p className={this.state.active  ?  'active' : ''}
              onClick={this.clickHandler} > {this.props.name}
              <b>{this.props.price.toFixed(2)}</b>
           </p>
  }
}); //end of the Service component.


var services = [
  {
    name: 'Web Development',
    price: 300
  },

  {
    name: 'Design',
    price: 400
  },

  {
    name: 'Integration',
    price: 250
  },

  {
    name: 'Training',
    price: 220
  }
];

// Render the ServiceChooser component, and pass the array of services
ReactDOM.render(
  <ServiceChooser items={services}/>, document.getElementById('container'));
