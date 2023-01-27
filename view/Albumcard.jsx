const React = require('react');
// const Layout = require('./Layout');

function Albumcard({ album }) {
  return (
    
    <div className="albCard">
      <a href={`/main/photos/${album.id}`}>
        <img data-id={album.id} className="albumPhoto" src={`${album.Photos[0].photo}`} alt="logo" />
        <h6>
          {album.title}
        </h6>
      </a>
    </div>

  );
}

module.exports = Albumcard;
