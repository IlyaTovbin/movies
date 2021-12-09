import { FaStar } from 'react-icons/fa';

const Rating = props => {
    const { rating } = props;
    
    let count;
    let countedRating = [];

    if(rating >= 6.6) {
        count = 3;
    } else if(rating < 6.6 && rating >= 3.3) {
        count = 2;
    } else {
        count = 1;
    }

    for(let i = 0; i < count; i++){
        countedRating.push(<FaStar key={i} className="text-warning"/>)
    }

    return (
        <span>
            { countedRating }
        </span>
    )
}

export default Rating;