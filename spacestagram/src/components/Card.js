import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'


function Card({ image }) {
    const [liked, setLiked] = useState(false)

    function toggleLiked() {
        setLiked(!liked)
    }

    return (
        <div class="card card-compact lg:card-normal card-bordered shadow-lg">
            <figure>
                <img src={image.hdurl}/>
            </figure> 
            <div class="card-body">
                <h2 class="card-title">{image.title} - {image.date}
                </h2> 
                <div class="badge mb-2">Image</div>
                <p>{image.explanation}</p> 
                <div class="card-actions">
                    <button class={liked ? "btn btn-secondary" : "btn btn-secondary btn-outline"} onClick={toggleLiked}>{
                        liked ? <FontAwesomeIcon icon={fasHeart}/> : <FontAwesomeIcon icon={farHeart}/>
                    }</button> 
                </div>
            </div>
        </div>
    )
}

export default Card

