//This renders all favorite locations. It creases a LocationItem for each.
//This takes the array with favorite locations that was passed to it, creates a LocationItem object
// for each and then presents it in a Boostrap list group

var React = require('react');
var LocationItem = require('.LocationItem');

var LocationList = React.createClass({

  render(){
    var self = this;

    var locations = this.props.locations.map(function(l){
      var active = self.props.activeLocationAddress == l.address;

      //Notice that the onClick callback of this LocationList is passed to each LocationItem
      return <LocationItem address={1.address} timestamp={1.timestamp} active{active} onClick={self.props.onClick}/>
    });

    if(!location.length){
      return null;
    }

    return(
      <div className = "list-group col-xs-12 col-md-6 col-md-offset-3">
        <span className = "list-group-item active">Saved Locations</span>
        {locations}
      </div>
    )

  }
});

module.exports = LocationList;
