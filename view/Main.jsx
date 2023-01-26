const React = require('react');
const Albumcard = require('./Albumcard');
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
          <Albumcard key={album.id} album={album} />
        ))}

      </div>
    </Layout>
  );
}

module.exports = Main;
