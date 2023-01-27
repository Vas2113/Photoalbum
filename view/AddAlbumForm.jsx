const React = require('react');
const Layout = require('./Layout');

module.exports = function AddAlbumForm({ title, user }) {
  return (
<Layout title={title} user={user} >
    <form className="edit_book" action="/" method="PUT">
      <h4>Форма добавления альбома</h4>
      <div className="mb-3">
        <label className="form-label">
           название альбома
          <input name="album_title" type="text" className="form-control" id="exampleInputEmail1" />
        </label>
      </div>
      <button type="submit" className="btn btn-danger">
        добавить обложку
      </button>
      {/* <div className="mb-3">
        <label className="form-label">
          изменить url книги
          <input name="url" type="text" className="form-control" id="exampleInputEmail1" />
        </label>
      </div> */}

      <button type="submit" className="btn btn-danger">
        создать альбом
      </button>
    </form>

</Layout>

  );
};
