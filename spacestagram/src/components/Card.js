import React from 'react'

function Card({ image }) {
    return (
        <div class="card card-compact lg:card-normal card-bordered shadow-lg">
            <figure>
                <img src={image.hdurl}/>
            </figure> 
            <div class="card-body">
                <h2 class="card-title">{image.title} - {image.date}
                    <div class="badge mx-2">Image</div>
                </h2> 
                <p>{image.explanation}</p> 
                <div class="card-actions">
                    <button class="btn btn-primary">LIKE</button> 
                </div>
            </div>
        </div>
    )
}

export default Card

