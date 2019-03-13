import { auth, favoritesByUserRef } from './firebase.js';
import loadHeader from './header-component.js';
import loadMovies from './movie-list-component.js';

loadHeader();
auth.onAuthStateChanged(user => {
    const userID = user.uid;
    //path to db child
    const userFavoritesRef = favoritesByUserRef.child(userID);
    userFavoritesRef.once('value')
        .then(snapshot => {
            const data = snapshot.val();
            console.log(data);
        });
});