const React = require('react');
const MyAlbumcard = require('./MyAlbumcard');
const Layout = require('./Layout');
// const Navigation = require('./Navigation');

function Main({ title, user, albums }) {
  // console.log(albums);
  return (
    <Layout title={title} user={user}>
      {user && (
        <h1>
          Привет,
          {' '}
          {user?.name}
        </h1>
      )}

      <div className="allAlbums">

        {albums.map((album) => (
          <MyAlbumcard key={album.id} album={album} />
        ))}

      </div>
    </Layout>
  );
}

module.exports = Main;
