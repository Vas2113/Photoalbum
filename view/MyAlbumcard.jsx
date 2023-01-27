const React = require('react');
// const Layout = require('./Layout');

function myAlbumcard({ album }) {
  return (
    <div className="albCard">
      <a href={`/myAlbums/photos/${album.id}`}>
        {(album.Photos && album.Photos[0]?.photo) ? (
          <img data-id={album.id} className="albumPhoto" src={`${album.Photos[0].photo}`} alt="logo" />) : (
            <img data-id={album.id} className="albumPhoto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTg1Gzi_wvEjSR8BncKB-He8IKCqzS_lqChdqELcCbzA&s" alt="logo" />)}
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

module.exports = myAlbumcard;
