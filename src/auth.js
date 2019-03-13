import { auth, userRef } from './firebase.js';
import loadHeader from './header-component.js';

const UI = new firebaseui.auth.AuthUI(auth);

UI.start('#login-ui', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    signInSuccessUrl: './',
    callbacks: {
        signInSuccessWithAuthResult(authResult) {
            const user = authResult.user;
            userRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }
});

const options = {
    skipAuth: true
};

loadHeader(options);



