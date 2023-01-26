const React = require("react");
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation({ user }) {
  
  return (
    <>
      {" "}
      {!user ? (
        <div className="navi">
          <div className="reg">
            <a href="/reg">Регистрация</a>
          </div>
          <div className="log">
            <a href="/log">Логинизация</a>
          </div>
        </div>
      ) : (
        <div className="exit">
          <div className="myAlbum">
            <a href="/myAlbums">Мои альбомы</a>
          </div>
          <div className="allAlbum">
            <a href="/main">Все доступные альбомы</a>
          </div>
          <div className="logout">
            <a href="/logout">Выйти</a>
          </div>
        </div>
      )}
    </>
  );
};
