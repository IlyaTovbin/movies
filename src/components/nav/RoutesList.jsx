import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Movies from '../../pages/movies/Movies'
import Admin from '../../pages/admin/Admin'

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Movies />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}

export default RoutesList;
