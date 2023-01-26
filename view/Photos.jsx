const React = require('react');
// const Albumcard = require('./Albumcard');
const Layout = require('./Layout');
const PhotoCard = require('./PhotoCard');
// const Navigation = require('./Navigation');

function Photos({ title, user, photos }) {
  // console.log(albums);
  return (
    <Layout title={title} user={user}>

      <div className="allAlbums">

        {photos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}

      </div>
    </Layout>
  );
}

module.exports = Photos;
