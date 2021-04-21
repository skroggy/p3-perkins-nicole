class Burger {
    constructor(){
        this.randomBurger();
    }

    randomBurger() {
        const imageArray = [
            "http://dearnoire.com/p3/warnpeas.png",
            "http://dearnoire.com/p3/hamlet.png",
            "http://dearnoire.com/p3/beetcar.png",
        ];
        
        const image = document.querySelector("img");
        const button = document.querySelector("button");
        
        button.addEventListener("click", () => generateRandomPicture(imageArray));
        
        function generateRandomPicture(array){
            let randomNum = Math.floor(Math.random() * array.length); 
            image.setAttribute("src", array[randomNum]);
        }
    }
}
   
// export const burger = new  Burger();