//This represents an individual favorite location.
//When it is clicked, its corresponding address is searched for and highlighted in the map.
//It uses the moment library to calculate the relative time since the location was added as a favorite.

var React = require('react');
var LocationItem = require('./LocationItem');
var moment = require('./moment');

var LocationItem = React.createClass({

  handleClick(){
    this.props.onClick(this.props.address);
  },

  render(){
    var cn = "list-group-item";
    if(this.props.active){
      cn += "active-location";
    }

    return(
      <a className={cn} onClick={this.handleClick}>
        {this.props.address}
        <span className="createAt">{moment(this.props.timestamp).fromNow()}</span>
        <span className="glyphicon glyphicon-menu-right"></span>
      </a>
    )
  }

});

module.exports = LocationItem;
