import { auth } from './firebase.js';

export function makeHeaderTemplate() {
    const html = `
    <div id="static-header">
        <img src="" alt="">
        <h1>Read a Book</h1>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfileTemplate(user) {
    const avatar = user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnN-1yD4W7elCW6bh1KHwsq4OOeI7GCUbnLw4DY_xoxocuixlkUQ';
    const html = `
        <div id="profile-display">
            <img src="${avatar}" alt="">
            <h2>${user.displayName}</h2>
            <button id="sign-out">Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}

const headerNode = document.getElementById('header');

export default function loadHeader(options) {
    const dom = makeHeaderTemplate();
    headerNode.appendChild(dom);

    if(options && options.skipAuth) {
        return;
    }

    auth.onAuthStateChanged(user => {
        if(user) {
            const profile = makeProfileTemplate(user);
            const signOutButton = profile.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            headerNode.appendChild(profile);
        } else {
            window.location = './auth.html';
        }
    });
}
