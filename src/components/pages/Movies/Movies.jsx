// import { useState, useEffect, Suspense } from 'react';
// import { useSearchParams, useLocation, Outlet } from 'react-router-dom';
// import Notiflix from "notiflix";
// import { getMoviesByName } from 'components/services/api';


// import { SearchMovie } from 'components/SearchMovie/SearchMovie';
// import { MovieList } from 'components/MovieList/MovieList';

// const Movies = () => {
  // const [items, setItems] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();
  // const searchQuery = searchParams.get("query") ?? "";

  // useEffect(() => {

  //   const findMovie = async () => {
  //     try {
  //         const { results } = await getMoviesByName(searchQuery);
  //         console.log({results})
  //         setItems(results);
  //     } catch(e) {
  //         console.log("Sorry here error");
  //     }
  //   }
  //   findMovie();
  // }, [searchQuery, searchParams]);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const query = e.target.query.value
  //   setSearchParams({query});
  //   e.target.reset();
  // };

  // return (
  //   <>
      // {/* <SearchMovie
      //   onSubmit={onSubmit}
      // /> */}
      // {/* <MovieList
      //   movies={items}
      //   location={location}
      // /> */}
//       {/* <Suspense fallback={<div>Loading...</div>}>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// }; */}

// export default Movies;