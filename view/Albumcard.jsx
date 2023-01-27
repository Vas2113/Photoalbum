const React = require('react');
// const Layout = require('./Layout');

function Albumcard({ album }) {
  console.log(album, '==================================')
  return (
    
    <div className="albCard">
      <a href={`/photos/${album.id}`}>
        <img data-id={album.id} className="albumPhoto" src={`${album.Photos[0].photo}`} alt="logo" />
        <h6>
          {album.title}
        </h6>
      </a>
      <div>
        <a href={`/photo/${album.id}`} className="delete" data-id={album.id}>delete</a>
      </div>
    </div>

  );
}

module.exports = Albumcard;
