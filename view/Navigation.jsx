const React = require('react');
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation({ user }) {
console.log(user,'useeeeeeeeeeeeeer')
  return (
    <>
      {' '}
      {
        !user ? (
          <div className="navi">
            <div className="reg">
              <a href="/reg">
                Регистрация
              </a>
            </div>
            <div className="log">
              <a href="/log">
                Логинизация
              </a>
            </div>
          </div>
        ) : (
          <div className="exit">
            <a href="/logout">
              Выйти
            </a>
          </div>
        )
      }
    </>
  );
};
