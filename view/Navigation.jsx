const React = require('react');
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation() {
  return (
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
  );
};
