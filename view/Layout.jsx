const React = require('react');
const Navigation = require('./Navigation');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="app.js" />
        <title>{title}</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
};
