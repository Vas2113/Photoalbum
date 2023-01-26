const React = require('react');

function PhotoCard({photo}) {
  return (

    <div className="albCard">

      <img className="albumPhoto" src={photo.photo} alt="logo" />

    </div>

  );
}

module.exports = PhotoCard;
