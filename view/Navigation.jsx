const React = require('react');
// const Log = require('./Log');
// const Reg = require('./Reg');

module.exports = function Navigation({user}) {
  return (
    <div className="navi">
      <div className="reg">
        Sign UP
      </div>
      <div className="log">
        Sign IN
      </div>
    </div>
  );
};
