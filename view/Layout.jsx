const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/client.js" />
        <script defer src="/js/application.js" />
        <title>{title}</title>
      </head>
      <body>
        <Navigation user={user} />
        {children}
        <footer>&copy; 2023 </footer>
        {' '}

      </body>
    </html>
  );
};
