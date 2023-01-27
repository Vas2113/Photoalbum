const React = require('react');
// const Albumcard = require('./Albumcard');
const Layout = require('./Layout');
const PhotoCard = require('./PhotoCard');
// const Navigation = require('./Navigation');

function Photos({ title, user, photos }) {
  console.log(photos, '===========');
  return (
    <Layout title={title} user={user}>
      {
(user.id === photos[0]['Album.user_id'])
&& <input className="addPhoto" type="file" multiple data-id={photos[0].album_id} />

}
      <div className="allAlbums">

        {photos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}

      </div>
    </Layout>
  );
}

module.exports = Photos;
