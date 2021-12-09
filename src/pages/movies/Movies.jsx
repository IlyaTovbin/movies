import React, { useState, useEffect } from 'react';
import { getMovies, likeHandler } from './moviesLogic';
import Card from '../../components/UI/Card';
import SearchBar from '../../components/UI/SearchBar';

const Movies = () => {
    const [movies, setMovies] = useState({});
    const [updateMovies, setUpdateMovies] = useState(false);
    const [stateTerm, setstateTerm] = useState('');

    useEffect(() => {
        getMovies(stateTerm).then( result => setMovies(result.data))
    }, [updateMovies, stateTerm]);

    const clickHandler = id => {
        likeHandler(id)
        .then( () => setUpdateMovies(!updateMovies))
    }

    const preSearchHandler = e => {
        if(e.target.value.length >= 1) {
            setTimeout( () => setstateTerm(e.target.value), 600 )
        } else {
            setstateTerm('');
        }
    }

    const moviesList = movies.length ? 
        movies.map( (movie, index)  => {
        return (
            <Card key={index} movie={movie} handler={clickHandler} />
        )}) : 
        <p>No movies founded...</p>
        
    return (
        <React.Fragment>
            <SearchBar searchHandler={preSearchHandler} />
            <div className="row mt-1" style={{ marginRight: '0rem', marginLeft: '0rem' }}>
                { moviesList }
            </div>
        </React.Fragment>
    );
}

export default Movies;
 