import React from 'react';
import './cardStyle.css';

const RecipeList = ({Url, ingredients, title, url, calories}) => { 
    let i=0;
    const list = ingredients.map(data => (<li key={i++}>{data.text}</li>));

    return(
        <div className="card">
            <div className="imageAndTitle">
                <h2>{title}</h2>
                <img src={Url} alt={title}/>
            </div>
            <div className="cardDetails">
            <p><strong>Calories:</strong> {calories}</p>
            <strong>Ingredients</strong>
            <ol>
                {list}
            </ol>
            <p><strong>How to cook: </strong><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></p>
            </div>                                    
        </div>
    )
}

export default RecipeList;