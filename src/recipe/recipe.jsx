import React, {useEffect, useState} from 'react';
import RecipeList from './recipeList';
import './inputStyle.css';

const APP_ID = 'c51e3efa';
const APP_KEY = '2515ed5d53b99ee7c57c93fac4b04961';


const Recipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('milk');

    useEffect(() => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`).then(responce => responce.json()).then(data => setRecipes(data.hits));
    }, [query]);

    // const getRecipe = async () => {
    //     const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //     const data = await responce.json();
    //     setRecipes(data.hits);
    // } 

    const input = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    const wrongInput = <div style={{height:"400"}}><h1>Sorry we don't have anything you are intrested in <span role="img" aria-label="face">😥</span></h1></div>;

    const style = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "0" ,
        margin: "0 auto",
        width: "90%",
        justifyContent: "center"
    }

    let i = 0;

    return (
        <div>
            <div className="input">
                <div>
                    <br />
                    <h1>Find something new <br />and delicious <span role="img" aria-label="yummy">😋</span></h1>
                    <form onSubmit={getSearch}>
                        <input type="text" value={search} onChange={input} />
                        <button disabled={!search.length}>Search</button>
                    </form>
                </div>
            </div>
            
            <div style={style}>
                {
                    recipes.length === 0 ? wrongInput :

                    recipes.map(e => (
                        <RecipeList 
                            key={i++}
                            Url={e.recipe.image}
                            ingredients={e.recipe.ingredients}
                            title={e.recipe.label}
                            url={e.recipe.url}
                            calories={e.recipe.calories}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Recipe;