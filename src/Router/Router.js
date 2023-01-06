import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<HomePage />} />
                <Route path="/pokedex" element={<PokedexPage />} />
                <Route path="/details/:pokemonName" element={<DetailsPage />} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router