const React = require('react');
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation({ user }) {
  return (
    <>
      {' '}
      {!user ? (
        <div className="navi">
          <div className="reg">
            <a className="gold" href="/reg">Регистрация</a>
          </div>
          <div className="log">
            <a className="gold" href="/log">Логинизация</a>
          </div>
        </div>
      ) : (
        <div className="exit">
          <div className="myAlbum">
            <a className="gold" href="/myAlbums">Мои альбомы</a>
          </div>
          <div className="allAlbum">
            <a className="gold" href="/main">Все доступные альбомы</a>
          </div>
          <div className="logout">
            <a className="gold" href="/logout">Выйти</a>
          </div>
        </div>
      )}
    </>
  );
};
