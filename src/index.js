import React from 'react';
import ReactDOM from 'react-dom/client';
import ShopItemClass from './ShopItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopItemClass
      brand="Tiger of Sweden"
      title='Leonard coat'
      description='Minimalistic coat in cotton-blend'
      descriptionFull='Mens minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.'
      price='399'
      currency='£'
    />
  </React.StrictMode>
);
