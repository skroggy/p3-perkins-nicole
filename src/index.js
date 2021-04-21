import { header } from './modules/header';
import { footer } from './modules/footer';
import { burger } from './modules/lunch-generator';

class App {
    constructor() {
        this.renderTemplate();
    }

    renderTemplate() {
        const template = `
       
        <style>
        * {
        margin: 0;
        border: 0;
        padding: 0;
    }
    
    body {
        font-family: adobe-handwriting-tiffany, sans-serif;
        font-weight: 600;
        font-style: normal;
        color: white;
        font-size: 16pt;
        background-image: url("http://dearnoire.com/p3/bg.png");
        background-position: 58.5% center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    
    
    button {
        background-color: #ed2130;
        padding: 1%;
        max-width: 250px;
        width: 70%;
        box-shadow: black -4px 6px;
        position: fixed;
        top: 50%;
        left: 13%;
    }
    
    p {
        width: 125px;
        line-height: 25px;
        position: fixed;
        top: 28%;
        right: 33%;
        text-align: center;
    }
    
    button img {
        width: 100%;
    }
    
    button:hover {
        background-color: #f6e122;
    }
    </style>

        <div>
        <h1>${header.title}</h1>
        <button><img src="http://dearnoire.com/p3/order.png" alt=""></button>
        <figure id="burger"></figure>
        </div>
        <p>${footer.foot}</p>
        `
        ;

        document.body.innerHTML = template;
    }
}

new App;