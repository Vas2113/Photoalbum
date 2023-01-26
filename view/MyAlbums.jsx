const React = require('react');
const Layout = require('./Layout');

module.exports = function MyAlbums({children, user, title, albums}) {
  return (
    <Layout>
     <div className='my_albums_list'>
      {albums.map(album) => (
        
      )}
     </div>
    </Layout>
  );
};
