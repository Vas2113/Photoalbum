const React = require('react');
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation({ user }) {
  return (
    <>
      {' '}
      {
        !user ? (
          <div className="navi">
            <a href="/reg">
              <div className="reg">
                Регистрация
              </div>
            </a>
            <a href="/log">
              <div className="log">
                Логинизация
              </div>
            </a>
          </div>
        )
          : (

            <a href="/logout">

              Выйти

            </a>
          )

      }
    </>
  );
};
