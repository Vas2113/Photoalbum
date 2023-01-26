const React = require('react');
const Layout = require('./Layout');
// const Navigation = require('./Navigation');

function Main({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="allAlboms">
        {user && <h1>Привет, {user.login}</h1>}
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
        <div className="albCard">
          <img className="albumPhoto" src="img/1.jpg" />
          <h6>Описание альбома</h6>
        </div>
      </div>

    </Layout>
  );
}

module.exports = Main;
