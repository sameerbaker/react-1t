import React, { useState, useEffect } from 'react';

const PizzaComponent = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchPizzaData = async () => {
      try {
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching pizza data:', error);
      }
    };
    fetchPizzaData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Pizza Recipes</h2>
      <div className="row">
        {recipes.map(recipe => (
          <div className="col-md-4" key={recipe.recipe_id}>
            <div className="card mb-4">
              <img src={recipe.image_url} className="card-img-top" alt={recipe.title} />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">{recipe.publisher}</p>
                <a href={recipe.source_url} className="btn btn-primary">View Recipe</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaComponent;
