import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Section } from 'components/Sections/Section';
import { Header } from '../layout/Header/Header';

const Home = lazy(() => import('../pages/Home/Home'));

const  Login = lazy(() => import('../pages/Login/Login'));
const  Register = lazy(() => import('../pages/Register/Register'));


const WatchList = lazy(() => import('../pages/WatchList/WatchList'));
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

              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />

              <Route path='/watchlist' element={<WatchList/>} />
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