import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Section } from 'components/Sections/Section';
import { Header } from '../layout/Header/Header';
// import { Home } from '../pages/Home/Home';
// import { Movies } from '../pages/Movies/Movies';
// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { Cast } from '../Cast/Cast';
// import { Reviews } from '../Reviews/Reviews';
const  Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../MovieDetails/Reviews/Reviews'));



export const App = () => {

  return (
    <>
      <Section>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route index element={<Home/>} />
              {/* <Route path='/movies' element={<Movies/>} /> */}
              <Route path='/movies/:movieId' element={<MovieDetails/>}>
                <Route path='cast' element ={<Cast/>} />
                <Route path='reviews' element={<Reviews/>} />
              </Route>
              <Route path='*' element={ <h1> NOT FOUND </h1> } />
            </Route>
          </Routes>
      </Section>
    </>
  );
};