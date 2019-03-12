var config = {
    apiKey: 'AIzaSyAoOoJD9ZvwxaAFENSYn4F7DGlAg8HX6cc',
    authDomain: 'mobbookrepo.firebaseapp.com',
    databaseURL: 'https://mobbookrepo.firebaseio.com',
    projectId: 'mobbookrepo'
};
  
firebase.initializeApp(config);


export const auth = firebase.auth();
export const db = firebase.database();
export const userRef = db.ref('user');
export const favoritesByUserRef = db.ref('favorites-by-user');