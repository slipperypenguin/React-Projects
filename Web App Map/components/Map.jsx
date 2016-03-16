//This integrates with the GMaps library, and renders a map from Google Maps.
//This is a special component. It wraps the Gmaps plugin, which is not a React component by itself.
//By hooking to the maps 'componentDidUpdate' method, we can initialize a real map inside the #map div
//  wherever the displayed location is changed.

var React = require(react);

var Map = React.createClass({
  componentDidMount(){
    //Only componentDidMount is called when the component is first added to the page.
    //This is why we are calling the following method manually.
    //This makes sure that our map initialization code is run the first time.
    this.componentDidMount();
  },

  componentDidUpdate(){
    if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
      //The map has already been initialized at this address.
      //Return from this method so that we dont reinitialize it (and cause it to flicker).
      return;
    }

    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng;

    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });
  },

  render(){
    return (
      <div className = "map-holder">
        <p>Loading...</p>
        <div id = "map"></div>
      </div>
    );

  }
});

module.exports = Map;
