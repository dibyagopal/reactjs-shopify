import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css';

// const client = Client.buildClient({
//   storefrontAccessToken: 'dd4d4dc146542ba7763305d71d1b3d38',
//   domain: 'graphql.myshopify.com'
// });

const client = Client.buildClient({
  storefrontAccessToken: '51fc89f3063a95b2f0b9a7121350b5b3',
  domain: 'morelovetoday.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
