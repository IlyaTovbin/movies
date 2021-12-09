import { useState, useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import Rating from './Rating';
import Span from './Span';
import Image from './Image';
import Loader from './Loader';
import './css/Like.css'

const Card = props => {
    const { movie, handler } = props;
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(false)
    }, [movie]);

    function preHandler(id) {
        setLoader(true)
        handler(id)
    }

    return(
        <div className="card col-12 col-md-4 mt-2">
            <Image src={movie.image_url} />
            <div className="card-body">
                <h5 className="card-title">{movie.title} <Rating rating={movie.rating} /></h5>
                <div className="d-flex justify-content-between">
                    {
                        movie.likes ? 
                            <Span content={movie.likes} color="text-success fw-bold" /> :
                            <Span content="Please click me..." color="text-mute fst-italic" /> 
                    }
                    <span>
                        { loader ? 
                            <Loader />  :
                            <FaThumbsUp size={20} onClick={() => preHandler(movie._id)} className="like-icon text-primary" />  
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;