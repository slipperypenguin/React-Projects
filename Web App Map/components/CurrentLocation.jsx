//presents the currently visited address on the map; Addresses can be added or removed from favorites by clicking star icon.
//This presents the address of the currently displated location an an H4 tag, and a clickable star icon.
//When the icon is clicked, the App's 'toggleFavorite' method is called.

var React = require('react');

var CurrentLocation = React.createClass({

  toggleFavorite(){
    this.props.onFavoriteToggle(this.props.address);
  },


  render(){
    var starClassName = "glyphicon glyphicon-star-empty";
    if(this.props.favorite){
      starClassName = "glyphicon glyphicon-star";
    }

    return{
      <div className = "col-xs-12 col-md-offset-3 current-location">
        <h4 id = "save-location">{this.props.address}</h4>
        <span className = {starClassName} onClick ={this.toggleFavorite} aria-hidden = "true"></span>
      </div>
    };
  }
});

module.exports = CurrentLocation;
