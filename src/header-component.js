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
    const html = `
        <div id="profile-display">
            <img src="${user.photoURL}" alt="">
            <h2>${user.displayName}</h2>
            <button id="sign-out">Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;

}

const headerNode = document.getElementById('header');

export default function loadHeader() {
    const dom = makeHeaderTemplate();
    headerNode.appendChild(dom);

    auth.onAuthStateChanged(user => {
        if(user) {
            const profile = makeProfileTemplate(user);
            headerNode.appendChild(profile);
        }
        else {
            window.location = './auth.html';
        }
    });
}
