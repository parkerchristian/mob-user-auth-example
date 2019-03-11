import { auth } from './firebase.js';
const UI = new firebaseui.auth.AuthUI(auth);

UI.start('#login-ui', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './'
});



