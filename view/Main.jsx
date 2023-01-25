const React = require('react');
const Layout = require('./Layout');
// const Navigation = require('./Navigation');

function Main({ title, name, topics }) {
  return name ? (
    <Layout title={title} name={name}>
      <div className="container">
        <h1 className="main__title">Квиз</h1>
        <a href="/topics">
          <div className="enter">Играть!</div>
        </a>

      </div>
    </Layout>
  ) : (
    <Layout title={title} name={name} topics={topics}>
      <div className="container">
        <h1 className="main__title">
          Необходимо зарегистрироваться или авторизироваться, чтобы играть!
        </h1>
        <a href="/reg">
          <div className="enter">Зарегистрироваться!</div>
        </a>

      </div>
    </Layout>
  );
}

module.exports = Main;
