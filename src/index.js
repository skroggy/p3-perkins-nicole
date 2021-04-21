import { header } from './modules/header';
import { footer } from './modules/footer';
// import { burger } from './modules/lunch-generator';

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
        text-align: center;
        background-image: url("http://dearnoire.com/p3/bg.png");
        background-position: 58.5%;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }

    header {
        padding: 2%;
        background-color: #1149bb;
    }

    h1 {
        display: none;
    }

    #title {
        width: 65%;
        max-width: 250px;
    }

    div {
        text-align: center;
        margin-top: 100px;
        padding-bottom: 2%;
    }

    button {
        background-color: #ed2130;
        padding: 1%;
        max-width: 250px;
        width: 70%;
        box-shadow: black -4px 6px;
        display: inline-block;
    }

    button img {
        width: 100%;
    }
    
    button:hover {
        background-color: #f6e122;
    }

    figure {
        display: block;
        padding-top: 4%;
    }

    #burger {
        width: 15%;
        min-width: 250px;
        max-width: 350px;
    }

    footer {
        display: none;
    }

    @media (min-width: 768px) {
        div {
            margin-top: 40px;
        }
    }
    </style>

        <h1>${header.title}</h1>

        <header><img id="title" src="http://dearnoire.com/p3/title2.png"></header>

        <div>
        <figure><img id="burger" src=""></figure>
        <button><img src="http://dearnoire.com/p3/order.png"></button>
        </div>

        <footer>${footer.foot}</footer>
        `
        ;

        document.body.innerHTML = template;

        const imageArray = [
            "http://dearnoire.com/p3/warnpeas.png",
            "http://dearnoire.com/p3/hamlet.png",
            "http://dearnoire.com/p3/beetcar.png",
            "http://dearnoire.com/p3/avocadontworry.png",
            "http://dearnoire.com/p3/cornsupremecy.png",
            "http://dearnoire.com/p3/friednpredjudice.png",
            "http://dearnoire.com/p3/lanceshallot.png",
            "http://dearnoire.com/p3/lanceshallot.png",
            "http://dearnoire.com/p3/licensekale.png",
            "http://dearnoire.com/p3/newyolk.png" ]
        
        const image = document.getElementById("burger");
        const button = document.querySelector("button");
        
        button.addEventListener("click", () => generateRandomPicture(imageArray));
        
        function generateRandomPicture(array){
            let randomNum = Math.floor(Math.random() * array.length); 
            image.setAttribute("src", array[randomNum]);
        }
        
    }
}

new App;
