import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className="movie">
            <img className="product__img" src={props.image}></img>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Movie
