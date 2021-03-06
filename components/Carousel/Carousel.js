class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = Array.from(element.querySelectorAll('.carousel img'));
        this.index = 0;

        this.leftButton.style.zIndex = '2';
        this.rightButton.style.zIndex = '2';

        this.images.forEach(function(element){
            element.style.position = 'absolute';
        })

        this.images[this.index].style.display = 'inline';

        this.leftButton.addEventListener('click', () =>{
            this.leftButtonHandler();
        })

        this.rightButton.addEventListener('click', () =>{
            this.rightButtonHandler();
        })
    }

    leftButtonHandler(){
        const currentIndex = this.index;
        this.index--;
        if(this.index < 0){
            this.index = this.images.length - 1;
        }
        const nextIndex = this.index;

        const nextImageStart = this.images[nextIndex].width;
        const currentImageFinish = -nextImageStart;

        this.images[nextIndex].style.left = `${nextImageStart}px`;
        this.images[nextIndex].style.display = 'inline'; 

        TweenMax.to(this.images[currentIndex], 1, {left:`${currentImageFinish}`, onComplete:this.killDisplay, onCompleteParams:[this.images[currentIndex]]});
        TweenMax.to(this.images[nextIndex], 1, {left: 0});
    }

    rightButtonHandler(){
        const currentIndex = this.index;
        this.index++;
        if(this.index >= this.images.length){
            this.index = 0;
        }
        const nextIndex = this.index;

        const nextImageStart = -this.images[nextIndex].width;
        const currentImageFinish = -nextImageStart;

        this.images[nextIndex].style.left = `${nextImageStart}px`;
        this.images[nextIndex].style.display = 'inline'; 

        TweenMax.to(this.images[currentIndex], 1, {left:`${currentImageFinish}`, onComplete:this.killDisplay, onCompleteParams:[this.images[currentIndex]]});
        TweenMax.to(this.images[nextIndex], 1, {left: 0});
    }

    killDisplay(element){
        element.style.display = 'none';
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    X 1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    X 2. You will need to grab a reference to all of the images
    X 3. Create a current index
    X 4. Those buttons are gonna need some click handlers.
    X 5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    X 6. Have fun!
*/