import React from 'react';
import Recipe from './recipe/recipe';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Recipe key="recipe" />
      <Footer />
    </div>
  );
}

export default App;
