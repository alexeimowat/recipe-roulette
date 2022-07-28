import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Custom Component Imports
import NavHeader from './components/header/index';
import NewRecipe from './components/recipes/NewRecipe';
import SavedRecipes from './components/recipes/SavedRecipes';
import MainContent from './components/mainContent/index';
// import NavFooter from './components/footer/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
