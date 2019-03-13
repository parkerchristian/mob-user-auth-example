import { auth, favoritesByUserRef } from './firebase.js';
import loadHeader from './header-component.js';
import loadMovies from './movie-list-component.js';
import objectToArray from './object-to-array.js';

loadHeader();
auth.onAuthStateChanged(user => {
    const userID = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userID);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            const favoritesList = objectToArray(data);
            loadMovies(favoritesList);
        });
});