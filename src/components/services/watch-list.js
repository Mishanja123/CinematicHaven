import { doc, setDoc, arrayUnion, updateDoc, arrayRemove, getDoc } from "firebase/firestore";
import {db} from '../../auth/firebase';


import Notiflix from 'notiflix';


export const addToWatchlist = async(uid, movieId, title, poster_path, overview) => {
  try {
    const watchlistRef = doc(db, "watchlists", uid);
    const watchlistDoc = await getDoc(watchlistRef);
    const watchlistData = watchlistDoc.data();
    const isMovieInList = watchlistData.movies.some(movie => movie.movieId === movieId);

    if (watchlistDoc.exists() && isMovieInList){
      await updateDoc(watchlistRef, {movies: arrayRemove({movieId, title, poster_path, overview})});

      return Notiflix.Notify.info(`${title} removed from watchlist`);
    }
    await setDoc(watchlistRef, { movies: arrayUnion({movieId, title, poster_path, overview}) }, { merge: true 
    });
    return Notiflix.Notify.success(`${title} successfully added`);
  } catch (error) {
    console.error(error);
  }
};

export const removeFromWatchList = async(uid, movieId, title, poster_path, overview) => {
  try {
    const watchlistRef = doc(db, "watchlists", uid);


    await updateDoc(watchlistRef, {movies: arrayRemove({movieId, title, poster_path, overview})});
      
    return Notiflix.Notify.info(`${title} removed from watchlist`);

  } catch (error) {
    console.error(error);
  }
};

