import { auth } from './firebase.js';
import loadHeader from './header-component.js';

const UI = new firebaseui.auth.AuthUI(auth);

UI.start('#login-ui', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: './'
});

const options = {
    skipAuth: true
};

loadHeader(options);



